import ConfigManager from './config_manager'
import { PageManager, MutationManager } from '@addressfinder/addressfinder-webpage-tools'

(function(d, w) {
  class WooCommercePlugin {
    constructor() {

      this.version = "1.2.17"
      
      // Manages the mapping of the form configurations to the DOM. 
      this.PageManager = null

      // Manages the form configuraions, and creates any dynamic forms
      this.ConfigManager = new ConfigManager()

      // Watches for any mutations to the DOM, so we can reload our configurations when something changes.
      new MutationManager({
        mutationEventHandler: this.mutationEventHandler.bind(this),
        ignoredClass: "af_list"
      })

      this._initPlugin()

    }

    safeParseJSONObject = function(jsonObject) {
      if(jsonObject == undefined){
        return null;
      }
  
      try {
        jsonObject = JSON.parse(jsonObject);
      } catch (e) {
        if (AFC.debug) {
          alert('Invalid widget option: ' + jsonObject);
        }
  
        return null;
      }
  
      return jsonObject;
    }

    _initOnDOMLoaded = function(event, repetitions) {
      // In WooCommerce/Wordpress a country change event is fired during the DOM loading process.
      // If AddressFinder is added before this event it will clear the user's existing address details from the address fields.
      // This function makes sure AddressFinder is initalised after this event.
    
      repetitions = repetitions || 10
    
      if (d.readyState == "complete" && typeof w.AddressFinder != 'undefined') {
        setTimeout(_initPlugin, 1000)
        return
      }
    
      if (repetitions == 0) {
        // if 5 seconds have passed and the DOM still isn't ready, initalise AddressFinder
        _initPlugin()
        return
      }
    
      setTimeout(function() {
        // if less than 5 seconds have passed and the DOM isn't ready, recall the function to check again
        _initOnDOMLoaded('ignoredEvent', repetitions - 1)
      }, 1000)
    }

    _initPlugin() {
      this._initOnDOMLoaded()

      let parsedWidgetOptions = safeParseJSONObject(w.AddressFinderConfig.widget_options);
      let parsedNZWidgetOptions = safeParseJSONObject(w.AddressFinderConfig.nz_widget_options);
      let parsedAUWidgetOptions = safeParseJSONObject(w.AddressFinderConfig.au_widget_options);
    
      const widgetConfig = {
        nzKey: w.AddressFinderConfig.key_nz || w.AddressFinderConfig.key || w.AddressFinderConfig.key_au,
        auKey: w.AddressFinderConfig.key_au || w.AddressFinderConfig.key || w.AddressFinderConfig.key_nz,
        nzWidgetOptions: parsedNZWidgetOptions || parsedWidgetOptions || {},
        auWidgetOptions: parsedAUWidgetOptions || parsedWidgetOptions || {},
        defaultCountry: w.AddressFinderConfig.default_country || 'nz',
        debug: w.AddressFinderConfig.debug || false
      }

      this.PageManager = new PageManager({
        addressFormConfigurations: this.ConfigManager.load(),
        widgetConfig,
        eventToDispatch: 'input' 
      })

      w.AddressFinderPlugin._woocommercePlugin = this.PageManager
    }

  }

  var s = d.createElement('script')
  s.src = 'https://api.addressfinder.io/assets/v3/widget.js'
  s.async = 1
  s.onload = function() { new WooCommercePlugin }
  d.body.appendChild(s)

})(document, window)
