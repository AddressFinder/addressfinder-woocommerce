import WooCommercePlugin from './woocommerce_plugin'

window.AF = window.AF || {}
window.AF.WooCommercePlugin = WooCommercePlugin

let _initPlugin = function(){
  var safeParseJSONObject = function(jsonObject) {
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
  };

  var parsedWidgetOptions = safeParseJSONObject(window.AddressFinderConfig.widgetOptions);
  var parsedNZWidgetOptions = safeParseJSONObject(window.AddressFinderConfig.nzWidgetOptions);
  var parsedAUWidgetOptions = safeParseJSONObject(window.AddressFinderConfig.auWidgetOptions);

  window.AF._plugin = new AF.WooCommercePlugin({
    nzKey: window.AddressFinderConfig.key_nz || window.AddressFinderConfig.key || window.AddressFinderConfig.key_au,
    auKey: window.AddressFinderConfig.key_au || window.AddressFinderConfig.key || window.AddressFinderConfig.key_nz,
    nzWidgetOptions: parsedNZWidgetOptions || parsedWidgetOptions || {},
    auWidgetOptions: parsedAUWidgetOptions || parsedWidgetOptions || {},
    defaultCountry: window.AddressFinderConfig.default_country || 'nz',
    debug: window.AddressFinderConfig.debug || false
  })
}

let _initOnDOMLoaded = function(event, repetitions) {
  // In WooCommerce/Wordpress a country change event is fired during the DOM loading process.
  // If AddressFinder is added before this event it will clear the user's existing address details from the address fields.
  // This function makes sure AddressFinder is initalised after this event.

  repetitions = repetitions || 5

  if (document.readyState == "complete") {
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

let s = document.createElement('script')
s.src = 'https://api.addressfinder.io/assets/v3/widget.js'
s.async = 1
s.onload = _initOnDOMLoaded
document.body.appendChild(s)
