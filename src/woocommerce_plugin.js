// The AddressFinder plugin for WooCommerce adds an autocomplete capability to the
// delivery and billing address fields of your online store.
//
// https://wordpress.org/plugins/addressfinder-woo/
//
// VERSION: 1.2.10
export default class WooCommercePlugin {
  constructor(widgetConfig) {
    this.version = "1.2.10"
    this.widgetConfig = widgetConfig
    $ = window.jQuery
    this.initialisePlugin()
  }

  _setWidgetPostion(widget) {
    //adjusts the position of the widget to prevent it rendering in front of address fields
    widget._getPosition = function(){
      var coords = $(this.element).offset();
      coords.top += $(this.element).outerHeight();
      return coords;
    };
  }

  bindToAddressPanel(panelPrefix){

    var widgets = {}

    widgets.null = {
      enable: function() { },
      disable: function() { },
      on: function() { }
    };

    widgets.nz = new window.AddressFinder.Widget(document.getElementById(panelPrefix + 'address_1'), this.widgetConfig.nzKey, 'nz', this.widgetConfig.nzWidgetOptions)
    widgets.nz.prefix = panelPrefix
    widgets.nz.on('result:select', this.selectNewZealand.bind(this, panelPrefix));

    widgets.au = new window.AddressFinder.Widget(document.getElementById(panelPrefix + 'address_1'), this.widgetConfig.auKey, 'au', this.widgetConfig.auWidgetOptions);
    widgets.au.prefix = panelPrefix
    widgets.au.on('result:select', this.selectAustralia.bind(this, panelPrefix));


    var countryElement = $('#' + panelPrefix + 'country');
    // Sometimes there is no countryElement. Not calling the changeHandler means
    // that it can remain enabled.
    if(countryElement[0]){
      countryElement.change(countryChangeHandler.bind(this));

      // Run the countryChangeHandler first to enable/disable the currently selected country
      countryChangeHandler.bind(this)(null, true);
    } else {
      setActiveWidget.bind(this)(this.widgetConfig.defaultCountry)
    }

    function countryChangeHandler(event, preserveValues) {
      var countryField = $('#' + panelPrefix + 'country');
      switch (countryField.val()) {
        case 'NZ':
          setActiveWidget.bind(this)('nz')
          break;
        case 'AU':
          setActiveWidget.bind(this)('au')
          break;
        default:
          setActiveWidget.bind(this)('')
      }

      if(!preserveValues) {
        this._clearElementValues(panelPrefix)
      }
    }

    function setActiveWidget(countryCode) {
      var countryCodes = ['nz', 'au']
      for (var i = 0; i < countryCodes.length; i++) {
        if (countryCodes[i] == countryCode) {
          widgets[countryCodes[i]].enable()
          this._setWidgetPostion(widgets[countryCodes[i]])
        } else {
          widgets[countryCodes[i]].disable();
        }
      }
    }
}

  checkFieldPresent(prefix, field) {
    return !!document.getElementById(prefix + field);
  };

  _clearElementValues(prefix) {
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

  _dispatchEvent(element, eventType) {
    var event;

    // document.createEvent is deprecated in most modern browsers, with the exception of IE

    switch(typeof(Event)) {
      case 'function':
        event = new Event(eventType);
      default:
        event = document.createEvent("Event");
        event.initEvent(eventType, false, true);
    }

    element.dispatchEvent(event)
  }


  _setElementValue(elementId, value){

    var element = document.getElementById(elementId)

    if (element) {
      element.value = value;
      this._dispatchEvent(element, 'change')
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
        for (var i = 0 ; i < element.options.length; i++) {
          var option = element.options[i]
          var selectedOption = option.value == value ||
                               option.value == region_code[value]
                               ? option.value : ''
          if (selectedOption) break;
        }

        element.value = selectedOption
        this._dispatchEvent(element, 'change')
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
