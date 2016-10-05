// The AddressFinder plugin for WooCommerce adds an autocomplete capability to the
// delivery and billing address fields of your online store.
//
// https://wordpress.org/plugins/addressfinder-woo/
//
// VERSION: 1.0.11
(function(){
  var initialiseWidget = function(prefix, key, code, onSelectFn) {
    var widget = new AddressFinder.Widget(
      document.getElementById(prefix + "address_1"),
      key,
      code
    );

    widget.on("result:select", onSelectFn);

    widget._getPosition = function(){
      var coords = jQuery(this.element).offset();
      coords.top += jQuery(this.element).outerHeight();
      return coords;
    }

    return widget;
  }

  var bindToAddressPanel = function(panelPrefix){
    var nullWidget = {
      enable: function() { },
      disable: function() { },
      on: function() { }
    }

    var widgets = {};

    if(AddressFinderConfig['key_nz']){
      widgets.nz = initialiseWidget(panelPrefix, AddressFinderConfig['key_nz'], 'nz', selectNewZealand);
    }
    else {
      widgets.nz = nullWidget;
    }

    if(AddressFinderConfig['key_au']){
      widgets.au = initialiseWidget(panelPrefix, AddressFinderConfig['key_au'], 'au', selectAustralia);
      widgets.au.prefix = panelPrefix;
    }
    else {
      widgets.au = nullWidget;
    }

    widgets.nz.prefix = panelPrefix;
    widgets.au.prefix = panelPrefix;

    var countryChangeHandler = function(clear){
      if(jQuery(this).val() == "NZ"){
        widgets.nz.enable();
      } else {
        widgets.nz.disable();
      }

      if(jQuery(this).val() == "AU"){
        widgets.au.enable();
      } else {
        widgets.au.disable();
      }

      clear = clear === undefined ? true : clear;

      if (clear) {
        clearFields(widgets.au.prefix);
      }
    };

    jQuery("#" + panelPrefix + "country").change(countryChangeHandler);

    // Run the countryChangeHandler first to enable/disable the currently selected country
    countryChangeHandler.bind(jQuery("#" + panelPrefix + "country"))(false);
  };

  var checkFieldPresent = function(prefix, field) {
    return !!document.getElementById(prefix + field)
  }

  var clearFields = function(prefix) {
    var fields = [
      'address_1',
      'address_2',
      'city',
      'postcode'
    ];

    for (var i = 0; i < fields.length; i++) {
      if (checkFieldPresent(prefix, fields[i])) {
        document.getElementById(prefix + fields[i]).value = "";
      }
    }

    selectState(prefix, null);
  }

  var selectState = function(prefix, value) {
    var select = jQuery("select#" + prefix + "state");
    if (select.length > 0) {
      jQuery(select).select2().val(value).trigger("change");
    } else {
      setFieldValue(prefix + "state", value);
    }
  }

  var selectNewZealand = function(address, metaData) {
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
      setFieldValue(prefix + 'address_2', "");
    }

    /* set address1 */
    setFieldValue(prefix + 'address_1', addressLines.join(", "));

    var region_code = {
      "Auckland Region": "AL",
      "Bay of Plenty Region": "BP",
      "Canterbury Region": "CT",
      "Gisborne Region": "GI",
      "Hawke's Bay Region": "HB",
      "Manawatu-Wanganui Region": "MW",
      "Marlborough Region": "MB",
      "Nelson Region": "NS",
      "Northland Region": "NL",
      "Otago Region": "OT",
      "Southland Region": "SL",
      "Taranaki Region": "TK",
      "Tasman Region": "TM",
      "Waikato Region": "WA",
      "Wellington Region": "WE",
      "West Coast Region": "WC",
      "No Region (Chatham Islands)": null
    }[metaData.region]

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

    var errorMessage = "AddressFinder Error - unable to find an element with id: " + elementId;

    if (AddressFinderConfig.debug) {
      alert(errorMessage);
      return;
    }

    if (window.console) {
      console.log(errorMessage);
    }
  }

  var initialisePlugin = function(){
    if(document.getElementById('billing_address_1')){
      bindToAddressPanel('billing_');
    }

    if(document.getElementById('shipping_address_1')){
      bindToAddressPanel('shipping_');
    }
  };

  jQuery(document).ready(function(){
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
})();
