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
    this.panelPrefix = ''
    this.countryCodes = ['nz', 'au']
    $ = window.jQuery

    this.initialisePlugin()
  }

  getWidgetPostion(widget) {
    widget._getPosition = function(){
      var coords = $(this.element).offset();
      coords.top += $(this.element).outerHeight();
      return coords;
    };
  }

  bindToAddressPanel(panelPrefix){

    var countryElement = $('#' + panelPrefix + 'country');
    this.panelPrefix = panelPrefix

    // Sometimes there is no countryElement. Not calling the changeHandler means
    // that it can remain enabled.
    if(countryElement[0]){
      this.boundCountryChangedListener = this._countryChangeHandler.bind(this) // save this so we can unbind in the destroy() method
      countryElement[0].addEventListener("change", this.boundCountryChangedListener);
    }

    this.widgets.nullWidget = {
      enable: function() { },
      disable: function() { },
      on: function() { }
    };

    this.widgets.nz = new window.AddressFinder.Widget(document.getElementById(panelPrefix + 'address_1'), this.widgetConfig.nzKey, 'nz', this.widgetConfig.nzWidgetOptions)
    this.widgets.nz.on('result:select', this.selectNewZealand.bind(this));
    this.widgets.nz.prefix = panelPrefix;

    this.widgets.au = new window.AddressFinder.Widget(document.getElementById(panelPrefix + 'address_1'), this.widgetConfig.auKey, 'au', this.widgetConfig.auWidgetOptions);
    this.widgets.au.on('result:select', this.selectAustralia.bind(this));
    this.widgets.au.prefix = panelPrefix;

    this._countryChangeHandler(null, false);
  }

  _countryChangeHandler(event, preserveValues){
    var activeCountry;
    switch ($('#' + this.panelPrefix + 'country').val()) {
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
    if(!preserveValues) {
      const isInactiveCountry = countryCode => countryCode != activeCountry
      this.countryCodes.filter(isInactiveCountry).forEach(this._clearElementValues(this.panelPrefix))
    }
}

  _setActiveCountry(countryCode){
    for (var widgetCountryCode in this.widgets) {
      this.widgets[widgetCountryCode].disable()
    }
    this.widgets[countryCode].enable()
    this.getWidgetPostion(this.widgets[countryCode])
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
        document.getElementById(prefix + fields[i]).value = '';
      }
    }
    this._setStateValue(prefix + 'state', null)
  };

  selectAustralia(address, metaData) {
    var prefix = this.widgets.au.prefix

    // Set fields to new values
    if (metaData.address_line_2 != null) {
      if (this.checkFieldPresent(prefix, 'address_2')) {
        this._setElementValue(prefix + 'address_1', metaData.address_line_1);
        this._setElementValue(prefix + 'address_2', metaData.address_line_2);
      } else {
        var combinedAddressLine1And2 = metaData.address_line_1 + ', ' + metaData.address_line_2;
        this._setElementValue(prefix + 'address_1', combinedAddressLine1And2);
      }
    } else {
      this._setElementValue(prefix + 'address_1', metaData.address_line_1);
      this._setElementValue(prefix + 'address_2', '');
    }

    this._setElementValue(prefix + 'city', metaData.locality_name || '');

    this._setStateValue(prefix + 'state', metaData.state_territory);
    this._setElementValue(prefix + 'postcode', metaData.postcode);
  };


  selectNewZealand(fullAddress, metaData) {
    var prefix = this.widgets.nz.prefix;
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
        console.log(element)
        const checkOptionMatchesValue = option => option.value == region_code[value] ? region_code[value] : ''
        const selectedOption = Array.prototype.find.call(element.options, checkOptionMatchesValue)
        console.
        $(element).select2().val(selectedOption.value).trigger('change');
        return
      }
    }
  }

    /* clear address fields */
    // clearFields(prefix);

    /* split and trim */
  //   var address = metaData.postal || metaData.a;
  //   var addressLines = address.split(',');
  //   for(var i=0; i<addressLines.length; i++){
  //     addressLines[i] = addressLines[i].replace(/^\s+|\s+$/g,'');
  //   }
  //
  //   /* remove City/Postcode */
  //   var city = metaData.mailtown || metaData.city;
  //   if(addressLines[addressLines.length-1] == city + ' ' + metaData.postcode){
  //     addressLines.pop();
  //     this.setFieldValue(prefix + 'city', city);
  //     this.setFieldValue(prefix + 'postcode', metaData.postcode);
  //   }
  //
  //   /* set address2 */
  //   if(addressLines.length > 1 && checkFieldPresent(prefix, 'address_2')){
  //     this.setFieldValue(prefix + 'address_2', addressLines.pop());
  //   }
  //   else {
  //     this.setFieldValue(prefix + 'address_2', '');
  //   }
  //
  //   /* set address1 */
  //   this.setFieldValue(prefix + 'address_1', addressLines.join(', '));
  //
  //   this.selectState(prefix, region_code);
  // };
  initialisePlugin(){
    if (document.getElementById('billing_address_1')){
      this.bindToAddressPanel('billing_');
      return;
    }

    if (document.getElementById('shipping_address_1')){
      this.bindToAddressPanel('shipping_');
    }
  };

}
