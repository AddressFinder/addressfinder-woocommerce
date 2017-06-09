// The AddressFinder plugin for WooCommerce adds an autocomplete capability to the
// delivery and billing address fields of your online store.
//
// https://wordpress.org/plugins/addressfinder-woo/
//
// VERSION: 1.1.0
(function($, AFC){
  var initialiseWidget = function(prefix, key, code, onSelectFn, widgetOptions) {
    var widget = new window.AddressFinder.Widget(
      document.getElementById(prefix + 'address_1'),
      key,
      code,
      widgetOptions
    );

    widget.on('result:select', onSelectFn);

    widget._getPosition = function(){
      var coords = $(this.element).offset();
      coords.top += $(this.element).outerHeight();
      return coords;
    };

    return widget;
  };

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

  var bindToAddressPanel = function(panelPrefix){
    var nullWidget = {
      enable: function() { },
      disable: function() { },
      on: function() { }
    };

    var widgets = {};

    var parsedOptions = safeParseJSONObject(AFC['widget_options']);

    if (AFC['key_nz']){
      widgets.nz = initialiseWidget(panelPrefix, AFC['key_nz'], 'nz', selectNewZealand, parsedOptions);
    } else {
      widgets.nz = nullWidget;
    }

    if (AFC['key_au']){
      widgets.au = initialiseWidget(panelPrefix, AFC['key_au'], 'au', selectAustralia, parsedOptions);
      widgets.au.prefix = panelPrefix;
    } else {
      widgets.au = nullWidget;
    }

    widgets.nz.prefix = panelPrefix;
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
        clearFields(widgets.au.prefix);
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

  var checkFieldPresent = function(prefix, field) {
    return !!document.getElementById(prefix + field);
  };

  var clearFields = function(prefix) {
    var fields = [
      'address_1',
      'address_2',
      'city',
      'postcode'
    ];

    for (var i = 0; i < fields.length; i++) {
      if (checkFieldPresent(prefix, fields[i])) {
        document.getElementById(prefix + fields[i]).value = '';
      }
    }

    selectState(prefix, null);
  };

  var selectState = function(prefix, value) {
    var select = $('select#' + prefix + 'state');
    if (select.length > 0) {
      $(select).select2().val(value).trigger('change');
    } else {
      setFieldValue(prefix + 'state', value);
    }
  };

  var selectNewZealand = function(a, metaData) {
    var prefix = this.prefix;

    /* clear address fields */
    // clearFields(prefix);

    /* split and trim */
    var address = metaData.postal || metaData.a;
    var addressLines = address.split(',');
    for(var i=0; i<addressLines.length; i++){
      addressLines[i] = addressLines[i].replace(/^\s+|\s+$/g,'');
    }

    /* remove City/Postcode */
    var city = metaData.mailtown || metaData.city;
    if(addressLines[addressLines.length-1] == city + ' ' + metaData.postcode){
      addressLines.pop();
      setFieldValue(prefix + 'city', city);
      setFieldValue(prefix + 'postcode', metaData.postcode);
    }

    /* set address2 */
    if(addressLines.length > 1 && checkFieldPresent(prefix, 'address_2')){
      setFieldValue(prefix + 'address_2', addressLines.pop());
    }
    else {
      setFieldValue(prefix + 'address_2', '');
    }

    /* set address1 */
    setFieldValue(prefix + 'address_1', addressLines.join(', '));

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
    }[metaData.region];

    selectState(prefix, region_code);
  };

  var selectAustralia = function(address, metaData) {
    var prefix = this.prefix;

    // Set fields to new values
    if (metaData.address_line_2 != null) {
      if (checkFieldPresent(prefix, 'address_2')) {
        setFieldValue(prefix + 'address_1', metaData.address_line_1);
        setFieldValue(prefix + 'address_2', metaData.address_line_2);
      } else {
        var combinedAddressLine1And2 = metaData.address_line_1 + ', ' + metaData.address_line_2;
        setFieldValue(prefix + 'address_1', combinedAddressLine1And2);
      }
    } else {
      setFieldValue(prefix + 'address_1', metaData.address_line_1);
      setFieldValue(prefix + 'address_2', '');
    }

    setFieldValue(prefix + 'city', metaData.locality_name || '');

    selectState(prefix, metaData.state_territory);
    setFieldValue(prefix + 'postcode', metaData.postcode);
  };

  var setFieldValue = function(elementId, value) {
    var field = document.getElementById(elementId);

    if (field) {
      field.value = value;
      return;
    }

    var errorMessage = 'AddressFinder Error - unable to find an element with id: ' + elementId;

    if (AFC.debug) {
      alert(errorMessage);
      return;
    }

    if (window.console) {
      window.console.log(errorMessage);
    }
  };

  var initialisePlugin = function(){
    if (document.getElementById('billing_address_1')){
      bindToAddressPanel('billing_');
    }

    if (document.getElementById('shipping_address_1')){
      bindToAddressPanel('shipping_');
    }
  };

  $(document).ready(function(){
    var script = document.createElement('script');
    script.src = 'https://api.addressfinder.io/assets/v3/widget.js';
    script.onreadystatechange = function() {
      if (script.readyState === 'complete' || script.readyState === 'loaded'){
        initialisePlugin();
      }
    };
    script.onload = initialisePlugin;
    document.body.appendChild(script);
  });

})(window.jQuery, window.AddressFinderConfig);
