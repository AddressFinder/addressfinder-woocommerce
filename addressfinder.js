// The AddressFinder plugin for WooCommerce adds an autocomplete capability to the
// delivery and billing address fields of your online store.
//
// https://wordpress.org/plugins/addressfinder-woo/
//
// VERSION: 1.0.9
(function(){
  var addressWidget = function(prefix){
    var widget;
    var widgetNZ;
    var widgetAU;

    var nullWidget = {
      enable: function() { },
      disable: function() { },
      on: function() { }
    }

    if (afKey) {
      widgetNZ = new AddressFinder.Widget(
          document.getElementById(prefix + 'address_1'),
          afKey,
          'NZ'
          );

      widgetNZ.onSelect = selectNewZealand;
    } else {
      widgetNZ = nullWidget;
    }

    if (afKeyAu) {
      widgetAU = new AddressFinder.Widget(
          document.getElementById(prefix + 'address_1'),
          afKeyAu,
          'AU'
          );

      widgetAU.onSelect = selectAustralia;
    } else {
      widgetAU = nullWidget;
    }


    var countryCheck = function(clear){
      clear = clear === undefined ? true : clear;

      if (clear) { clearFields(prefix); }

      if(jQuery(this).val() == "NZ"){
        widgetNZ.enable();
        widget = widgetNZ;
      } else {
        widgetNZ.disable();
      }

      if(jQuery(this).val() == "AU"){
        widgetAU.enable();
        widget = widgetAU;
      } else {
        widgetAU.disable();
      }
    };

    jQuery("#" + prefix + "country").change(countryCheck);
    countryCheck.bind(jQuery("#" + prefix + "country"))(false);

    var _getPosition = function(){
      var coords = jQuery(this.element).offset();
      coords.top += jQuery(this.element).outerHeight();
      return coords;
    }

    widgetNZ._getPosition = _getPosition;
    widgetAU._getPosition = _getPosition;

    widgetNZ.on("result:select", function(value, item)  { widget.onSelect(prefix, value, item ) });
    widgetAU.on("result:select", function(value, item)  { widget.onSelect(prefix, value, item ) });
  };

  var checkFieldPresent = function(prefix, field) {
    return !!document.getElementById(prefix + field)
  }

  var clearFields = function(prefix) {
    document.getElementById(prefix + 'address_1').value = '';
    if (checkFieldPresent(prefix, 'address_2')) {
      document.getElementById(prefix + 'address_2').value = '';
    }
    document.getElementById(prefix + 'city').value = '';
    document.getElementById(prefix + 'postcode').value = '';

    selectState(prefix, null);
  }

  var selectState = function(prefix, value) {
    var select = jQuery("select#" + prefix + "state");
    if (select.length > 0) {
      jQuery(select).select2().val(value).trigger("change")
    } else {
      jQuery("input#" + prefix + "state").val(value);
    }
  }

  var selectNewZealand = function(prefix, value, item) {
    /* clear address fields */
    clearFields(prefix);

    var suburb = '';

    window.item = item;

    /* split and trim */
    var address = item.postal || item.a;
    var addressLines = address.split(',');
    for(var i=0; i<addressLines.length; i++){
      addressLines[i] = addressLines[i].replace(/^\s+|\s+$/g,'');
    }
    /* remove City/Postcode */
    var city = item.mailtown || item.city;
    if(addressLines[addressLines.length-1] == city + ' ' + item.postcode){
      addressLines.pop();
      document.getElementById(prefix + 'city').value = city;
      document.getElementById(prefix + 'postcode').value = item.postcode;
    }
    /* set address2 */
    if(addressLines.length > 1 && checkFieldPresent(prefix, 'address_2')){
      document.getElementById(prefix + 'address_2').value = addressLines.pop();
    }
    /* set address1 */
    document.getElementById(prefix + 'address_1').value = addressLines.join(", ");

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
    }[item.region]

    selectState(prefix, region_code);
  };

  var selectAustralia = function(prefix, value, item) {
    // Clear fields currently
    clearFields(prefix);

    // Set fields to new values
    if (item.address_line_2 != null) {
      document.getElementById(prefix + 'address_1').value = item.address_line_1;
      document.getElementById(prefix + 'address_2').value = item.address_line_2;
    } else {
      document.getElementById(prefix + 'address_1').value = item.address_line_1;
    }

    document.getElementById(prefix + 'city').value = item.locality_name || '';

    selectState(prefix, item.state_territory);
    document.getElementById(prefix + 'postcode').value = item.postcode;
  };

  var initAF = function(){
    if(document.getElementById("billing_address_1")){
      addressWidget("billing_");
    }
    if(document.getElementById("shipping_address_1")){
      addressWidget("shipping_");
    }
  };

  jQuery(document).ready(function(){
    var script = document.createElement('script');
    script.src = 'https://api.addressfinder.io/assets/v3/widget.js';
    script.onreadystatechange = function() {
      if (script.readyState === 'complete' || script.readyState === 'loaded'){
        initAF();
      }
    };
    script.onload = initAF;
    document.body.appendChild(script);
  });
})();
