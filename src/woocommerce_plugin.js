import ConfigManager from './config_manager'
import { PageManager, EmailPageManager, PhonePageManager, MutationManager } from '@addressfinder/addressfinder-webpage-tools'

(function (d, w) {
  class WooCommercePlugin {
    constructor() {

      this.version = "1.7.6"

      // Manages the mapping of the form configurations to the DOM.
      this.PageManager = null

       // Manages the email mapping of the form configurations to the DOM.
       this.EmailPageManager = null

       // Manages the phone mapping of the form configurations to the DOM.
       this.PhonePageManager = null

      // Manages the form configurations, and creates any dynamic forms
      this.ConfigManager = null

      this._initPlugin = this._initPlugin.bind(this)

      this.addressfinderDebugMode = this.addressfinderDebugMode.bind(this)
      w.addressfinderDebugMode = this.addressfinderDebugMode

      this._initOnDOMLoaded()
    }

    mutationEventHandler() {
      // When the form mutates, reload our form configurations, and reload the form helpers in the page manager.
      let addressFormConfigurations = this.ConfigManager.load()
      if (this.PageManager) {
        this.PageManager.reload(addressFormConfigurations)
      }

      if (this.EmailPageManager) {
        this.EmailPageManager.reload(this.ConfigManager.loadEmailConfigurations())
      }

      if (this.PhonePageManager) {
        // notify country has changed:
        this.PhonePageManager.reload(this.ConfigManager.loadPhoneConfigurations())
      }
    }

    _safeParseJSONObject(jsonObject) {
      if (jsonObject == undefined) {
        return null;
      }

      try {
        jsonObject = JSON.parse(jsonObject);
      } catch (e) {
        if (w.AddressFinderConfig.debug) {
          alert('Invalid widget option: ' + jsonObject);
        }

        return null;
      }

      return jsonObject;
    }

    _initOnDOMLoaded(event, repetitions) {
      // In WooCommerce/Wordpress a country change event is fired during the DOM loading process.
      // If AddressFinder is added before this event it will clear the user's existing address details from the address fields.
      // This function makes sure AddressFinder is initalised after this event.

      repetitions = repetitions || 10

      if (d.readyState == "complete" && typeof w.AddressFinder != 'undefined') {
        setTimeout(() => {
          console.log('ready state')
          this._initPlugin()
        }, 1000)
        return
      }

      if (repetitions == 0) {
        // if 5 seconds have passed and the DOM still isn't ready, initalise AddressFinder
        console.log('repetition zero')
        this._initPlugin()
        return
      }

      setTimeout(() => {
        // if less than 5 seconds have passed and the DOM isn't ready, recall the function to check again
        this._initOnDOMLoaded('ignoredEvent', repetitions - 1)
      }, 1000)
    }

    _initPlugin() {
      let parsedWidgetOptions = this._safeParseJSONObject(w.AddressFinderConfig.widget_options) || {};
      let parsedNzWidgetOptions = this._safeParseJSONObject(w.AddressFinderConfig.nz_widget_options) || parsedWidgetOptions;
      let parsedAuWidgetOptions = this._safeParseJSONObject(w.AddressFinderConfig.au_widget_options) || parsedWidgetOptions;
      let parsedEvWidgetOptions = w.AddressFinderConfig.email || {};
      let parsedPvWidgetOptions = w.AddressFinderConfig.phone || {};
      let clientVersion = { ca: `WooCommerce/${this.version}` };

      const widgetConfig = {
        nzKey: w.AddressFinderConfig.key_nz || w.AddressFinderConfig.key || w.AddressFinderConfig.key_au,
        auKey: w.AddressFinderConfig.key_au || w.AddressFinderConfig.key || w.AddressFinderConfig.key_nz,
        nzWidgetOptions: {...parsedNzWidgetOptions, ...clientVersion},
        auWidgetOptions: {...parsedAuWidgetOptions, ...clientVersion},
        intWidgetOptions: {...parsedWidgetOptions, ...clientVersion},
        evWidgetOptions: {...parsedEvWidgetOptions, ...clientVersion},
        pvWidgetOptions: {...parsedPvWidgetOptions, ...clientVersion},
        defaultCountry: w.AddressFinderConfig.default_country || 'nz',
        debug: w.AddressFinderConfig.debug || false,
      }

      this.ConfigManager = new ConfigManager()

      // Watches for any mutations to the DOM, so we can reload our configurations when something changes.
      new MutationManager({
        widgetConfig: widgetConfig,
        mutationEventHandler: this.mutationEventHandler.bind(this),
        ignoredClass: "af_list"
      })

      if (window.AddressFinderConfig.address_widget_enabled) {
        this._initAddressWidget(widgetConfig)
      }

      if (window.AddressFinderConfig.email_widget_enabled) {
        widgetConfig.evWidgetOptions.rules = this._safeParseJSONObject(w.AddressFinderConfig.email.rules);
        this._initEmailWidget(widgetConfig)
      }

      if (window.AddressFinderConfig.phone_widget_enabled) {
        widgetConfig.pvWidgetOptions.rules = this._safeParseJSONObject(w.AddressFinderConfig.phone.rules);
        // need to map some country names found in the HTML
        widgetConfig.pvWidgetOptions.countryMappings = {"United Kingdom (UK)" : "GB", "United States (US)" : "US"}
        this._initPhoneWidget(widgetConfig)
      }
    }

    _initAddressWidget(widgetConfig) {
      this.PageManager = new PageManager({
        addressFormConfigurations: this.ConfigManager.load(),
        widgetConfig,
        // When an address is selected dispatch this event on all the updated form fields. This tells the store the fields have been changed.
        formFieldChangeEventToDispatch: 'change',
        // An event listener with this event type is attached to country element. When the country changes the active country for the widget is set.
        countryChangeEventToListenFor: 'blur'
      })

      this._setVersionNumbers()
    }

    _initEmailWidget(widgetConfig) {
      this.EmailPageManager = new EmailPageManager({
        formConfigurations: this.ConfigManager.loadEmailConfigurations(),
        widgetConfig
      })
    }

    _initPhoneWidget(widgetConfig) {
      this.PhonePageManager = new PhonePageManager({
        formConfigurations: this.ConfigManager.loadPhoneConfigurations(),
        widgetConfig,
        // An event listener with this event type is attached to country element. When the country changes the default country code for the widget is set.
        countryChangeEventToListenFor: 'blur'
      })
    }

    _setVersionNumbers() {
      // rename webpage tools version from 'version' to 'webpageToolsVersion'
      this.PageManager['webpageToolsVersion'] = this.PageManager.version
      this.PageManager.version = this.version
    }

    /*
    * When addressfinderDebugMode() is typed into the Javascript console the plugin will be reinitialised with debug set to true.
    * This allows us to debug more easily on customer sites.
    */
    addressfinderDebugMode() {
      w.AddressFinderConfig.debug = true
      this._initPlugin()
    }
  }

  function loadAddressfinderScript(script, callback) {
    let s = document.createElement('script')
    s.src = script
    s.async = 1
    s.onload = callback
    document.body.appendChild(s)
  }

  // Nested callbacks to load our scripts asynchronously and sequentially.
  loadAddressfinderScript('https://api.addressfinder.io/assets/v3/widget.js',
    function () { loadAddressfinderScript('https://api.addressfinder.io/assets/email/v2/widget.js',
      function () { loadAddressfinderScript('https://api.addressfinder.io/assets/phone/v2/widget.js',
        function() { new WooCommercePlugin }
      )}
    )}
  )

})(document, window)
