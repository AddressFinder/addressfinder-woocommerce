import ConfigManager from './config_manager'
import { PageManager, MutationManager } from '@addressfinder/addressfinder-webpage-tools'

(function (d, w) {
  class WooCommercePlugin {
    constructor() {

      this.version = "1.6.1"

      // Manages the mapping of the form configurations to the DOM.
      this.PageManager = null

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

      // Phone widget needs to know there has been a change.
      checkForCountryChange()
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
      let parsedWidgetOptions = _safeParseJSONObject(w.AddressFinderConfig.widget_options);
      let parsedNZWidgetOptions = _safeParseJSONObject(w.AddressFinderConfig.nz_widget_options);
      let parsedAUWidgetOptions = _safeParseJSONObject(w.AddressFinderConfig.au_widget_options);

      const widgetConfig = {
        nzKey: w.AddressFinderConfig.key_nz || w.AddressFinderConfig.key || w.AddressFinderConfig.key_au,
        auKey: w.AddressFinderConfig.key_au || w.AddressFinderConfig.key || w.AddressFinderConfig.key_nz,
        nzWidgetOptions: parsedNZWidgetOptions || parsedWidgetOptions || {},
        auWidgetOptions: parsedAUWidgetOptions || parsedWidgetOptions || {},
        defaultCountry: w.AddressFinderConfig.default_country || 'nz',
        debug: w.AddressFinderConfig.debug || false
      }

      this.ConfigManager = new ConfigManager()

      // Watches for any mutations to the DOM, so we can reload our configurations when something changes.
      new MutationManager({
        widgetConfig: widgetConfig,
        mutationEventHandler: this.mutationEventHandler.bind(this),
        ignoredClass: "af_list"
      })

      this.PageManager = new PageManager({
        addressFormConfigurations: this.ConfigManager.load(),
        widgetConfig,
        // When an address is selected dispatch this event on all the updated form fields. This tells the store the fields have been changed.
        formFieldChangeEventToDispatch: 'change',
        // An event listener with this event type is attached to country element. When the country changes the active country for the widget is set.
        countryChangeEventToListenFor: 'blur'
      })

      this._setVersionNumbers()

      w.AddressFinder._woocommercePlugin = this.PageManager

      _loadEmailWidget()
      _loadPhoneWidget()
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

  function _loadEmailWidget() {
    if (w.AddressFinderConfig.email) {

      let s = document.createElement("script");
      s.src = 'https://api.addressfinder.io/assets/email/v2/widget.js'
      s.async = 1;
      s.onload = _initialiseEmailWidget
      d.body.appendChild(s)
    }

    function _initialiseEmailWidget(){
      let conf = {
        key: w.AddressFinderConfig.key_nz || w.AddressFinderConfig.key_au || w.AddressFinderConfig.key,
      }

      conf.rules = _safeParseJSONObject(w.AddressFinderConfig.email.rules)

      new AddressfinderEmail.Email.Widget("input[type=email]", conf.key, conf);
    };
  }

  var phoneLoaded = false
  var previousCountry = null
  var countryElement = null
  function _loadPhoneWidget() {
    if (w.AddressFinderConfig.phone) {

      let s = document.createElement("script");
      s.src = 'http://api.addressfinder.io/assets/phone/v2/widget.js'
      s.async = 1;
      s.onload = _initialisePhoneWidget
      d.body.appendChild(s)
    }

    countryElement = document.getElementById('billing_country')

    function _initialisePhoneWidget(){
      let conf = {
        key: w.AddressFinderConfig.key_nz || w.AddressFinderConfig.key_au || w.AddressFinderConfig.key,
        defaultCountryCode: w.AddressFinderConfig.phone.defaultCountryCode,
        countrySelect: "#billing_country"
      }

      conf.rules = _safeParseJSONObject(w.AddressFinderConfig.phone.rules)

      new AddressfinderPhone.Phone.Widget("input[type=tel]", conf.key, conf);

      if (countryElement) {
        phoneLoaded = true
        previousCountry = countryElement.value
      }
    };
  }

  // Phone widget needs to know there has been a change.
  function checkForCountryChange() {
    if (phoneLoaded && countryElement.value != previousCountry) {
      try {
        previousCountry = countryElement.value
        countryElement.dispatchEvent(new Event("change", { bubbles: false }));
      } catch (error) {
        // do nothing
      }
    }
  }

  function _safeParseJSONObject(jsonObject) {
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

  var s = d.createElement('script')
  s.src = 'https://api.addressfinder.io/assets/v3/widget.js'
  s.async = 1;
  s.onload = function () { new WooCommercePlugin }
  d.body.appendChild(s)

})(document, window)
