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
    $ = window.jQuery

    this.initialisePlugin()
  }

  // initialiseWidget() {
  //   widget._getPosition = function(){
  //     var coords = $(this.element).offset();
  //     coords.top += $(this.element).outerHeight();
  //     return coords;
  //   };
  //
  //   return widget;
  // };

  bindToAddressPanel(panelPrefix){
    var that = this
    var nullWidget = {
      enable: function() { },
      disable: function() { },
      on: function() { }
    };

    var widgets = {};

    widgets.nz = new window.AddressFinder.Widget(document.getElementById(panelPrefix + 'address_1'), this.widgetConfig.nzKey, 'nz', this.widgetConfig.nzWidgetOptions)
    widgets.nz.on('result:select', this.selectNewZealand.bind(this));
    widgets.nz.prefix = panelPrefix;

    widgets.au = new window.AddressFinder.Widget(document.getElementById(panelPrefix + 'address_1'), this.widgetConfig.auKey, 'au', this.widgetConfig.auWidgetOptions);
    widgets.au.on('result:select', this.selectAustralia.bind(this));
    widgets.au.prefix = panelPrefix;

    var countryChangeHandler = function(clear){
      if ($(this).val() == 'NZ'){
        widgets.nz.enable();
      } else {
        widgets.nz.disable();
      }

      if ($(this).val() == 'AU'){
        widgets.au.enable();
      } else {
        widgets.au.disable();
      }

      clear = clear === undefined ? true : clear;

      if (clear) {
        that.clearFields(widgets.au.prefix);
      }
    };

    var countryElement = $('#' + panelPrefix + 'country');

    // Sometimes there is no countryElement. Not calling the changeHandler means
    // that it can remain enabled.
    if(countryElement[0]){
      countryElement.change(countryChangeHandler);

      // Run the countryChangeHandler first to enable/disable the currently selected country
      countryChangeHandler.bind(countryElement)(false);
    }
  };

  checkFieldPresent(prefix, field) {
    return !!document.getElementById(prefix + field);
  };

  clearFields(prefix) {
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

    this.selectState(prefix, null);
  };

  selectState(prefix, value) {
    var select = $('select#' + prefix + 'state');
    if (select.length > 0) {
      $(select).select2().val(value).trigger('change');
    } else {
      this.setFieldValue(prefix + 'state', value);
    }
  };

  selectAustralia(address, metaData) {
    var prefix = 'billing_'

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

    this.selectState(prefix, metaData.state_territory);
    this._setElementValue(prefix + 'postcode', metaData.postcode);
  };


  selectNewZealand(fullAddress, metaData) {
    var prefix = this.prefix;
    let selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);
    this._setElementValue('billing_address_1', selected.address_line_1_and_2())
    this._setElementValue('billing_address_2', selected.suburb())
    this._setElementValue('billing_city', selected.city())
    this._setElementValue('billing_postcode', selected.postcode())
    this._setElementValue('billing_state_field', metaData.region)
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
  //   var region_code = {
  //     'Auckland Region': 'AK',
  //     'Bay Of Plenty Region': 'BP',
  //     'Canterbury Region': 'CT',
  //     'Gisborne Region': 'GI',
  //     'Hawke\'s Bay Region': 'HB',
  //     'Manawatu-Wanganui Region': 'MW',
  //     'Marlborough Region': 'MB',
  //     'Nelson Region': 'NS',
  //     'Northland Region': 'NL',
  //     'Otago Region': 'OT',
  //     'Southland Region': 'SL',
  //     'Taranaki Region': 'TK',
  //     'Tasman Region': 'TM',
  //     'Waikato Region': 'WA',
  //     'Wellington Region': 'WE',
  //     'West Coast Region': 'WC',
  //     'No Region (Chatham Islands)': null
  //   }[metaData.region];
  //
  //   this.selectState(prefix, region_code);
  // };
  initialisePlugin(){
    if (document.getElementById('billing_address_1')){
      this.bindToAddressPanel('billing_');
    }

    if (document.getElementById('shipping_address_1')){
      this.bindToAddressPanel('shipping_');
    }
  };

}
