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
    defaultCountry: window.AddressFinderConfig.default_country || 'nz',
    debug: window.AddressFinderConfig.debug || false
  });
};

var _initOnDOMLoaded = function _initOnDOMLoaded(event, repetitions) {
  // In WooCommerce/Wordpress a country change event is fired during the DOM loading process.
  // If AddressFinder is added before this event it will clear the user's existing address details from the address fields.
  // This function makes sure AddressFinder is initalised after this event.

  repetitions = repetitions || 5;

  if (document.readyState == "complete") {
    setTimeout(_initPlugin, 1000);
    return;
  }

  if (repetitions == 0) {
    // if 5 seconds have passed and the DOM still isn't ready, initalise AddressFinder
    _initPlugin();
    return;
  }

  setTimeout(function () {
    // if less than 5 seconds have passed and the DOM isn't ready, recall the function to check again  
    _initOnDOMLoaded('ignoredEvent', repetitions - 1);
  }, 1000);
};

var s = document.createElement('script');
s.src = 'https://api.addressfinder.io/assets/v3/widget.js';
s.async = 1;
s.onload = _initOnDOMLoaded;
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
// VERSION: 1.2.8
var WooCommercePlugin = function () {
  function WooCommercePlugin(widgetConfig) {
    _classCallCheck(this, WooCommercePlugin);

    this.version = "1.2.8";
    this.widgetConfig = widgetConfig;
    $ = window.jQuery;
    this.initialisePlugin();
  }

  _createClass(WooCommercePlugin, [{
    key: '_setWidgetPostion',
    value: function _setWidgetPostion(widget) {
      //adjusts the position of the widget to prevent it rendering in front of address fields
      widget._getPosition = function () {
        var coords = $(this.element).offset();
        coords.top += $(this.element).outerHeight();
        return coords;
      };
    }
  }, {
    key: 'bindToAddressPanel',
    value: function bindToAddressPanel(panelPrefix) {

      var widgets = {};

      widgets.null = {
        enable: function enable() {},
        disable: function disable() {},
        on: function on() {}
      };

      widgets.nz = new window.AddressFinder.Widget(document.getElementById(panelPrefix + 'address_1'), this.widgetConfig.nzKey, 'nz', this.widgetConfig.nzWidgetOptions);
      widgets.nz.prefix = panelPrefix;
      widgets.nz.on('result:select', this.selectNewZealand.bind(this, panelPrefix));

      widgets.au = new window.AddressFinder.Widget(document.getElementById(panelPrefix + 'address_1'), this.widgetConfig.auKey, 'au', this.widgetConfig.auWidgetOptions);
      widgets.au.prefix = panelPrefix;
      widgets.au.on('result:select', this.selectAustralia.bind(this, panelPrefix));

      var countryElement = $('#' + panelPrefix + 'country');
      // Sometimes there is no countryElement. Not calling the changeHandler means
      // that it can remain enabled.
      if (countryElement[0]) {
        countryElement.change(countryChangeHandler.bind(this));

        // Run the countryChangeHandler first to enable/disable the currently selected country
        countryChangeHandler.bind(this)(null, true);
      } else {
        setActiveWidget.bind(this)(this.widgetConfig.defaultCountry);
      }

      function countryChangeHandler(event, preserveValues) {
        var countryField = $('#' + panelPrefix + 'country');
        switch (countryField.val()) {
          case 'NZ':
            setActiveWidget.bind(this)('nz');
            break;
          case 'AU':
            setActiveWidget.bind(this)('au');
            break;
          default:
            setActiveWidget.bind(this)('');
        }

        if (!preserveValues) {
          this._clearElementValues(panelPrefix);
        }
      }

      function setActiveWidget(countryCode) {
        var countryCodes = ['nz', 'au'];
        for (var i = 0; i < countryCodes.length; i++) {
          if (countryCodes[i] == countryCode) {
            widgets[countryCodes[i]].enable();
            this._setWidgetPostion(widgets[countryCodes[i]]);
          } else {
            widgets[countryCodes[i]].disable();
          }
        }
      }
    }
  }, {
    key: 'checkFieldPresent',
    value: function checkFieldPresent(prefix, field) {
      return !!document.getElementById(prefix + field);
    }
  }, {
    key: '_clearElementValues',
    value: function _clearElementValues(prefix) {
      var fields = ['address_1', 'address_2', 'city', 'postcode'];

      for (var i = 0; i < fields.length; i++) {
        if (this.checkFieldPresent(prefix, fields[i])) {
          this._setElementValue(prefix + fields[i], '');
        }
      }
      this._setStateValue(prefix + 'state', '');
    }
  }, {
    key: 'selectAustralia',
    value: function selectAustralia(prefix, address, metaData) {
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
    }
  }, {
    key: 'selectNewZealand',
    value: function selectNewZealand(prefix, fullAddress, metaData) {
      var selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);
      this._setElementValue(prefix + 'address_1', selected.address_line_1_and_2());
      this._setElementValue(prefix + 'address_2', selected.suburb());
      this._setElementValue(prefix + 'city', selected.city());
      this._setElementValue(prefix + 'postcode', selected.postcode());
      this._setStateValue(prefix + 'state', metaData.region);
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
  }, {
    key: '_setStateValue',
    value: function _setStateValue(elementId, value) {
      var element = document.getElementById(elementId);
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
        };

        if (element.options) {
          for (var i = 0; i < element.options.length; i++) {
            var option = element.options[i];
            var selectedOption = option.value == value || option.value == region_code[value] ? option.value : '';
            if (selectedOption) break;
          }

          $(element).select2().val(selectedOption).trigger('change');
        }
      }
    }
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