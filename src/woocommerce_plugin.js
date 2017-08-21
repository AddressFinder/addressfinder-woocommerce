import "core-js/fn/array/map"
import "core-js/fn/array/filter"
import "core-js/fn/array/find"
import "core-js/fn/array/from"
import "core-js/fn/object/values"

// The AddressFinder plugin for WooCommerce adds an autocomplete capability to the
// delivery and billing address fields of your online store.
//
// https://wordpress.org/plugins/addressfinder-woo/
//
// VERSION: 1.1.2
export default class WooCommercePlugin {
  constructor(widgetConfig) {
    this.version = "1.2.8"
    this.widgetConfig = widgetConfig
    this.widgets = {}
    this.countryCodes = ['nz', 'au']
    $ = window.jQuery

    this.initialisePlugin()
  }

  setWidgetPostion(widget) {
    widget._getPosition = function(){
      var coords = $(this.element).offset();
      coords.top += $(this.element).outerHeight();
      return coords;
    };
  }

  bindToAddressPanel(panelPrefix){

    this.widgets.nullWidget = {
      enable: function() { },
      disable: function() { },
      on: function() { }
    };

    this.widgets.nz = new window.AddressFinder.Widget(document.getElementById(panelPrefix + 'address_1'), this.widgetConfig.nzKey, 'nz', this.widgetConfig.nzWidgetOptions)
    this.widgets.nz.prefix = panelPrefix
    this.widgets.nz.on('result:select', this.selectNewZealand.bind(this, panelPrefix));

    this.widgets.au = new window.AddressFinder.Widget(document.getElementById(panelPrefix + 'address_1'), this.widgetConfig.auKey, 'au', this.widgetConfig.auWidgetOptions);
    this.widgets.au.prefix = panelPrefix
    this.widgets.au.on('result:select', this.selectAustralia.bind(this, panelPrefix));

    var countryElement = $('#' + panelPrefix + 'country');
    // Sometimes there is no countryElement. Not calling the changeHandler means
    // that it can remain enabled.
    if(countryElement[0]){
      countryElement.change(this._countryChangeHandler.bind(this));

      // Run the countryChangeHandler first to enable/disable the currently selected country
      this._countryChangeHandler(null, true);
    }
  }

  _countryChangeHandler(event, preserveValues){
    var activeCountry;
    switch ($('#' + this.widgets.au.prefix + 'country').val()) {
      case 'NZ':
      activeCountry = "nz"
      break;
    case 'AU':
      activeCountry = "au"
      break;
    default:
      activeCountry = "null";
    }

    this._setActiveCountry(activeCountry)
    const isInactiveCountry = countryCode => countryCode != activeCountry
    const inactiveCountryCode = this.countryCodes.filter(isInactiveCountry)
    if(!preserveValues) this._clearElementValues(inactiveCountryCode[0])
}

  _setActiveCountry(activeCountry){
    for (var i = 0; i < this.countryCodes.length; i++) {
      this.widgets[this.countryCodes[i]].disable()
    }
    this.widgets[activeCountry].enable()
    this.setWidgetPostion(this.widgets[activeCountry])
}

  checkFieldPresent(prefix, field) {
    return !!document.getElementById(prefix + field);
  };

  _clearElementValues(countryCode) {
    var prefix = this.widgets[countryCode].prefix
    var fields = [
      'address_1',
      'address_2',
      'city',
      'postcode'
    ];

    for (var i = 0; i < fields.length; i++) {
      if (this.checkFieldPresent(prefix, fields[i])) {
        this._setElementValue(prefix + fields[i], '')
      }
    }
    this._setStateValue(prefix + 'state', '')
  };

  selectAustralia(prefix, address, metaData) {
    if (this.checkFieldPresent(prefix, 'address_2')) {
      this._setElementValue(prefix + 'address_1', metaData.address_line_1);
      this._setElementValue(prefix + 'address_2', metaData.address_line_2 || '');
    } else {
      var combinedAddressLine1And2 = metaData.address_line_1 + ', ' + metaData.address_line_2;
      this._setElementValue(prefix + 'address_1', combinedAddressLine1And2);
    }
    this._setElementValue(prefix + 'city', metaData.locality_name || '');
    this._setStateValue(prefix + 'state', metaData.state_territory);
    this._setElementValue(prefix + 'postcode', metaData.postcode);
  };


  selectNewZealand(prefix, fullAddress, metaData) {
    let selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);
    this._setElementValue(prefix + 'address_1', selected.address_line_1_and_2())
    this._setElementValue(prefix + 'address_2', selected.suburb())
    this._setElementValue(prefix +'city', selected.city())
    this._setElementValue(prefix + 'postcode', selected.postcode())
    this._setStateValue(prefix + 'state', metaData.region);
  }


  _setElementValue(elementId, value){
    var element = document.getElementById(elementId)
    if (element) {
      element.value = value;
      return;
    }

    var errorMessage = 'AddressFinder Error - unable to find an element with id: ' + elementId;

    if (true) {
      alert(errorMessage);
      return;
    }

    if (window.console) {
      window.console.log(errorMessage);
    }
  }

  _setStateValue(elementId, value) {
    var element = document.getElementById(elementId)
    if (element) {

      var region_code = {
        'Auckland Region': 'AK',
        'Bay Of Plenty Region': 'BP',
        'Canterbury Region': 'CT',
        'Gisborne Region': 'GI',
        'Hawke\'s Bay Region': 'HB',
        'Manawatu-Wanganui Region': 'MW',
        'Marlborough Region': 'MB',
        'Nelson Region': 'NS',
        'Northland Region': 'NL',
        'Otago Region': 'OT',
        'Southland Region': 'SL',
        'Taranaki Region': 'TK',
        'Tasman Region': 'TM',
        'Waikato Region': 'WA',
        'Wellington Region': 'WE',
        'West Coast Region': 'WC',
        'No Region (Chatham Islands)': null
      }

      if (element.options) {
        var selectedOptionValue;
        for (var i = 0; i < element.options.length; i++) {
          let optionVal = element.options[i].value
          if (optionVal == value || optionVal == region_code[value]) {
            selectedOptionValue = optionVal
          }
        }
        $(element).select2().val(selectedOptionValue).trigger('change');
        return
      }
    }
  }

  initialisePlugin(){
    if (document.getElementById('billing_address_1')){
      this.bindToAddressPanel('billing_');
    }

    if (document.getElementById('shipping_address_1')){
      this.bindToAddressPanel('shipping_');
    }
  };

}
