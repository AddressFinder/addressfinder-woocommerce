/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _woocommerce_plugin = __webpack_require__(2);

var _woocommerce_plugin2 = _interopRequireDefault(_woocommerce_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.AF = window.AF || {};
window.AF.WooCommercePlugin = _woocommerce_plugin2.default;

var _initPlugin = function _initPlugin() {

  var safeParseJSONObject = function safeParseJSONObject(jsonObject) {
    if (jsonObject == undefined) {
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
    debug: window.AddressFinderConfig.debug || true
  });
};

var s = document.createElement('script');
s.src = 'https://api.addressfinder.io/assets/v3/widget.js';
s.async = 1;
s.onload = _initPlugin;
document.body.appendChild(s);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// The AddressFinder plugin for WooCommerce adds an autocomplete capability to the
// delivery and billing address fields of your online store.
//
// https://wordpress.org/plugins/addressfinder-woo/
//
// VERSION: 1.1.2
var WooCommercePlugin = function () {
  function WooCommercePlugin(widgetConfig) {
    _classCallCheck(this, WooCommercePlugin);

    this.version = "1.2.8";
    this.widgetConfig = widgetConfig;
    $ = window.jQuery;

    this.initialisePlugin();
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

  _createClass(WooCommercePlugin, [{
    key: 'bindToAddressPanel',
    value: function bindToAddressPanel(panelPrefix) {
      var that = this;
      var nullWidget = {
        enable: function enable() {},
        disable: function disable() {},
        on: function on() {}
      };

      var widgets = {};

      widgets.nz = new window.AddressFinder.Widget(document.getElementById(panelPrefix + 'address_1'), this.widgetConfig.nzKey, 'nz', this.widgetConfig.nzWidgetOptions);
      widgets.nz.on('result:select', this.selectNewZealand.bind(this));
      widgets.nz.prefix = panelPrefix;

      widgets.au = new window.AddressFinder.Widget(document.getElementById(panelPrefix + 'address_1'), this.widgetConfig.auKey, 'au', this.widgetConfig.auWidgetOptions);
      widgets.au.on('result:select', this.selectAustralia.bind(this));
      widgets.au.prefix = panelPrefix;

      var countryChangeHandler = function countryChangeHandler(clear) {
        if ($(this).val() == 'NZ') {
          widgets.nz.enable();
        } else {
          widgets.nz.disable();
        }

        if ($(this).val() == 'AU') {
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
      if (countryElement[0]) {
        countryElement.change(countryChangeHandler);

        // Run the countryChangeHandler first to enable/disable the currently selected country
        countryChangeHandler.bind(countryElement)(false);
      }
    }
  }, {
    key: 'checkFieldPresent',
    value: function checkFieldPresent(prefix, field) {
      return !!document.getElementById(prefix + field);
    }
  }, {
    key: 'clearFields',
    value: function clearFields(prefix) {
      var fields = ['address_1', 'address_2', 'city', 'postcode'];

      for (var i = 0; i < fields.length; i++) {
        if (this.checkFieldPresent(prefix, fields[i])) {
          document.getElementById(prefix + fields[i]).value = '';
        }
      }

      this.selectState(prefix, null);
    }
  }, {
    key: 'selectState',
    value: function selectState(prefix, value) {
      var select = $('select#' + prefix + 'state');
      if (select.length > 0) {
        $(select).select2().val(value).trigger('change');
      } else {
        this.setFieldValue(prefix + 'state', value);
      }
    }
  }, {
    key: 'selectAustralia',
    value: function selectAustralia(address, metaData) {
      var prefix = 'billing_';

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
    }
  }, {
    key: 'selectNewZealand',
    value: function selectNewZealand(fullAddress, metaData) {
      var prefix = this.prefix;
      var selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);
      this._setElementValue('billing_address_1', selected.address_line_1_and_2());
      this._setElementValue('billing_address_2', selected.suburb());
      this._setElementValue('billing_city', selected.city());
      this._setElementValue('billing_postcode', selected.postcode());
      this._setElementValue('billing_state_field', metaData.region);
    }
  }, {
    key: '_setElementValue',
    value: function _setElementValue(elementId, value) {
      var element = document.getElementById(elementId);
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

  }, {
    key: 'initialisePlugin',
    value: function initialisePlugin() {
      if (document.getElementById('billing_address_1')) {
        this.bindToAddressPanel('billing_');
      }

      if (document.getElementById('shipping_address_1')) {
        this.bindToAddressPanel('shipping_');
      }
    }
  }]);

  return WooCommercePlugin;
}();

exports.default = WooCommercePlugin;

/***/ })
/******/ ]);
//# sourceMappingURL=addressfinder.js.map