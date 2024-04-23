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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/mutation_manager.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MutationManager = /*#__PURE__*/function () {
  function MutationManager(_ref) {
    var widgetConfig = _ref.widgetConfig,
        mutationEventHandler = _ref.mutationEventHandler,
        ignoredClass = _ref.ignoredClass;

    _classCallCheck(this, MutationManager);

    this.widgetConfig = widgetConfig;
    this.mutationEventHandler = mutationEventHandler; // Mutation events emitted by elements with this class are ignored.

    this.ignoredClass = ignoredClass;
    this.millisecondsToIgnoreMutations = 750; // The amount of times the page can mutate in a row without forcing AddressFinder to be reinitialised.

    this.maxMutationTimeoutCount = 20; // The count of the times the page has mutated in a row

    this.mutationTimeoutCount = 0;
    this.monitorMutations();
  } // Attaches an observer or eventListener for listening to mutations


  _createClass(MutationManager, [{
    key: "monitorMutations",
    value: function monitorMutations() {
      if (window.MutationObserver) {
        // for modern browsers
        var observer = new MutationObserver(this._mutationHandler.bind(this));
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      } else if (window.addEventListener) {
        // for IE 9 and 10
        document.body.addEventListener('DOMNodeInserted', this._domNodeModifiedHandler.bind(this), false);
        document.body.addEventListener('DOMNodeRemoved', this._domNodeModifiedHandler.bind(this), false);
      } else {
        if (window.console) {
          console.info('AddressFinder Error - please use a more modern browser');
        }
      }
    }
    /**
     * For modern browsers:
     * Determines if a mutation was triggered by AddressFinder or the Ecommerce store.
     */

  }, {
    key: "_mutationHandler",
    value: function _mutationHandler(mutations) {
      var _this = this;

      var changedNodes = mutations.reduce(function (nodes, mutation) {
        // ignore this mutation if the target is the AddressFinder UL element
        if (mutation.target && mutation.target.classList && mutation.target.classList.contains(_this.ignoredClass)) {
          return nodes;
        }

        return nodes.concat(_toConsumableArray(mutation.addedNodes)).concat(_toConsumableArray(mutation.removedNodes));
      }, []);
      var anyStoreMutations = changedNodes.find(function (node) {
        return !(node.classList && node.classList.contains(_this.ignoredClass));
      });

      if (!anyStoreMutations) {
        return; // ignore AddressFinder changes
      }

      this._setMutationTimeout();
    }
    /**
     * For IE9 and IE10:
     * Determines if a mutation was triggered by AddressFinder or the Ecommerce store.
     */

  }, {
    key: "_domNodeModifiedHandler",
    value: function _domNodeModifiedHandler(event) {
      if (event.target.className && event.target.className.includes(this.ignoredClass) || event.relatedNode && event.relatedNode.className && event.relatedNode.className.includes(this.ignoredClass)) {
        return; // ignore AddressFinder changes
      }

      this._setMutationTimeout();
    }
  }, {
    key: "_setMutationTimeout",
    value: function _setMutationTimeout() {
      if (this._mutationTimeout) {
        this._monitorExcessiveMutations();

        clearTimeout(this._mutationTimeout); // reset previous timeout
      } // ignore any further changes for the next 750 mS


      this._mutationTimeout = setTimeout(function () {
        // If we can successfully call our mutation handler, reset the count.
        this.mutationTimeoutCount = 0;
        this.mutationEventHandler();
      }.bind(this), this.millisecondsToIgnoreMutations);
    }
    /**
     * If the store continously triggers mutations the mutationEventHandler will never be called. If it is reset 20 times in a row,
     * the page is considered to be mutating excessively. In this case we initialise AddressFinder, and in debug mode we warn the user
     * that excessive mutations may stop AddressFinder from working.
     *
     */

  }, {
    key: "_monitorExcessiveMutations",
    value: function _monitorExcessiveMutations() {
      this.mutationTimeoutCount += 1;

      if (this.mutationTimeoutCount === this.maxMutationTimeoutCount) {
        this.mutationEventHandler();

        this._log('Page is triggering a large amount of mutations, which may prevent AddressFinder from working, and will slow down your store.');
      }
    }
  }, {
    key: "_log",
    value: function _log(message) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (this.widgetConfig.debug && window.console) {
        if (data != undefined) {
          console.log("".concat(message), data);
        } else {
          console.log("".concat(message));
        }
      }
    }
  }]);

  return MutationManager;
}();


// CONCATENATED MODULE: ./src/form_manager.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function form_manager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function form_manager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function form_manager_createClass(Constructor, protoProps, staticProps) { if (protoProps) form_manager_defineProperties(Constructor.prototype, protoProps); if (staticProps) form_manager_defineProperties(Constructor, staticProps); return Constructor; }

var FormManager = /*#__PURE__*/function () {
  function FormManager(widgetConfig, formHelperConfig, formFieldChangeEventToDispatch, countryChangeEventToListenFor) {
    form_manager_classCallCheck(this, FormManager);

    this.widgetConfig = widgetConfig; // Contains references to the DOM elements that make up this form

    this.formHelperConfig = formHelperConfig; // When an address is selected dispatch this event on all the updated form fields. This tells the store the fields have been changed.

    this.formFieldChangeEventToDispatch = formFieldChangeEventToDispatch; // An event listener with this event type is attached to country element. When the country changes the active country for the widget is set.

    this.countryChangeEventToListenFor = countryChangeEventToListenFor;
    this.widgets = {};
    this.countryCodes = ["au", "nz"];

    this._bindToForm();
  } // Shuts down this form_helper by disabling the widget and any callback handlers.


  form_manager_createClass(FormManager, [{
    key: "destroy",
    value: function destroy() {
      this._log("Destroying widget", this.formHelperConfig.label);

      for (var widgetCountryCode in this.widgets) {
        this.widgets[widgetCountryCode].disable();
        this.widgets[widgetCountryCode].destroy();
      }

      this.widgets = null;

      if (this.formHelperConfig.countryElement) {
        this.formHelperConfig.countryElement.removeEventListener(this.countryChangeEventToListenFor, this.boundCountryChangedListener);
      }
    } // Creates the widgets and attaches a listener to the country element, so we can determine which widget should be active.

  }, {
    key: "_bindToForm",
    value: function _bindToForm() {
      var nzWidget = new window.AddressFinder.Widget(this.formHelperConfig.searchElement, this.widgetConfig.nzKey, "nz", this.widgetConfig.nzWidgetOptions);
      nzWidget.on("result:select", this._nzAddressSelected.bind(this));
      this.widgets["nz"] = nzWidget;
      var auWidget = new window.AddressFinder.Widget(this.formHelperConfig.searchElement, this.widgetConfig.auKey, "au", this.widgetConfig.auWidgetOptions);
      auWidget.on("result:select", this._auAddressSelected.bind(this));
      this.widgets["au"] = auWidget;
      var intWidget = new window.AddressFinder.Widget(this.formHelperConfig.searchElement, this.widgetConfig.auKey, "us", {});
      intWidget.on("result:select", this._intAddressSelected.bind(this));
      this.widgets["int"] = intWidget;
      this.boundCountryChangedListener = this._countryChanged.bind(this); // save this so we can unbind in the destroy() method

      if (this.formHelperConfig.countryElement) {
        /**
         * The countryChangeEventToListenFor is the event we want to listen for to call the _countryChanged handler and reset the
         * active country used by the widget to determine which database to search. Typically this event will be 'change' but in the
         * case of WooCommerce it is blur.
         */
        this.formHelperConfig.countryElement.addEventListener(this.countryChangeEventToListenFor, this.boundCountryChangedListener);
        this.boundCountryChangedListener();
      } else {
        // Sometimes there is no countryElement (WooCommerce). Not calling the changeHandler means that the widget can remain enabled.
        this._setActiveCountry(this.widgetConfig.defaultCountry);
      }
    } // Matches the value of the countryElement with the countryValue for this configuration. If it finds a match this will become the active country.

  }, {
    key: "_countryChanged",
    value: function _countryChanged() {
      var activeCountry;

      switch (this.formHelperConfig.countryElement.value) {
        case this.formHelperConfig.nz.countryValue:
          activeCountry = "nz";
          break;

        case this.formHelperConfig.au.countryValue:
          activeCountry = "au";
          break;

        case "":
        case null:
          activeCountry = "null";
          break;

        default:
          activeCountry = this.formHelperConfig["int"].countryValue[this.formHelperConfig.countryElement.value] || "null";
      }

      this._setActiveCountry(activeCountry);
    }
  }, {
    key: "_setActiveCountry",
    value: function _setActiveCountry(countryCode) {
      this._log("Setting active country", countryCode);

      Object.values(this.widgets).forEach(function (widget) {
        return widget.disable();
      });

      if (countryCode == "null") {
        return;
      }

      if (["nz", "au"].includes(countryCode)) {
        this.widgets[countryCode].enable();
      } else {
        this.widgets["int"].enable();
        this.widgets["int"].setCountry(countryCode);
      }
    }
  }, {
    key: "_combineAddressElements",
    value: function _combineAddressElements(elements) {
      /**
       * If we have two valid address elements, connect the string with a comma in between, otherwise just use the first.
       * For example:
       * ['65 Beauchamp Street', 'Karori'] becomes '65 Beauchamp Street, Karori'
       * ['34 Arapuni Road', ""] becomes '34 Arapuni Road'
       */
      var addressIsPresent = function addressIsPresent(element) {
        return element != null && element != "";
      };

      var combined = elements.filter(addressIsPresent);
      return combined.length > 1 ? combined.join(", ") : combined[0];
    } // Handles populating the elements with the response from the api (New Zealand)

  }, {
    key: "_nzAddressSelected",
    value: function _nzAddressSelected(fullAddress, metaData) {
      var elements = this.formHelperConfig.nz.elements;
      var selected = new AddressFinder.NZSelectedAddress(fullAddress, metaData);

      if (!elements.address_line_2 && !elements.suburb) {
        // If we only have address_line_1, the address line 1, 2 and suburb values are populated in that field.
        var combined = this._combineAddressElements([selected.address_line_1_and_2(), selected.suburb()]);

        this._setElementValue(elements.address_line_1, combined, "address_line_1");
      } else if (!elements.address_line_2 && elements.suburb) {
        // If we have address_line_1 and a suburb field, put address 1 and 2 into address line 1, and suburb into the suburb field.
        this._setElementValue(elements.address_line_1, selected.address_line_1_and_2(), "address_line_1");

        this._setElementValue(elements.suburb, selected.suburb(), "suburb");
      } else if (!elements.suburb && elements.address_line_2) {
        this._setElementValue(elements.address_line_1, selected.address_line_1_and_2(), "address_line_1");

        this._setElementValue(elements.address_line_2, selected.suburb(), "address_line_2");
      } else {
        // If we have all 3 fields populate each one.
        this._setElementValue(elements.address_line_1, selected.address_line_1(), "address_line_1");

        this._setElementValue(elements.address_line_2, selected.address_line_2(), "address_line_2");

        this._setElementValue(elements.suburb, selected.suburb(), "suburb");
      }

      this._setElementValue(elements.city, selected.city(), "city");

      this._setElementValue(elements.postcode, selected.postcode(), "postcode");

      if (this.formHelperConfig.nz.regionMappings) {
        // matches the region returned by the api with the region values in the select field
        var translatedRegionValue = this.formHelperConfig.nz.regionMappings[metaData.region];

        this._setElementValue(elements.region, translatedRegionValue, "region");
      } else {
        this._setElementValue(elements.region, metaData.region, "region");
      }
    } // Handles populating the elements with the response from the api (Australia)

  }, {
    key: "_auAddressSelected",
    value: function _auAddressSelected(fullAddress, metaData) {
      var elements = this.formHelperConfig.au.elements;

      if (!elements.address_line_2) {
        // If we only have address_line_1, put both address 1 and 2 into this line
        var combined = this._combineAddressElements([metaData.address_line_1, metaData.address_line_2]);

        this._setElementValue(elements.address_line_1, combined, "address_line_1");
      } else {
        this._setElementValue(elements.address_line_1, metaData.address_line_1, "address_line_1"); // metaData.address_line_2 could be undefined, in which case we replace it with an empty string


        var address_line_2 = metaData.address_line_2 || "";

        this._setElementValue(elements.address_line_2, address_line_2, "address_line_2");
      }

      this._setElementValue(elements.locality_name, metaData.locality_name, "suburb");

      this._setElementValue(elements.postcode, metaData.postcode, "postcode");

      if (this.formHelperConfig.au.stateMappings) {
        // matches the state returned by the api with the region values in the select field
        var translatedStateValue = this.formHelperConfig.au.stateMappings[metaData.state_territory];

        this._setElementValue(elements.state_territory, translatedStateValue, "state_territory");
      } else {
        this._setElementValue(elements.state_territory, metaData.state_territory, "state_territory");
      }
    }
  }, {
    key: "_intAddressSelected",
    value: function _intAddressSelected(fullAddress, metaData) {
      var elements = this.formHelperConfig.au.elements;

      if (!elements.address_line_2) {
        // If we only have address_line_1, put both address 1 and 2 into this line
        var combined = this._combineAddressElements([metaData.address.address_line_1, metaData.address.address_line_2]);

        this._setElementValue(elements.address_line_1, combined, "address_line_1");
      } else {
        this._setElementValue(elements.address_line_1, metaData.address.address_line_1, "address_line_1"); // metaData.address_line_2 could be undefined, in which case we replace it with an empty string


        var address_line_2 = metaData.address.address_line_2 || "";

        this._setElementValue(elements.address_line_2, address_line_2, "address_line_2");
      }

      this._setElementValue(elements.locality_name, metaData.address.city, "suburb");

      this._setElementValue(elements.postcode, metaData.address.postcode, "postcode");

      this._setElementValue(elements.state_territory, metaData.address.state, "state_territory");
    }
  }, {
    key: "_setElementValue",
    value: function _setElementValue(element, value, elementName) {
      if (!element) {
        var errorMessage = 'AddressFinder Error: ' + 'Attempted to update value for element that could not be found.\n' + '\nElement: ' + elementName + '\nValue: ' + value;

        if (window.console) {
          console.warn(errorMessage);
        }

        return;
      }
      /**
       * The value tracker is checked on value state update and the tracker value must be different to the new value for it to apply.
       * We are handling this by setting the tracker value to the previous value and then setting the new value.
       * Reference:
       * https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/client/inputValueTracking.js#L115
       *
       * We need this to handle when the plugin is used on a React site as otherwise the React components will reset the form after population.
       */


      var previousValue = element.value;
      element.value = value;
      var tracker = element._valueTracker;

      if (tracker) {
        tracker.setValue(previousValue);
      }

      this._dispatchEvent(element);
    }
    /**
     * This function dispatches an event when the form fields are set, so the store knows the fields have changed. This can affect form validation.
     * Typically we would use a 'change' event here, but Shopify is listening for the 'input' event specifically, so we pass this.formFieldChangeEventToDispatch as a param.
     * It is also important to set 'bubbles' to true, as the store may listen for the event on the document, rather than
     * the input field itself. This allows the event to move up the tree, triggering the event on both the input element and the document.
     */

  }, {
    key: "_dispatchEvent",
    value: function _dispatchEvent(element) {
      var event;

      switch (typeof Event === "undefined" ? "undefined" : _typeof(Event)) {
        case 'function':
          event = new Event(this.formFieldChangeEventToDispatch, {
            "bubbles": true,
            "cancelable": false
          });
          break;

        default:
          event = document.createEvent('Event');
          event.initEvent(this.formFieldChangeEventToDispatch, true, false);
      }

      element.dispatchEvent(event);
    }
  }, {
    key: "_log",
    value: function _log(message) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (this.widgetConfig.debug && window.console) {
        if (data != undefined) {
          console.log("FormHelper for layout ".concat(this.formHelperConfig.label, ": ").concat(message), data);
        } else {
          console.log("FormHelper for layout ".concat(this.formHelperConfig.label, ": ").concat(message));
        }
      }
    }
  }]);

  return FormManager;
}();


// CONCATENATED MODULE: ./src/page_manager.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = page_manager_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || page_manager_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function page_manager_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return page_manager_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return page_manager_arrayLikeToArray(o, minLen); }

function page_manager_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function page_manager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function page_manager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function page_manager_createClass(Constructor, protoProps, staticProps) { if (protoProps) page_manager_defineProperties(Constructor.prototype, protoProps); if (staticProps) page_manager_defineProperties(Constructor, staticProps); return Constructor; }



var page_manager_PageManager = /*#__PURE__*/function () {
  function PageManager(_ref) {
    var addressFormConfigurations = _ref.addressFormConfigurations,
        widgetConfig = _ref.widgetConfig,
        formFieldChangeEventToDispatch = _ref.formFieldChangeEventToDispatch,
        countryChangeEventToListenFor = _ref.countryChangeEventToListenFor;

    page_manager_classCallCheck(this, PageManager);

    this.version = "1.8.7"; // Each formHelper is an instance of the FormManager class

    this.formHelpers = []; // An object containing identifying information about an address form, such as the id values

    this.countryElementWasPresent = false; // We want to keep a record of the county element ever being present, if it is detected and then disappears, we have to reload the widget

    this.addressFormConfigurations = addressFormConfigurations; // Configuration provided by the user, such as keys and widget options

    this.widgetConfig = widgetConfig; // When an address is selected dispatch this event on all the updated form fields. This tells the store the fields have been changed.

    this.formFieldChangeEventToDispatch = formFieldChangeEventToDispatch; // An event listener with this event type is attached to country element. When the country changes the active country for the widget is set.

    this.countryChangeEventToListenFor = countryChangeEventToListenFor;
    this.identifiedFormHelperConfig = [];
    this.reload = this.reload.bind(this);
    this.loadFormHelpers();
  } // Takes the addressFormConfigurations (static and dynamic) provided by the ConfigManager and loads our formHelpers


  page_manager_createClass(PageManager, [{
    key: "reload",
    value: function reload(addressFormConfigurations) {
      if (!this._areAllElementsStillInTheDOM() || this._newFormsIdentified(addressFormConfigurations)) {
        this.identifiedFormHelperConfig = [];
        this.addressFormConfigurations = addressFormConfigurations;
        this.loadFormHelpers();
      }
    } // We destroy and reset all our current helpers and configurations, then recreate them.

  }, {
    key: "loadFormHelpers",
    value: function loadFormHelpers() {
      this.formHelpers.forEach(function (formHelper) {
        return formHelper.destroy();
      });
      this.identifiedAddressFormConfigurations = [];
      this.formHelpers = [];

      this._identifyAddressForms();

      this.identifiedAddressFormConfigurations.forEach(this._initialiseFormHelper.bind(this));
    }
  }, {
    key: "_getCurrentCountryValue",
    value: function _getCurrentCountryValue(config) {
      // If the user does not provide a country element, we set the current country value to the default
      if (!config.countryElement) return this.widgetConfig.defaultCountry;
      var currentCountryCode = null;
      var countryCodes = ['nz', 'au', 'int'];
      countryCodes.forEach(function (countryCode) {
        var countryElementValue = config.countryElement.value;

        if (!countryElementValue && config.getCountryValue) {
          countryElementValue = config.getCountryValue();
        }

        if (countryCode == 'int') {
          if (config[countryCode].countryValue[countryElementValue]) {
            currentCountryCode = config[countryCode].countryValue[countryElementValue];
          }
        } else {
          if (countryElementValue === config[countryCode].countryValue) {
            currentCountryCode = countryCode;
          }
        }
      });
      return currentCountryCode;
    }
    /**
     * We only want to reload AddressFinder if a mutation has made a critical change to the DOM,
     * for example if any of the elements have been removed. This function determines whether we have to reload.
     * This improves performance for all our plugins, but it is critical for the Optimised One Page Checkout in BigCommerce,
     * which triggers page mutations that would otherwise reload AddressFinder on every key press.
     */

  }, {
    key: "_areAllElementsStillInTheDOM",
    value: function _areAllElementsStillInTheDOM() {
      var _this = this;

      if (this.identifiedFormHelperConfig.length === 0) {
        // if we have no config there are no relevant elements in the dom and we must reload.
        return false;
      }

      return this.identifiedFormHelperConfig.every(function (config) {
        if (!_this._identifyingElementsPresentAndVisible(config)) {
          /**
           * if the layout selectors are missing, or hidden we must reload.
           * Sometimes form fields are hidden with css rather than removed from the dom. This check handles this scenario so we can reinitalise.
           */
          return false;
        }

        if (config.countryElement != null && !document.body.contains(config.countryElement) && _this.countryElementWasPresent) {
          /**
           * if the country element is missing and was never present we must reload
           * a null country element will give a false positive, so first we check that it is not null
           */
          return false;
        }

        var currentCountryCode = _this._getCurrentCountryValue(config); // currentCountryCode will be null for non supported countries.
        // return true to avoid continuously reloading the widget, which otherwise would be looking for elements associated with a null currentCountryCode.


        if (currentCountryCode == null) {
          return true;
        }

        if (!_this._areAllElementsStillInTheDOMForCountryCode(config, currentCountryCode)) {
          // if the dom doesn't contain all the elements associated with the current country we must reload
          return false;
        }

        return true;
      });
    }
  }, {
    key: "_ignoreOptionalNullElements",
    value: function _ignoreOptionalNullElements(config, countryCode) {
      var filteredElements = {};

      if (['au', 'nz'].includes(countryCode)) {
        Object.entries(config[countryCode].elements).forEach(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              key = _ref3[0],
              element = _ref3[1];

          // Some forms don't have the address_line_2 or suburb fields.
          // We allow these fields to be missing without reloading the widget
          if (!(config[countryCode].optionalElements.includes(key) && element === null)) {
            filteredElements[key] = element;
          }
        });
      } else {
        Object.entries(config['int'].elements).forEach(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
              key = _ref5[0],
              element = _ref5[1];

          // Some forms don't have the address_line_2 or suburb fields.
          // We allow these fields to be missing without reloading the widget
          if (!(config['int'].optionalElements[countryCode].includes(key) && element === null)) {
            filteredElements[key] = element;
          }
        });
      }

      return filteredElements;
    }
  }, {
    key: "_areAllElementsStillInTheDOMForCountryCode",
    value: function _areAllElementsStillInTheDOMForCountryCode(config, countryCode) {
      if (!countryCode) {
        return false;
      }

      var requiredElements = this._ignoreOptionalNullElements(config, countryCode);

      return Object.values(requiredElements).every(function (element) {
        return element !== null && document.body.contains(element);
      });
    }
  }, {
    key: "_identifyingElementsPresentAndVisible",
    value: function _identifyingElementsPresentAndVisible(addressFormConfig) {
      // layoutSelectors is an array of elements used to identify a form
      return addressFormConfig.layoutSelectors.every(function (selector) {
        var element = document.querySelector(selector);
        /**
         * a selector must be present, and cannot be hidden.
         * This allows us to only initialise AddressFinder for forms that are visible to the user.
        */

        return element !== null && element.style.display !== 'none';
      });
    } // Checks if each of our form configs are present on the page

  }, {
    key: "_identifyAddressForms",
    value: function _identifyAddressForms() {
      var _iterator = _createForOfIteratorHelper(this.addressFormConfigurations),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var addressFormConfig = _step.value;

          if (this._identifyingElementsPresentAndVisible(addressFormConfig)) {
            this.log("Identified layout named: ".concat(addressFormConfig.label));
            this.identifiedAddressFormConfigurations.push(addressFormConfig);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } // Checks if additional forms have been identified since last 'reload'.

  }, {
    key: "_newFormsIdentified",
    value: function _newFormsIdentified(addressFormConfigurations) {
      var identifiedForms = [];

      var _iterator2 = _createForOfIteratorHelper(addressFormConfigurations),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var addressFormConfig = _step2.value;

          if (this._identifyingElementsPresentAndVisible(addressFormConfig)) {
            identifiedForms.push(addressFormConfig);
          }
        } // returns true if additional forms have been identified.
        // this will trigger a full reload of all the widgets for each form.

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (identifiedForms.length > this.identifiedAddressFormConfigurations.length) {
        this.log("Identified addtional forms");
        return true;
      }

      return false;
    } // For each configuration, create a formHelperConfig. This maps our form configurations to the corresponding DOM elements.

  }, {
    key: "_initialiseFormHelper",
    value: function _initialiseFormHelper(addressFormConfig) {
      var searchElement = document.querySelector(addressFormConfig.searchIdentifier);

      if (searchElement && searchElement instanceof HTMLInputElement) {
        var formHelperConfig = {
          countryElement: document.querySelector(addressFormConfig.countryIdentifier),
          searchElement: document.querySelector(addressFormConfig.searchIdentifier),
          label: addressFormConfig.label,
          layoutSelectors: addressFormConfig.layoutSelectors,
          getCountryValue: addressFormConfig.getCountryValue,
          nz: {
            countryValue: addressFormConfig.nz.countryValue,
            elements: {
              address_line_1: document.querySelector(addressFormConfig.nz.elements.address1),
              address_line_2: document.querySelector(addressFormConfig.nz.elements.address2),
              suburb: document.querySelector(addressFormConfig.nz.elements.suburb),
              city: document.querySelector(addressFormConfig.nz.elements.city),
              region: document.querySelector(addressFormConfig.nz.elements.region),
              postcode: document.querySelector(addressFormConfig.nz.elements.postcode)
            },
            regionMappings: addressFormConfig.nz.regionMappings,
            optionalElements: ['address_line_2', 'suburb']
          },
          au: {
            countryValue: addressFormConfig.au.countryValue,
            elements: {
              address_line_1: document.querySelector(addressFormConfig.au.elements.address1),
              address_line_2: document.querySelector(addressFormConfig.au.elements.address2),
              locality_name: document.querySelector(addressFormConfig.au.elements.suburb),
              state_territory: document.querySelector(addressFormConfig.au.elements.state),
              postcode: document.querySelector(addressFormConfig.au.elements.postcode)
            },
            stateMappings: addressFormConfig.au.stateMappings,
            optionalElements: ['address_line_2']
          },
          "int": {
            countryValue: addressFormConfig["int"].countryValue,
            elements: {
              address_line_1: document.querySelector(addressFormConfig["int"].elements.address1),
              address_line_2: document.querySelector(addressFormConfig["int"].elements.address2),
              locality_name: document.querySelector(addressFormConfig["int"].elements.suburb),
              state_territory: document.querySelector(addressFormConfig["int"].elements.state),
              postcode: document.querySelector(addressFormConfig["int"].elements.postcode)
            },
            stateMappings: addressFormConfig["int"].stateMappings,
            optionalElements: addressFormConfig["int"].optionalElements
          }
        };
        this.identifiedFormHelperConfig.push(formHelperConfig); // if the country element is present, we set countryElementWasPresent to true

        if (formHelperConfig.countryElement != null && document.body.contains(formHelperConfig.countryElement)) {
          this.countryElementWasPresent = true;
        }

        var helper = new FormManager(this.widgetConfig, formHelperConfig, this.formFieldChangeEventToDispatch, this.countryChangeEventToListenFor);
        this.formHelpers.push(helper);
      }
    }
  }, {
    key: "log",
    value: function log(message) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (this.widgetConfig.debug && window.console) {
        if (data != undefined) {
          console.log("".concat(message), data);
        } else {
          console.log("".concat(message));
        }
      }
    }
  }]);

  return PageManager;
}();


// CONCATENATED MODULE: ./src/address_form_config/region_mappings.js
/* harmony default export */ var region_mappings = (function (state_field) {
  var _Array$from$map$filte;

  var element = document.querySelector(state_field);
  var three_letter_mapping = {
    'Auckland Region': 'AUK',
    'Bay of Plenty Region': 'BOP',
    'Canterbury Region': 'CAN',
    'Gisborne Region': 'GIS',
    'Hawke\'s Bay Region': 'HKB',
    'Manawatu-Wanganui Region': 'MWT',
    'Marlborough Region': 'MBH',
    'Nelson Region': 'NSN',
    'Northland Region': 'NTL',
    'Otago Region': 'OTA',
    'Southland Region': 'STL',
    'Taranaki Region': 'TKI',
    'Tasman Region': 'TAS',
    'Waikato Region': 'WKO',
    'Wellington Region': 'WGN',
    'West Coast Region': 'WTC',
    'No Region (Chatham Islands)': null
  };
  var two_letter_mapping = {
    'Auckland Region': 'AK',
    'Bay of Plenty Region': 'BP',
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

  if (element && ((_Array$from$map$filte = Array.from(element.querySelectorAll("option")).map(function (el) {
    return el.value;
  }).filter(function (val) {
    return val.length > 0;
  })[0]) === null || _Array$from$map$filte === void 0 ? void 0 : _Array$from$map$filte.length) == 2) {
    return two_letter_mapping;
  }

  return three_letter_mapping;
});
// CONCATENATED MODULE: ./src/address_form_config/billing_address.js

/* harmony default export */ var billing_address = ({
  label: "Billing Checkout",
  layoutSelectors: ["#billing_address_1"],
  countryIdentifier: '#billing_country',
  searchIdentifier: '#billing_address_1',
  nz: {
    countryValue: "NZ",
    elements: {
      address1: '#billing_address_1',
      address2: null,
      suburb: '#billing_address_2',
      city: '#billing_city',
      region: '#billing_state',
      postcode: '#billing_postcode'
    },
    regionMappings: region_mappings('#billing_state')
  },
  au: {
    countryValue: "AU",
    elements: {
      address1: '#billing_address_1',
      address2: '#billing_address_2',
      suburb: '#billing_city',
      state: '#billing_state',
      postcode: '#billing_postcode'
    },
    stateMappings: null
  },
  "int": {
    countryValue: {
      'BE': 'be',
      'CA': 'ca',
      'CZ': 'cz',
      'DE': 'de',
      'FR': 'fr',
      'DK': 'dk',
      'IE': 'ie',
      'NL': 'nl',
      'PT': 'pt',
      'SG': 'sg',
      'ES': 'es',
      'SE': 'se',
      'GB': 'gb',
      'US': 'us'
    },
    elements: {
      address1: '#billing_address_1',
      address2: '#billing_address_2',
      suburb: '#billing_city',
      state: '#billing_state',
      postcode: '#billing_postcode'
    },
    stateMappings: null,
    optionalElements: {
      'be': ['address_line_2', 'state_territory'],
      'ca': ['address_line_2'],
      'cz': ['address_line_2'],
      'de': ['address_line_2', 'state_territory'],
      'fr': ['address_line_2'],
      'dk': ['address_line_2'],
      'ie': ['address_line_2'],
      'nl': ['address_line_2', 'state_territory'],
      'pt': ['address_line_2', 'state_territory'],
      'sg': ['address_line_2', 'state_territory'],
      'es': ['address_line_2'],
      'se': ['address_line_2'],
      'gb': ['address_line_2'],
      'us': ['address_line_2']
    }
  }
});
// CONCATENATED MODULE: ./src/address_form_config/shipping_address.js

/* harmony default export */ var shipping_address = ({
  label: "Shipping Checkout",
  layoutSelectors: ["#shipping_address_1"],
  countryIdentifier: '#shipping_country',
  searchIdentifier: '#shipping_address_1',
  nz: {
    countryValue: "NZ",
    elements: {
      address1: '#shipping_address_1',
      address2: null,
      suburb: '#shipping_address_2',
      city: '#shipping_city',
      region: '#shipping_state',
      postcode: '#shipping_postcode'
    },
    regionMappings: region_mappings('#shipping_state')
  },
  au: {
    countryValue: "AU",
    elements: {
      address1: '#shipping_address_1',
      address2: '#shipping_address_2',
      suburb: '#shipping_city',
      state: '#shipping_state',
      postcode: '#shipping_postcode'
    },
    stateMappings: null
  },
  "int": {
    countryValue: {
      'BE': 'be',
      'CA': 'ca',
      'CZ': 'cz',
      'DE': 'de',
      'FR': 'fr',
      'DK': 'dk',
      'IE': 'ie',
      'NL': 'nl',
      'PT': 'pt',
      'SG': 'sg',
      'ES': 'es',
      'SE': 'se',
      'GB': 'gb',
      'US': 'us'
    },
    elements: {
      address1: '#shipping_address_1',
      address2: '#shipping_address_2',
      suburb: '#shipping_city',
      state: '#shipping_state',
      postcode: '#shipping_postcode'
    },
    stateMappings: null,
    optionalElements: {
      'be': ['address_line_2', 'state_territory'],
      'ca': ['address_line_2'],
      'cz': ['address_line_2'],
      'de': ['address_line_2', 'state_territory'],
      'fr': ['address_line_2'],
      'dk': ['address_line_2'],
      'ie': ['address_line_2'],
      'nl': ['address_line_2', 'state_territory'],
      'pt': ['address_line_2', 'state_territory'],
      'sg': ['address_line_2', 'state_territory'],
      'es': ['address_line_2'],
      'se': ['address_line_2', 'state_territory'],
      'gb': ['address_line_2'],
      'us': ['address_line_2']
    }
  }
});
// CONCATENATED MODULE: ./src/address_form_config/block_shipping_address.js

/* harmony default export */ var block_shipping_address = ({
  label: "Block Shipping Checkout",
  layoutSelectors: ["#shipping-address_1"],
  countryIdentifier: '#components-form-token-input-0',
  searchIdentifier: '#shipping-address_1',
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: '#shipping-address_1',
      address2: null,
      suburb: '#shipping-address_2',
      city: '#shipping-city',
      region: '#components-form-token-input-1',
      postcode: '#shipping-postcode'
    },
    regionMappings: region_mappings('#components-form-token-input-1')
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: '#shipping-address_1',
      address2: '#shipping-address_2',
      suburb: '#shipping-city',
      state: "#components-form-token-input-1",
      postcode: '#shipping-postcode'
    },
    stateMappings: null
  },
  "int": {
    countryValue: {
      'Belgium': 'be',
      'Canada': 'ca',
      'Czechia': 'cz',
      'Denmark': 'de',
      'France': 'fr',
      'Germany': 'dk',
      'Ireland': 'ie',
      'Netherlands': 'nl',
      'Portugal': 'pt',
      'Singapore': 'sg',
      'Spain': 'es',
      'Sweden': 'se',
      'United Kingdom (UK)': 'gb',
      'United States (US)': 'us'
    },
    elements: {
      address1: '#shipping-address_1',
      address2: '#shipping-address_2',
      suburb: '#shipping-city',
      state: "#components-form-token-input-1",
      postcode: '#shipping-postcode'
    },
    stateMappings: null,
    // add link to addressfinder tools
    optionalElements: {
      'be': ['address_line_2', 'state_territory'],
      'ca': ['address_line_2'],
      'cz': ['address_line_2'],
      'de': ['address_line_2', 'state_territory'],
      'fr': ['address_line_2'],
      'dk': ['address_line_2'],
      'ie': ['address_line_2'],
      'nl': ['address_line_2', 'state_territory'],
      'pt': ['address_line_2', 'state_territory'],
      'sg': ['address_line_2', 'state_territory'],
      'es': ['address_line_2'],
      'se': ['address_line_2', 'state_territory'],
      'gb': ['address_line_2'],
      'us': ['address_line_2']
    }
  }
});
// CONCATENATED MODULE: ./src/address_form_config/block_billing_address.js

/* harmony default export */ var block_billing_address = ({
  label: "Block Billing Checkout",
  layoutSelectors: ["#billing-address_1"],
  countryIdentifier: '#components-form-token-input-2',
  searchIdentifier: '#billing-address_1',
  nz: {
    countryValue: "New Zealand",
    elements: {
      address1: '#billing-address_1',
      address2: null,
      suburb: '#billing-address_2',
      city: '#billing-city',
      region: '#components-form-token-input-3',
      postcode: '#billing-postcode'
    },
    regionMappings: region_mappings('#components-form-token-input-3')
  },
  au: {
    countryValue: "Australia",
    elements: {
      address1: '#billing-address_1',
      address2: '#billing-address_2',
      suburb: '#billing-city',
      state: '#components-form-token-input-3',
      postcode: '#billing-postcode'
    },
    stateMappings: null
  },
  "int": {
    countryValue: {
      'Belgium': 'be',
      'Canada': 'ca',
      'Czechia': 'cz',
      'Denmark': 'de',
      'France': 'fr',
      'Germany': 'dk',
      'Ireland': 'ie',
      'Netherlands': 'nl',
      'Portugal': 'pt',
      'Singapore': 'sg',
      'Spain': 'es',
      'Sweden': 'se',
      'United Kingdom (UK)': 'gb',
      'United States (US)': 'us'
    },
    elements: {
      address1: '#billing-address_1',
      address2: '#billing-address_2',
      suburb: '#billing-city',
      state: '#components-form-token-input-3',
      postcode: '#billing-postcode'
    },
    stateMappings: null,
    // add link to addressfinder tools
    optionalElements: {
      'be': ['address_line_2', 'state_territory'],
      'ca': ['address_line_2'],
      'cz': ['address_line_2'],
      'de': ['address_line_2', 'state_territory'],
      'fr': ['address_line_2'],
      'dk': ['address_line_2'],
      'ie': ['address_line_2'],
      'nl': ['address_line_2', 'state_territory'],
      'pt': ['address_line_2', 'state_territory'],
      'sg': ['address_line_2', 'state_territory'],
      'es': ['address_line_2'],
      'se': ['address_line_2', 'state_territory'],
      'gb': ['address_line_2'],
      'us': ['address_line_2']
    }
  }
});
// CONCATENATED MODULE: ./src/address_form_config/find_block_checkout_ids.js
function find_block_checkout_ids_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function find_block_checkout_ids_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function find_block_checkout_ids_createClass(Constructor, protoProps, staticProps) { if (protoProps) find_block_checkout_ids_defineProperties(Constructor.prototype, protoProps); if (staticProps) find_block_checkout_ids_defineProperties(Constructor, staticProps); return Constructor; }

var FindBlockCheckoutIds = /*#__PURE__*/function () {
  function FindBlockCheckoutIds() {
    find_block_checkout_ids_classCallCheck(this, FindBlockCheckoutIds);
  }

  find_block_checkout_ids_createClass(FindBlockCheckoutIds, [{
    key: "findElements",
    value: function findElements(addressFormConfigurations) {
      var shippingCountry = this._getElementId('shipping-country');

      var shippingState = this._getElementId('shipping-state') || "#shipping-state";

      var billingCountry = this._getElementId('billing-country');

      var billingState = this._getElementId('billing-state') || "#billing-state"; // Set the shipping and billing ids for the elements which are known to change on the block checkout.

      addressFormConfigurations.forEach(function (configuration) {
        if (configuration.label == "Block Shipping Checkout") {
          configuration.countryIdentifier = shippingCountry;
          configuration.nz.elements.region = shippingState;
          configuration.au.elements.state = shippingState;
          configuration["int"].elements.state = shippingState;
        } else if (configuration.label == "Block Billing Checkout") {
          configuration.countryIdentifier = billingCountry;
          configuration.nz.elements.region = billingState;
          configuration.au.elements.state = billingState;
          configuration["int"].elements.state = billingState;
        }
      });
    }
  }, {
    key: "_getElementId",
    value: function _getElementId(parentId) {
      var parent = document.getElementById(parentId);

      if (parent) {
        var inputs = parent.getElementsByTagName('input');

        if (inputs.length == 1) {
          return "#".concat(inputs[0].id);
        }
      }

      return null;
    }
  }]);

  return FindBlockCheckoutIds;
}();


// CONCATENATED MODULE: ./src/config_manager.js
function config_manager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function config_manager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function config_manager_createClass(Constructor, protoProps, staticProps) { if (protoProps) config_manager_defineProperties(Constructor.prototype, protoProps); if (staticProps) config_manager_defineProperties(Constructor, staticProps); return Constructor; }







var config_manager_ConfigManager = /*#__PURE__*/function () {
  function ConfigManager() {
    config_manager_classCallCheck(this, ConfigManager);

    this.FindBlockCheckoutIds = new FindBlockCheckoutIds();
  }

  config_manager_createClass(ConfigManager, [{
    key: "load",
    value: function load() {
      // This function is called when the page mutates and returns our form configurations
      var addressFormConfigurations = [shipping_address, billing_address, block_shipping_address, block_billing_address]; // The block checkout input fields have different id's depending on:
      // - country selected
      // - on form create/destroy

      this.FindBlockCheckoutIds.findElements(addressFormConfigurations);
      return addressFormConfigurations;
    }
  }]);

  return ConfigManager;
}();


// CONCATENATED MODULE: ./src/woocommerce_plugin.js
function woocommerce_plugin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function woocommerce_plugin_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function woocommerce_plugin_createClass(Constructor, protoProps, staticProps) { if (protoProps) woocommerce_plugin_defineProperties(Constructor.prototype, protoProps); if (staticProps) woocommerce_plugin_defineProperties(Constructor, staticProps); return Constructor; }





(function (d, w) {
  var WooCommercePlugin = /*#__PURE__*/function () {
    function WooCommercePlugin() {
      woocommerce_plugin_classCallCheck(this, WooCommercePlugin);

      this.version = "1.6.3"; // Manages the mapping of the form configurations to the DOM.

      this.PageManager = null; // Manages the form configurations, and creates any dynamic forms

      this.ConfigManager = null;
      this._initPlugin = this._initPlugin.bind(this);
      this.addressfinderDebugMode = this.addressfinderDebugMode.bind(this);
      w.addressfinderDebugMode = this.addressfinderDebugMode;

      this._initOnDOMLoaded();
    }

    woocommerce_plugin_createClass(WooCommercePlugin, [{
      key: "mutationEventHandler",
      value: function mutationEventHandler() {
        // When the form mutates, reload our form configurations, and reload the form helpers in the page manager.
        var addressFormConfigurations = this.ConfigManager.load();

        if (this.PageManager) {
          this.PageManager.reload(addressFormConfigurations);
        }
      }
    }, {
      key: "_safeParseJSONObject",
      value: function _safeParseJSONObject(jsonObject) {
        if (jsonObject == undefined) {
          return null;
        }

        try {
          jsonObject = JSON.parse(jsonObject);
        } catch (e) {
          if (w.AddressFinderConfig.debug) {
            alert('Invalid widget option: ' + jsonObject);
          }

          return null;
        }

        return jsonObject;
      }
    }, {
      key: "_initOnDOMLoaded",
      value: function _initOnDOMLoaded(event, repetitions) {
        var _this = this;

        // In WooCommerce/Wordpress a country change event is fired during the DOM loading process.
        // If AddressFinder is added before this event it will clear the user's existing address details from the address fields.
        // This function makes sure AddressFinder is initalised after this event.
        repetitions = repetitions || 10;

        if (d.readyState == "complete" && typeof w.AddressFinder != 'undefined') {
          setTimeout(function () {
            console.log('ready state');

            _this._initPlugin();
          }, 1000);
          return;
        }

        if (repetitions == 0) {
          // if 5 seconds have passed and the DOM still isn't ready, initalise AddressFinder
          console.log('repetition zero');

          this._initPlugin();

          return;
        }

        setTimeout(function () {
          // if less than 5 seconds have passed and the DOM isn't ready, recall the function to check again
          _this._initOnDOMLoaded('ignoredEvent', repetitions - 1);
        }, 1000);
      }
    }, {
      key: "_initPlugin",
      value: function _initPlugin() {
        var parsedWidgetOptions = this._safeParseJSONObject(w.AddressFinderConfig.widget_options);

        var parsedNZWidgetOptions = this._safeParseJSONObject(w.AddressFinderConfig.nz_widget_options);

        var parsedAUWidgetOptions = this._safeParseJSONObject(w.AddressFinderConfig.au_widget_options);

        var widgetConfig = {
          nzKey: w.AddressFinderConfig.key_nz || w.AddressFinderConfig.key || w.AddressFinderConfig.key_au,
          auKey: w.AddressFinderConfig.key_au || w.AddressFinderConfig.key || w.AddressFinderConfig.key_nz,
          nzWidgetOptions: parsedNZWidgetOptions || parsedWidgetOptions || {},
          auWidgetOptions: parsedAUWidgetOptions || parsedWidgetOptions || {},
          defaultCountry: w.AddressFinderConfig.default_country || 'nz',
          debug: w.AddressFinderConfig.debug || false
        };
        this.ConfigManager = new config_manager_ConfigManager(); // Watches for any mutations to the DOM, so we can reload our configurations when something changes.

        new MutationManager({
          widgetConfig: widgetConfig,
          mutationEventHandler: this.mutationEventHandler.bind(this),
          ignoredClass: "af_list"
        });
        this.PageManager = new page_manager_PageManager({
          addressFormConfigurations: this.ConfigManager.load(),
          widgetConfig: widgetConfig,
          // When an address is selected dispatch this event on all the updated form fields. This tells the store the fields have been changed.
          formFieldChangeEventToDispatch: 'change',
          // An event listener with this event type is attached to country element. When the country changes the active country for the widget is set.
          countryChangeEventToListenFor: 'blur'
        });

        this._setVersionNumbers();

        w.AddressFinder._woocommercePlugin = this.PageManager;
      }
    }, {
      key: "_setVersionNumbers",
      value: function _setVersionNumbers() {
        // rename webpage tools version from 'version' to 'webpageToolsVersion'
        this.PageManager['webpageToolsVersion'] = this.PageManager.version;
        this.PageManager.version = this.version;
      }
      /*
      * When addressfinderDebugMode() is typed into the Javascript console the plugin will be reinitialised with debug set to true.
      * This allows us to debug more easily on customer sites.
      */

    }, {
      key: "addressfinderDebugMode",
      value: function addressfinderDebugMode() {
        w.AddressFinderConfig.debug = true;

        this._initPlugin();
      }
    }]);

    return WooCommercePlugin;
  }();

  var s = d.createElement('script');
  s.src = 'https://api.addressfinder.io/assets/v3/widget.js';
  s.async = 1;

  s.onload = function () {
    new WooCommercePlugin();
  };

  d.body.appendChild(s);
})(document, window);

/***/ })
/******/ ]);
//# sourceMappingURL=addressfinder.js.map