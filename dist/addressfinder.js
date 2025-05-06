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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(17)('wks');
var uid = __webpack_require__(14);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var hide = __webpack_require__(6);
var redefine = __webpack_require__(13);
var ctx = __webpack_require__(24);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(10)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(12);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(34);
var toPrimitive = __webpack_require__(23);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(37);
var defined = __webpack_require__(20);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(6);
var has = __webpack_require__(4);
var SRC = __webpack_require__(14)('src');
var $toString = __webpack_require__(50);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(1).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(36);
var enumBugKeys = __webpack_require__(31);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(18) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(20);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(51);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(4);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(1);
var LIBRARY = __webpack_require__(18);
var wksExt = __webpack_require__(26);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(29);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(17)('keys');
var uid = __webpack_require__(14);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(6)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(24);
var IObject = __webpack_require__(37);
var toObject = __webpack_require__(22);
var toLength = __webpack_require__(28);
var asc = __webpack_require__(79);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(10)(function () {
  return Object.defineProperty(__webpack_require__(35)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIObject = __webpack_require__(9);
var arrayIndexOf = __webpack_require__(38)(false);
var IE_PROTO = __webpack_require__(30)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(9);
var toLength = __webpack_require__(28);
var toAbsoluteIndex = __webpack_require__(54);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(19);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(11);
var dPs = __webpack_require__(55);
var enumBugKeys = __webpack_require__(31);
var IE_PROTO = __webpack_require__(30)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(35)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(56).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(36);
var hiddenKeys = __webpack_require__(31).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(19);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(63)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(45)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(18);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(13);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(16);
var $iterCreate = __webpack_require__(64);
var setToStringTag = __webpack_require__(25);
var getPrototypeOf = __webpack_require__(65);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(10);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(94);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49);
__webpack_require__(59);
__webpack_require__(60);
__webpack_require__(61);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(13);
var META = __webpack_require__(52).KEY;
var $fails = __webpack_require__(10);
var shared = __webpack_require__(17);
var setToStringTag = __webpack_require__(25);
var uid = __webpack_require__(14);
var wks = __webpack_require__(0);
var wksExt = __webpack_require__(26);
var wksDefine = __webpack_require__(27);
var enumKeys = __webpack_require__(53);
var isArray = __webpack_require__(40);
var anObject = __webpack_require__(11);
var isObject = __webpack_require__(8);
var toObject = __webpack_require__(22);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(23);
var createDesc = __webpack_require__(12);
var _create = __webpack_require__(41);
var gOPNExt = __webpack_require__(57);
var $GOPD = __webpack_require__(58);
var $GOPS = __webpack_require__(39);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(15);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(42).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(21).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(18)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17)('native-function-to-string', Function.toString);


/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(14)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(4);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(10)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(15);
var gOPS = __webpack_require__(39);
var pIE = __webpack_require__(21);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(11);
var getKeys = __webpack_require__(15);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(9);
var gOPN = __webpack_require__(42).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(21);
var createDesc = __webpack_require__(12);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(23);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(34);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(43);
var test = {};
test[__webpack_require__(0)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(13)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('asyncIterator');


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('observable');


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(66);
module.exports = __webpack_require__(26).f('iterator');


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(29);
var defined = __webpack_require__(20);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(41);
var descriptor = __webpack_require__(12);
var setToStringTag = __webpack_require__(25);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4);
var toObject = __webpack_require__(22);
var IE_PROTO = __webpack_require__(30)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(67);
var getKeys = __webpack_require__(15);
var redefine = __webpack_require__(13);
var global = __webpack_require__(2);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(16);
var wks = __webpack_require__(0);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(32);
var step = __webpack_require__(68);
var Iterators = __webpack_require__(16);
var toIObject = __webpack_require__(9);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(45)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
module.exports = __webpack_require__(1).String.includes;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(3);
var context = __webpack_require__(71);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(73)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(72);
var defined = __webpack_require__(20);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(8);
var cof = __webpack_require__(19);
var MATCH = __webpack_require__(0)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(0)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
module.exports = __webpack_require__(1).Object.values;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(3);
var $values = __webpack_require__(76)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(5);
var getKeys = __webpack_require__(15);
var toIObject = __webpack_require__(9);
var isEnum = __webpack_require__(21).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
module.exports = __webpack_require__(1).Array.find;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(3);
var $find = __webpack_require__(33)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(32)(KEY);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(80);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var isArray = __webpack_require__(40);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(82);
module.exports = __webpack_require__(1).Array.from;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(24);
var $export = __webpack_require__(3);
var toObject = __webpack_require__(22);
var call = __webpack_require__(83);
var isArrayIter = __webpack_require__(84);
var toLength = __webpack_require__(28);
var createProperty = __webpack_require__(85);
var getIterFn = __webpack_require__(86);

$export($export.S + $export.F * !__webpack_require__(87)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(11);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(16);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7);
var createDesc = __webpack_require__(12);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(43);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(16);
module.exports = __webpack_require__(1).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
module.exports = __webpack_require__(1).Array.includes;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(3);
var $includes = __webpack_require__(38)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(32)('includes');


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(91);
module.exports = __webpack_require__(1).Array.map;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var $map = __webpack_require__(33)(1);

$export($export.P + $export.F * !__webpack_require__(46)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93);
module.exports = __webpack_require__(1).Array.filter;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(3);
var $filter = __webpack_require__(33)(2);

$export($export.P + $export.F * !__webpack_require__(46)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "PageManager", function() { return /* reexport */ page_manager_PageManager; });
__webpack_require__.d(__webpack_exports__, "ValidationPageManager", function() { return /* reexport */ ValidationPageManager; });
__webpack_require__.d(__webpack_exports__, "EmailPageManager", function() { return /* reexport */ email_page_manager_EmailPageManager; });
__webpack_require__.d(__webpack_exports__, "PhonePageManager", function() { return /* reexport */ phone_page_manager_PhonePageManager; });
__webpack_require__.d(__webpack_exports__, "FormManager", function() { return /* reexport */ FormManager; });
__webpack_require__.d(__webpack_exports__, "ValidationFormManager", function() { return /* reexport */ ValidationFormManager; });
__webpack_require__.d(__webpack_exports__, "EmailFormManager", function() { return /* reexport */ EmailFormManager; });
__webpack_require__.d(__webpack_exports__, "PhoneFormManager", function() { return /* reexport */ PhoneFormManager; });
__webpack_require__.d(__webpack_exports__, "MutationManager", function() { return /* reexport */ MutationManager; });

// EXTERNAL MODULE: ./node_modules/core-js/fn/symbol/index.js
var symbol = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/core-js/fn/symbol/iterator.js
var iterator = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/core-js/fn/string/includes.js
var includes = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/core-js/fn/object/values.js
var values = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/core-js/fn/array/find.js
var find = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/core-js/fn/array/from.js
var from = __webpack_require__(81);

// EXTERNAL MODULE: ./node_modules/core-js/fn/array/includes.js
var array_includes = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/core-js/fn/array/map.js
var map = __webpack_require__(90);

// EXTERNAL MODULE: ./node_modules/core-js/fn/array/filter.js
var filter = __webpack_require__(92);

// CONCATENATED MODULE: ./src/form_manager.js
function _objectValues(obj) {
  var values = [];
  var keys = Object.keys(obj);

  for (var k = 0; k < keys.length; k++) values.push(obj[keys[k]]);

  return values;
}

function _objectEntries(obj) {
  var entries = [];
  var keys = Object.keys(obj);

  for (var k = 0; k < keys.length; k++) entries.push([keys[k], obj[keys[k]]]);

  return entries;
}

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormManager = /*#__PURE__*/function () {
  function FormManager(widgetConfig, formHelperConfig, formFieldChangeEventToDispatch, countryChangeEventToListenFor) {
    _classCallCheck(this, FormManager);

    this.widgetConfig = widgetConfig; // Contains references to the DOM elements that make up this form

    this.formHelperConfig = formHelperConfig; // When an address is selected dispatch this event on all the updated form fields. This tells the store the fields have been changed.

    this.formFieldChangeEventToDispatch = formFieldChangeEventToDispatch; // An event listener with this event type is attached to country element. When the country changes the active country for the widget is set.

    this.countryChangeEventToListenFor = countryChangeEventToListenFor;
    this.widgets = {};
    this.countryCodes = ["au", "nz"];

    this._bindToForm();
  } // Shuts down this form_helper by disabling the widget and any callback handlers.


  _createClass(FormManager, [{
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
      var intWidget = new window.AddressFinder.Widget(this.formHelperConfig.searchElement, this.widgetConfig.auKey, "us", this.widgetConfig.intWidgetOptions);
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
    } // Matches the value of the countryElement with the countryValue(s) for this configuration. If it finds a match this will become the active country.

  }, {
    key: "_countryChanged",
    value: function _countryChanged() {
      var _this$formHelperConfi, _this$formHelperConfi2;

      var rawCountryValue = (_this$formHelperConfi = (_this$formHelperConfi2 = this.formHelperConfig.countryElement) === null || _this$formHelperConfi2 === void 0 ? void 0 : _this$formHelperConfi2.value) !== null && _this$formHelperConfi !== void 0 ? _this$formHelperConfi : "";
      var countryValue = rawCountryValue.toLowerCase();
      var activeCountry = "null";

      var normalizeArray = function normalizeArray(value) {
        return Array.isArray(value) ? value.map(function (v) {
          return v.toLowerCase();
        }) : [value.toLowerCase()];
      };

      var matchCountry = function matchCountry(input, options) {
        return normalizeArray(options).includes(input);
      };

      var _this$formHelperConfi3 = this.formHelperConfig,
          nz = _this$formHelperConfi3.nz,
          au = _this$formHelperConfi3.au,
          _this$formHelperConfi4 = _this$formHelperConfi3["int"],
          _int = _this$formHelperConfi4 === void 0 ? {} : _this$formHelperConfi4;

      if (matchCountry(countryValue, nz.countryValue)) {
        activeCountry = "nz";
      } else if (matchCountry(countryValue, au.countryValue)) {
        activeCountry = "au";
      } else if (countryValue === "") {
        activeCountry = "null";
      } else {
        var intMap = _int.countryValue || {};

        var matchFromKey = _objectEntries(intMap).find(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 1),
              key = _ref2[0];

          return key.toLowerCase() === countryValue;
        });

        var matchFromValue = _objectEntries(intMap).find(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              val = _ref4[1];

          return val.toLowerCase() === countryValue;
        });

        activeCountry = (matchFromKey === null || matchFromKey === void 0 ? void 0 : matchFromKey[1]) || (matchFromValue === null || matchFromValue === void 0 ? void 0 : matchFromValue[1]) || "null";
      }

      this._setActiveCountry(activeCountry);
    }
  }, {
    key: "_setActiveCountry",
    value: function _setActiveCountry(countryCode) {
      this._log("Setting active country", countryCode);

      _objectValues(this.widgets).forEach(function (widget) {
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
      var elements = this.formHelperConfig["int"].elements;

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

      if (this.formHelperConfig["int"].stateMappings && this.formHelperConfig["int"].stateMappings[metaData.address.country_code]) {
        // matches the state returned by the api with the state values in the select field
        var translatedStateValue = this.formHelperConfig["int"].stateMappings[metaData.address.country_code][metaData.address.state];

        this._setElementValue(elements.state_territory, translatedStateValue, "state_territory");
      } else {
        this._setElementValue(elements.state_territory, metaData.address.state, "state_territory");
      }
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
function page_manager_objectValues(obj) {
  var values = [];
  var keys = Object.keys(obj);

  for (var k = 0; k < keys.length; k++) values.push(obj[keys[k]]);

  return values;
}

function page_manager_objectEntries(obj) {
  var entries = [];
  var keys = Object.keys(obj);

  for (var k = 0; k < keys.length; k++) entries.push([keys[k], obj[keys[k]]]);

  return entries;
}

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = page_manager_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function page_manager_slicedToArray(arr, i) { return page_manager_arrayWithHoles(arr) || page_manager_iterableToArrayLimit(arr, i) || page_manager_unsupportedIterableToArray(arr, i) || page_manager_nonIterableRest(); }

function page_manager_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function page_manager_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return page_manager_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return page_manager_arrayLikeToArray(o, minLen); }

function page_manager_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function page_manager_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function page_manager_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

    this.version = "2.1.4"; // Each formHelper is an instance of the FormManager class

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
        page_manager_objectEntries(config[countryCode].elements).forEach(function (_ref2) {
          var _ref3 = page_manager_slicedToArray(_ref2, 2),
              key = _ref3[0],
              element = _ref3[1];

          // Some forms don't have the address_line_2 or suburb fields.
          // We allow these fields to be missing without reloading the widget
          if (!(config[countryCode].optionalElements.includes(key) && element === null)) {
            filteredElements[key] = element;
          }
        });
      } else {
        page_manager_objectEntries(config['int'].elements).forEach(function (_ref4) {
          var _ref5 = page_manager_slicedToArray(_ref4, 2),
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

      return page_manager_objectValues(requiredElements).every(function (element) {
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
        this.log("Identified additional forms");
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


// CONCATENATED MODULE: ./src/validation_managers/validation_page_manager.js
function validation_page_manager_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = validation_page_manager_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function validation_page_manager_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return validation_page_manager_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return validation_page_manager_arrayLikeToArray(o, minLen); }

function validation_page_manager_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function validation_page_manager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function validation_page_manager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function validation_page_manager_createClass(Constructor, protoProps, staticProps) { if (protoProps) validation_page_manager_defineProperties(Constructor.prototype, protoProps); if (staticProps) validation_page_manager_defineProperties(Constructor, staticProps); return Constructor; }

var ValidationPageManager = /*#__PURE__*/function () {
  function ValidationPageManager(_ref) {
    var formConfigurations = _ref.formConfigurations,
        widgetConfig = _ref.widgetConfig,
        _ref$countryChangeEve = _ref.countryChangeEventToListenFor,
        countryChangeEventToListenFor = _ref$countryChangeEve === void 0 ? null : _ref$countryChangeEve;

    validation_page_manager_classCallCheck(this, ValidationPageManager);

    // Each formHelper is an instance of the ValidationFormManager class
    this.formHelpers = [];
    this.formConfigurations = formConfigurations;
    this.widgetConfig = widgetConfig; // The countryChangeEventToListenFor is an optional value platforms
    // can set to listen for events (change, blur) on HTML select/input elements.

    this.countryChangeEventToListenFor = countryChangeEventToListenFor;
    this.identifiedFormHelperConfigs = [];
    this.reload = this.reload.bind(this);

    this._loadFormHelpers();
  }

  validation_page_manager_createClass(ValidationPageManager, [{
    key: "reload",
    value: function reload(formConfigurations) {
      if (!this._areAllElementsStillInTheDOM() || this._newFormsIdentified(formConfigurations)) {
        this.identifiedFormHelperConfigs = [];
        this.formConfigurations = formConfigurations;

        this._loadFormHelpers();
      }
    }
  }, {
    key: "_loadFormHelpers",
    value: function _loadFormHelpers() {
      this.formHelpers.forEach(function (formHelper) {
        return formHelper.destroy();
      });
      this.identifiedFormConfigurations = [];
      this.formHelpers = [];

      this._identifyForms();

      this.identifiedFormConfigurations.forEach(this._initialiseFormHelper.bind(this));
    }
    /**
     * We only want to reload AddressFinder widgets if a mutation has made a critical change to the DOM,
     * for example if any of the elements have been removed. This function determines whether we have to reload.
     * This improves performance for all our plugins, but it is critical for the Optimised One Page Checkout in BigCommerce,
     * which triggers page mutations that would otherwise reload AddressFinder on every key press.
     */

  }, {
    key: "_areAllElementsStillInTheDOM",
    value: function _areAllElementsStillInTheDOM() {
      var _this = this;

      if (this.identifiedFormHelperConfigs.length === 0) {
        // if we have no config there are no relevant elements in the dom and we must reload.
        return false;
      }

      return this.identifiedFormHelperConfigs.every(function (config) {
        if (!_this._identifyingElementsPresentAndVisible(config)) {
          /**
           * if the layout selectors are missing, or hidden we must reload.
           * Sometimes form fields are hidden with css rather than removed from the dom. This check handles this scenario so we can reinitalise.
           */
          return false;
        }

        return true;
      });
    }
  }, {
    key: "_identifyingElementsPresentAndVisible",
    value: function _identifyingElementsPresentAndVisible(formConfig) {
      // layoutSelectors is an array of elements used to identify a form
      return formConfig.layoutSelectors.every(function (selector) {
        var element = document.querySelector(selector);
        /**
         * a selector must be present, and cannot be hidden.
         * This allows us to only initialise AddressFinder for forms that are visible to the user.
        */

        return element !== null && element.style.display !== 'none';
      });
    } // Checks if each of our form configs are present on the page

  }, {
    key: "_identifyForms",
    value: function _identifyForms() {
      var _iterator = validation_page_manager_createForOfIteratorHelper(this.formConfigurations),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var formConfig = _step.value;

          if (this._identifyingElementsPresentAndVisible(formConfig)) {
            this.log("Identified layout named: ".concat(formConfig.label));
            this.identifiedFormConfigurations.push(formConfig);
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
    value: function _newFormsIdentified(formConfigurations) {
      var identifiedForms = [];

      var _iterator2 = validation_page_manager_createForOfIteratorHelper(formConfigurations),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var formConfig = _step2.value;

          if (this._identifyingElementsPresentAndVisible(formConfig)) {
            identifiedForms.push(formConfig);
          }
        } // returns true if additional forms have been identified.
        // this will trigger a full reload of all the widgets for each form.

      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (identifiedForms.length > this.identifiedFormConfigurations.length) {
        this.log("Identified additional validation forms");
        return true;
      }

      return false;
    } // 'Abstract' methods invoked which construct the specific validation form managers.

  }, {
    key: "_initialiseFormHelper",
    value: function _initialiseFormHelper(formConfig) {
      var element = document.querySelector(formConfig.inputIdentifier);

      if (element && element instanceof HTMLInputElement) {
        var formHelperConfig = this.formHelperConfig(formConfig);
        this.identifiedFormHelperConfigs.push(formHelperConfig);
        var helper = this.formHelper(this.widgetConfig, formHelperConfig, this.countryChangeEventToListenFor);
        this.formHelpers.push(helper);
      }
    } // Acts as an abstract method that the child class must implement

  }, {
    key: "formHelperConfig",
    value: function formHelperConfig(formConfig) {
      throw new Error('formHelperConfig() must be implemented in the child class');
    } // Acts as an abstract method that the child class must implement

  }, {
    key: "formHelper",
    value: function formHelper(widgetConfig, formHelperConfig, countryChangeEventToListenFor) {
      throw new Error('formHelper() must be implemented in the child class');
    }
  }, {
    key: "log",
    value: function log(message) {
      if (this.widgetConfig.debug && window.console) {
        window.console.log(message);
      }
    }
  }]);

  return ValidationPageManager;
}();


// CONCATENATED MODULE: ./src/validation_managers/validation_form_manager.js
function validation_form_manager_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { validation_form_manager_typeof = function _typeof(obj) { return typeof obj; }; } else { validation_form_manager_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return validation_form_manager_typeof(obj); }

function validation_form_manager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function validation_form_manager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function validation_form_manager_createClass(Constructor, protoProps, staticProps) { if (protoProps) validation_form_manager_defineProperties(Constructor.prototype, protoProps); if (staticProps) validation_form_manager_defineProperties(Constructor, staticProps); return Constructor; }

var ValidationFormManager = /*#__PURE__*/function () {
  function ValidationFormManager(widgetConfig, formHelperConfig) {
    var countryChangeEventToListenFor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    validation_form_manager_classCallCheck(this, ValidationFormManager);

    this.widgetConfig = widgetConfig; // Contains references to the DOM elements that make up this form

    this.formHelperConfig = formHelperConfig; // The countryChangeEventToListenFor is an optional value platforms
    // can set to listen for events (change, blur) on HTML select/input elements.

    this.countryChangeEventToListenFor = countryChangeEventToListenFor;
    this.setWidget(null);
    this.bindToForm();
  } // Acts as an abstract method that the child class must implement


  validation_form_manager_createClass(ValidationFormManager, [{
    key: "bindToForm",
    value: function bindToForm() {
      throw new Error('bindToForm() must be implemented in the child class');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var widget = this.getWidget();

      if (widget != null) {
        widget.disable();
        this.setWidget(null);
      }
    }
  }, {
    key: "setWidget",
    value: function setWidget(widget) {
      this.widget = widget;
    }
  }, {
    key: "getWidget",
    value: function getWidget() {
      return this.widget;
    }
  }, {
    key: "setElementValue",
    value: function setElementValue(element, value, elementName) {
      if (!element) {
        var errorMessage = 'AddressFinder Error: ' + 'Attempted to update value for element that could not be found.\n' + '\nElement: ' + elementName + '\nValue: ' + value;

        if (window.console) {
          window.console.warn(errorMessage);
        }

        return;
      }

      element.value = value;
      var tracker = element._valueTracker;

      if (tracker) {
        var previousValue = element.value;
        tracker.setValue(previousValue);
      }

      this.dispatchEvent(element);
    } // This tells the store the fields have been changed.

  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(element) {
      var event;

      switch (typeof Event === "undefined" ? "undefined" : validation_form_manager_typeof(Event)) {
        case 'function':
          event = new Event('change', {
            "bubbles": true,
            "cancelable": false
          });
          break;

        default:
          event = document.createEvent('Event');
          event.initEvent('change', true, false);
      }

      element.dispatchEvent(event);
    }
  }, {
    key: "log",
    value: function log(message) {
      if (this.widgetConfig.debug && window.console) {
        window.console.log(message);
      }
    }
  }]);

  return ValidationFormManager;
}();


// CONCATENATED MODULE: ./src/email_validation_managers/email_form_manager.js
function email_form_manager_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { email_form_manager_typeof = function _typeof(obj) { return typeof obj; }; } else { email_form_manager_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return email_form_manager_typeof(obj); }

function email_form_manager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function email_form_manager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function email_form_manager_createClass(Constructor, protoProps, staticProps) { if (protoProps) email_form_manager_defineProperties(Constructor.prototype, protoProps); if (staticProps) email_form_manager_defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (email_form_manager_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var EmailFormManager = /*#__PURE__*/function (_ValidationFormManage) {
  _inherits(EmailFormManager, _ValidationFormManage);

  var _super = _createSuper(EmailFormManager);

  function EmailFormManager(widgetConfig, formHelperConfig) {
    email_form_manager_classCallCheck(this, EmailFormManager);

    return _super.call(this, widgetConfig, formHelperConfig);
  }

  email_form_manager_createClass(EmailFormManager, [{
    key: "destroy",
    value: function destroy() {
      this.log("Email widget destroyed");

      _get(_getPrototypeOf(EmailFormManager.prototype), "destroy", this).call(this);
    }
  }, {
    key: "bindToForm",
    value: function bindToForm() {
      this.log("Email widget created");
      this.setWidget(new window.AddressfinderEmail.Email.Widget(this.formHelperConfig.emailIdentifier, this.widgetConfig.nzKey, this.widgetConfig.evWidgetOptions));
    }
  }]);

  return EmailFormManager;
}(ValidationFormManager);


// CONCATENATED MODULE: ./src/email_validation_managers/email_page_manager.js
function email_page_manager_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { email_page_manager_typeof = function _typeof(obj) { return typeof obj; }; } else { email_page_manager_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return email_page_manager_typeof(obj); }

function email_page_manager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function email_page_manager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function email_page_manager_createClass(Constructor, protoProps, staticProps) { if (protoProps) email_page_manager_defineProperties(Constructor.prototype, protoProps); if (staticProps) email_page_manager_defineProperties(Constructor, staticProps); return Constructor; }

function email_page_manager_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) email_page_manager_setPrototypeOf(subClass, superClass); }

function email_page_manager_setPrototypeOf(o, p) { email_page_manager_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return email_page_manager_setPrototypeOf(o, p); }

function email_page_manager_createSuper(Derived) { var hasNativeReflectConstruct = email_page_manager_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = email_page_manager_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = email_page_manager_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return email_page_manager_possibleConstructorReturn(this, result); }; }

function email_page_manager_possibleConstructorReturn(self, call) { if (call && (email_page_manager_typeof(call) === "object" || typeof call === "function")) { return call; } return email_page_manager_assertThisInitialized(self); }

function email_page_manager_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function email_page_manager_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function email_page_manager_getPrototypeOf(o) { email_page_manager_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return email_page_manager_getPrototypeOf(o); }




var email_page_manager_EmailPageManager = /*#__PURE__*/function (_ValidationPageManage) {
  email_page_manager_inherits(EmailPageManager, _ValidationPageManage);

  var _super = email_page_manager_createSuper(EmailPageManager);

  function EmailPageManager(_ref) {
    var formConfigurations = _ref.formConfigurations,
        widgetConfig = _ref.widgetConfig;

    email_page_manager_classCallCheck(this, EmailPageManager);

    return _super.call(this, {
      formConfigurations: formConfigurations,
      widgetConfig: widgetConfig
    });
  }

  email_page_manager_createClass(EmailPageManager, [{
    key: "formHelper",
    value: function formHelper(widgetConfig, formHelperConfig, _countryChangeEventToListenFor) {
      return new EmailFormManager(widgetConfig, formHelperConfig);
    }
  }, {
    key: "formHelperConfig",
    value: function formHelperConfig(formConfig) {
      return {
        layoutSelectors: formConfig.layoutSelectors,
        emailIdentifier: formConfig.inputIdentifier,
        elements: {
          emailInput: document.querySelector(formConfig.inputIdentifier)
        }
      };
    }
  }]);

  return EmailPageManager;
}(ValidationPageManager);


// CONCATENATED MODULE: ./src/phone_validation_managers/phone_form_manager.js
function phone_form_manager_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { phone_form_manager_typeof = function _typeof(obj) { return typeof obj; }; } else { phone_form_manager_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return phone_form_manager_typeof(obj); }

function phone_form_manager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function phone_form_manager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function phone_form_manager_createClass(Constructor, protoProps, staticProps) { if (protoProps) phone_form_manager_defineProperties(Constructor.prototype, protoProps); if (staticProps) phone_form_manager_defineProperties(Constructor, staticProps); return Constructor; }

function phone_form_manager_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { phone_form_manager_get = Reflect.get; } else { phone_form_manager_get = function _get(target, property, receiver) { var base = phone_form_manager_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return phone_form_manager_get(target, property, receiver || target); }

function phone_form_manager_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = phone_form_manager_getPrototypeOf(object); if (object === null) break; } return object; }

function phone_form_manager_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) phone_form_manager_setPrototypeOf(subClass, superClass); }

function phone_form_manager_setPrototypeOf(o, p) { phone_form_manager_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return phone_form_manager_setPrototypeOf(o, p); }

function phone_form_manager_createSuper(Derived) { var hasNativeReflectConstruct = phone_form_manager_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = phone_form_manager_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = phone_form_manager_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return phone_form_manager_possibleConstructorReturn(this, result); }; }

function phone_form_manager_possibleConstructorReturn(self, call) { if (call && (phone_form_manager_typeof(call) === "object" || typeof call === "function")) { return call; } return phone_form_manager_assertThisInitialized(self); }

function phone_form_manager_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function phone_form_manager_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function phone_form_manager_getPrototypeOf(o) { phone_form_manager_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return phone_form_manager_getPrototypeOf(o); }



var PhoneFormManager = /*#__PURE__*/function (_ValidationFormManage) {
  phone_form_manager_inherits(PhoneFormManager, _ValidationFormManage);

  var _super = phone_form_manager_createSuper(PhoneFormManager);

  function PhoneFormManager(widgetConfig, formHelperConfig, countryChangeEventToListenFor) {
    phone_form_manager_classCallCheck(this, PhoneFormManager);

    // If countryChangeEventToListenFor is null this means we rely on the phone widget's ability to detect a country change.
    // For plugins such as WooCommerce where events do not always filter down,
    // our phone widget is unable to identify when a select element has changed.
    // Thus, we add our own event listener in the bindToForm() method.
    if (countryChangeEventToListenFor === null) {
      // sets the widget country select to the country identifier found in the html form.
      widgetConfig.pvWidgetOptions.countrySelect = formHelperConfig.countryIdentifier;
    }

    return _super.call(this, widgetConfig, formHelperConfig, countryChangeEventToListenFor);
  }

  phone_form_manager_createClass(PhoneFormManager, [{
    key: "destroy",
    value: function destroy() {
      this.log('Phone widget destroyed');

      if (this.countryChangeEventToListenFor) {
        this._removeCountryChangedListener();
      }

      phone_form_manager_get(phone_form_manager_getPrototypeOf(PhoneFormManager.prototype), "destroy", this).call(this);
    }
  }, {
    key: "bindToForm",
    value: function bindToForm() {
      this.log('Phone widget created');
      this.setWidget(new window.AddressfinderPhone.Phone.Widget(this.formHelperConfig.phoneIdentifier, this.widgetConfig.nzKey, this.widgetConfig.pvWidgetOptions)); // This listens for events specified by the plugin on the country select element.
      // Eg. For the WooCommerce plugin it is listening for the 'blur' event.

      if (this.countryChangeEventToListenFor) {
        this._addCountryChangedListener();
      }

      this._formatNumber();
    }
  }, {
    key: "_countryChanged",
    value: function _countryChanged() {
      var countryElement = this.formHelperConfig.elements.countryInput;

      if (countryElement) {
        this._changeWidgetDefaultCountryCode(countryElement.value);

        this._triggerWidgetValidation();
      }
    }
  }, {
    key: "_addCountryChangedListener",
    value: function _addCountryChangedListener() {
      var countryElement = this.formHelperConfig.elements.countryInput;

      if (countryElement) {
        this.boundCountryChangedListener = this._countryChanged.bind(this); // save this so we can unbind in the destroy() method

        countryElement.addEventListener(this.countryChangeEventToListenFor, this.boundCountryChangedListener);

        this._changeWidgetDefaultCountryCode(countryElement.value); // sets the initial countryCode state

      }
    }
  }, {
    key: "_removeCountryChangedListener",
    value: function _removeCountryChangedListener() {
      var countryElement = this.formHelperConfig.elements.countryInput;

      if (countryElement) {
        countryElement.removeEventListener(this.countryChangeEventToListenFor, this.boundCountryChangedListener);
      }
    }
  }, {
    key: "_changeWidgetDefaultCountryCode",
    value: function _changeWidgetDefaultCountryCode(countryCode) {
      this.getWidget().setDefaultCountryCode(countryCode);
    }
  }, {
    key: "_triggerWidgetValidation",
    value: function _triggerWidgetValidation() {
      this.getWidget().reactivate();
    } // This will format the phone number on verification, provided the client has requested it in the options.

  }, {
    key: "_formatNumber",
    value: function _formatNumber() {
      var _this = this;

      var formatNumber = this.widgetConfig.pvWidgetOptions.formatNumber;

      if (formatNumber) {
        var element = this.formHelperConfig.elements.phoneInput;
        var widget = this.getWidget();
        widget.on("result:verified", function (metadata) {
          switch (formatNumber) {
            case "rawNational":
              _this.setElementValue(element, metadata.raw_national, "phone_input");

              break;

            case "formattedNational":
              _this.setElementValue(element, metadata.formatted_national, "phone_input");

              break;

            case "rawInternational":
              _this.setElementValue(element, metadata.raw_international, "phone_input");

              break;

            case "formattedInternational":
              _this.setElementValue(element, metadata.formatted_international, "phone_input");

              break;
          }
        });
      }
    }
  }]);

  return PhoneFormManager;
}(ValidationFormManager);


// CONCATENATED MODULE: ./src/phone_validation_managers/phone_page_manager.js
function phone_page_manager_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { phone_page_manager_typeof = function _typeof(obj) { return typeof obj; }; } else { phone_page_manager_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return phone_page_manager_typeof(obj); }

function phone_page_manager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function phone_page_manager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function phone_page_manager_createClass(Constructor, protoProps, staticProps) { if (protoProps) phone_page_manager_defineProperties(Constructor.prototype, protoProps); if (staticProps) phone_page_manager_defineProperties(Constructor, staticProps); return Constructor; }

function phone_page_manager_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) phone_page_manager_setPrototypeOf(subClass, superClass); }

function phone_page_manager_setPrototypeOf(o, p) { phone_page_manager_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return phone_page_manager_setPrototypeOf(o, p); }

function phone_page_manager_createSuper(Derived) { var hasNativeReflectConstruct = phone_page_manager_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = phone_page_manager_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = phone_page_manager_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return phone_page_manager_possibleConstructorReturn(this, result); }; }

function phone_page_manager_possibleConstructorReturn(self, call) { if (call && (phone_page_manager_typeof(call) === "object" || typeof call === "function")) { return call; } return phone_page_manager_assertThisInitialized(self); }

function phone_page_manager_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function phone_page_manager_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function phone_page_manager_getPrototypeOf(o) { phone_page_manager_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return phone_page_manager_getPrototypeOf(o); }




var phone_page_manager_PhonePageManager = /*#__PURE__*/function (_ValidationPageManage) {
  phone_page_manager_inherits(PhonePageManager, _ValidationPageManage);

  var _super = phone_page_manager_createSuper(PhonePageManager);

  function PhonePageManager(_ref) {
    var formConfigurations = _ref.formConfigurations,
        widgetConfig = _ref.widgetConfig,
        countryChangeEventToListenFor = _ref.countryChangeEventToListenFor;

    phone_page_manager_classCallCheck(this, PhonePageManager);

    return _super.call(this, {
      formConfigurations: formConfigurations,
      widgetConfig: widgetConfig,
      countryChangeEventToListenFor: countryChangeEventToListenFor
    });
  }

  phone_page_manager_createClass(PhonePageManager, [{
    key: "formHelper",
    value: function formHelper(widgetConfig, formHelperConfig, countryChangeEventToListenFor) {
      return new PhoneFormManager(widgetConfig, formHelperConfig, countryChangeEventToListenFor);
    }
  }, {
    key: "formHelperConfig",
    value: function formHelperConfig(formConfig) {
      return {
        layoutSelectors: formConfig.layoutSelectors,
        phoneIdentifier: formConfig.inputIdentifier,
        countryIdentifier: formConfig.countryIdentifier,
        elements: {
          phoneInput: document.querySelector(formConfig.inputIdentifier),
          countryInput: document.querySelector(formConfig.countryIdentifier)
        }
      };
    }
  }]);

  return PhonePageManager;
}(ValidationPageManager);


// CONCATENATED MODULE: ./src/mutation_manager.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || mutation_manager_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function mutation_manager_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return mutation_manager_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mutation_manager_arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return mutation_manager_arrayLikeToArray(arr); }

function mutation_manager_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function mutation_manager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function mutation_manager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function mutation_manager_createClass(Constructor, protoProps, staticProps) { if (protoProps) mutation_manager_defineProperties(Constructor.prototype, protoProps); if (staticProps) mutation_manager_defineProperties(Constructor, staticProps); return Constructor; }

var MutationManager = /*#__PURE__*/function () {
  function MutationManager(_ref) {
    var widgetConfig = _ref.widgetConfig,
        mutationEventHandler = _ref.mutationEventHandler,
        ignoredClass = _ref.ignoredClass;

    mutation_manager_classCallCheck(this, MutationManager);

    this.widgetConfig = widgetConfig;
    this.mutationEventHandler = mutationEventHandler; // Mutation events emitted by elements with this class are ignored.

    this.ignoredClass = ignoredClass;
    this.millisecondsToIgnoreMutations = 750; // The amount of times the page can mutate in a row without forcing AddressFinder to be reinitialised.

    this.maxMutationTimeoutCount = 20; // The count of the times the page has mutated in a row

    this.mutationTimeoutCount = 0;
    this.monitorMutations();
  } // Attaches an observer or eventListener for listening to mutations


  mutation_manager_createClass(MutationManager, [{
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


// CONCATENATED MODULE: ./src/index.js
 // see https://github.com/zloirock/core-js




















/***/ })
/******/ ]);
});
//# sourceMappingURL=addressfinder-webpage-tools.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

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
    'Manawatū-Whanganui Region': 'MWT',
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
    'Manawatū-Whanganui Region': 'MW',
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
// CONCATENATED MODULE: ./src/address_form_config/international_state_mappings.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ var international_state_mappings = (function (form_type) {
  if (form_type == 'blockForm') {
    var block_form_mapping = {
      'IE': {
        "County Cavan": "CN",
        "County Clare": "CE",
        "County Westmeath": "WH",
        "County Longford": "LD",
        "County Munster": "M",
        "County Meath": "MH",
        "County Dublin": "DU",
        "County Carlow": "CW",
        "County Kerry": "KY",
        "County Kilkenny": "KK",
        "County Kildare": "KE",
        "County Wicklow": "WW",
        "County Connaught": "C",
        "County Cork": "CO",
        "County Donegal": "D",
        "County Galway": "G",
        "County Leinster": "L",
        "County Laois": "LS",
        "County Leitrim": "LM",
        "County Limerick": "LK",
        "County Wexford": "WX",
        "County Louth": "LH",
        "County Mayo": "MO",
        "County Monaghan": "MN",
        "County Offaly": "OY",
        "County Waterford": "WD",
        "County Roscommon": "RN",
        "County Sligo": "SO",
        "County Tipperary": "TA",
        "County Ulster": "U"
      }
    };
    return block_form_mapping;
  } else {
    var _ES;

    var standard_form_mapping = {
      'ES': (_ES = {
        "A Coruña": "C",
        "Alacant*": "A",
        "Albacete": "AB",
        "Almería": "AL",
        "Andalucía": "AN",
        "Araba*": "VI",
        "Aragón": "AR",
        "Asturias": "O",
        "Principado de Asturias": "AS",
        "Badajoz": "BA",
        "Barcelona": "B",
        "Bizkaia": "BI",
        "Burgos": "BU",
        "Canarias": "CN",
        "Cantabria": "S"
      }, _defineProperty(_ES, "Cantabria", "CB"), _defineProperty(_ES, "Castelló*", "CS"), _defineProperty(_ES, "Castilla y León", "CL"), _defineProperty(_ES, "Castilla-La Mancha", "CM"), _defineProperty(_ES, "Catalunya", "CT"), _defineProperty(_ES, "Ceuta", "CE"), _defineProperty(_ES, "Ciudad Real", "CR"), _defineProperty(_ES, "Cuenca", "CU"), _defineProperty(_ES, "Cáceres", "CC"), _defineProperty(_ES, "Cádiz", "CA"), _defineProperty(_ES, "Córdoba", "CO"), _defineProperty(_ES, "Euskal Herria", "PV"), _defineProperty(_ES, "Extremadura", "EX"), _defineProperty(_ES, "Galicia", "GA"), _defineProperty(_ES, "Gipuzkoa", "SS"), _defineProperty(_ES, "Girona", "GI"), _defineProperty(_ES, "Granada", "GR"), _defineProperty(_ES, "Guadalajara", "GU"), _defineProperty(_ES, "Huelva", "H"), _defineProperty(_ES, "Huesca", "HU"), _defineProperty(_ES, "Illes Balears", "PM"), _defineProperty(_ES, "Illes Balears", "IB"), _defineProperty(_ES, "Jaén", "J"), _defineProperty(_ES, "La Rioja", "LO"), _defineProperty(_ES, "La Rioja", "RI"), _defineProperty(_ES, "Las Palmas", "GC"), _defineProperty(_ES, "León", "LE"), _defineProperty(_ES, "Lleida", "L"), _defineProperty(_ES, "Lugo", "LU"), _defineProperty(_ES, "Madrid", "M"), _defineProperty(_ES, "Comunidad de Madrid", "MD"), _defineProperty(_ES, "Melilla", "ML"), _defineProperty(_ES, "Murcia", "MU"), _defineProperty(_ES, "Región de Murcia", "MC"), _defineProperty(_ES, "Málaga", "MA"), _defineProperty(_ES, "Nafarroa*", "NA"), _defineProperty(_ES, "Nafarroako Foru Komunitatea*", "NC"), _defineProperty(_ES, "Ourense", "OR"), _defineProperty(_ES, "Palencia", "P"), _defineProperty(_ES, "Pontevedra", "PO"), _defineProperty(_ES, "Salamanca", "SA"), _defineProperty(_ES, "Santa Cruz de Tenerife", "TF"), _defineProperty(_ES, "Segovia", "SG"), _defineProperty(_ES, "Sevilla", "SE"), _defineProperty(_ES, "Soria", "SO"), _defineProperty(_ES, "Tarragona", "T"), _defineProperty(_ES, "Teruel", "TE"), _defineProperty(_ES, "Toledo", "TO"), _defineProperty(_ES, "Valencia", "V"), _defineProperty(_ES, "Comunidad Valenciana", "V"), _defineProperty(_ES, "Valladolid", "VA"), _defineProperty(_ES, "Zamora", "ZA"), _defineProperty(_ES, "Zargoza", "Z"), _defineProperty(_ES, "Ávila", "AV"), _ES),
      'IE': {
        "County Cavan": "CN",
        "County Clare": "CE",
        "County Westmeath": "WH",
        "County Longford": "LD",
        "County Munster": "M",
        "County Meath": "MH",
        "County Dublin": "D",
        "County Carlow": "CW",
        "County Kerry": "KY",
        "County Kilkenny": "KK",
        "County Kildare": "KE",
        "County Wicklow": "WW",
        "County Connaught": "C",
        "County Cork": "CO",
        "County Donegal": "DL",
        "County Galway": "G",
        "County Leinster": "L",
        "County Laois": "LS",
        "County Leitrim": "LM",
        "County Limerick": "LK",
        "County Wexford": "WX",
        "County Louth": "LH",
        "County Mayo": "MO",
        "County Monaghan": "MN",
        "County Offaly": "OY",
        "County Waterford": "WD",
        "County Roscommon": "RN",
        "County Sligo": "SO",
        "County Tipperary": "TA",
        "County Ulster": "U"
      }
    };
    return standard_form_mapping;
  }
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
    stateMappings: international_state_mappings('standardForm'),
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
// CONCATENATED MODULE: ./src/email_form_config/block_billing_checkout.js
/* harmony default export */ var block_billing_checkout = ({
  layoutSelectors: ["#email"],
  inputIdentifier: "#email",
  label: "block billing checkout (email)"
});
// CONCATENATED MODULE: ./src/phone_form_config/block_billing_checkout.js
/* harmony default export */ var phone_form_config_block_billing_checkout = ({
  layoutSelectors: ["#billing-phone"],
  inputIdentifier: "#billing-phone",
  countryIdentifier: "#components-form-token-input-0",
  label: "block billing checkout (phone)"
});
// CONCATENATED MODULE: ./src/phone_form_config/block_shipping_checkout.js
/* harmony default export */ var block_shipping_checkout = ({
  layoutSelectors: ["#shipping-phone"],
  inputIdentifier: "#shipping-phone",
  countryIdentifier: "#components-form-token-input-0",
  label: "block shipping checkout (phone)"
});
// CONCATENATED MODULE: ./src/email_form_config/billing_checkout.js
/* harmony default export */ var billing_checkout = ({
  layoutSelectors: ["#billing_email"],
  inputIdentifier: "#billing_email",
  label: "billing checkout (email)"
});
// CONCATENATED MODULE: ./src/phone_form_config/billing_checkout.js
/* harmony default export */ var phone_form_config_billing_checkout = ({
  layoutSelectors: ["#billing_phone"],
  inputIdentifier: "#billing_phone",
  countryIdentifier: "#billing_country",
  label: "billing checkout (phone)"
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
    stateMappings: international_state_mappings('standardForm'),
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
    countryValue: ["New Zealand", "NZ"],
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
    countryValue: ["Australia", "AU"],
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
      'Czech Republic': 'cz',
      'Denmark': 'dk',
      'France': 'fr',
      'Germany': 'de',
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
    stateMappings: international_state_mappings('blockForm'),
    optionalElements: {
      'be': ['address_line_2', 'state_territory'],
      'ca': ['address_line_2'],
      'cz': ['address_line_2', 'state_territory'],
      'de': ['address_line_2', 'state_territory'],
      'fr': ['address_line_2'],
      'dk': ['address_line_2', 'state_territory'],
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
    countryValue: ["New Zealand", "NZ"],
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
    countryValue: ["Australia", "AU"],
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
      'Czech Republic': 'cz',
      'Denmark': 'dk',
      'France': 'fr',
      'Germany': 'de',
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
    stateMappings: international_state_mappings('blockForm'),
    optionalElements: {
      'be': ['address_line_2', 'state_territory'],
      'ca': ['address_line_2'],
      'cz': ['address_line_2', 'state_territory'],
      'de': ['address_line_2', 'state_territory'],
      'fr': ['address_line_2'],
      'dk': ['address_line_2', 'state_territory'],
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FindBlockCheckoutIds = /*#__PURE__*/function () {
  function FindBlockCheckoutIds() {
    _classCallCheck(this, FindBlockCheckoutIds);
  }

  _createClass(FindBlockCheckoutIds, [{
    key: "findElements",
    value: function findElements(formConfigurations) {
      var shippingCountry = this._getElementId('shipping-country') || "#shipping-country";
      var shippingState = this._getElementId('shipping-state') || "#shipping-state";
      var billingCountry = this._getElementId('billing-country') || "#billing-country";
      var billingState = this._getElementId('billing-state') || "#billing-state"; // Set the shipping and billing ids for the elements which are known to change on the block checkout.

      formConfigurations.forEach(function (configuration) {
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
        } else if (configuration.label == "block billing checkout (phone)") {
          configuration.countryIdentifier = billingCountry;
        } else if (configuration.label == "block shipping checkout (phone)") {
          configuration.countryIdentifier = shippingCountry;
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
  }, {
    key: "loadEmailConfigurations",
    value: function loadEmailConfigurations() {
      var emailFormConfigurations = [billing_checkout, block_billing_checkout];
      return emailFormConfigurations;
    }
  }, {
    key: "loadPhoneConfigurations",
    value: function loadPhoneConfigurations() {
      var phoneFormConfigurations = [phone_form_config_billing_checkout, phone_form_config_block_billing_checkout, block_shipping_checkout]; // The block checkout input fields have different id's depending on:
      // - country selected
      // - on form create/destroy

      this.FindBlockCheckoutIds.findElements(phoneFormConfigurations);
      return phoneFormConfigurations;
    }
  }]);

  return ConfigManager;
}();


// EXTERNAL MODULE: ./node_modules/@addressfinder/addressfinder-webpage-tools/lib/addressfinder-webpage-tools.js
var addressfinder_webpage_tools = __webpack_require__(0);

// CONCATENATED MODULE: ./src/woocommerce_plugin.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { woocommerce_plugin_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function woocommerce_plugin_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function woocommerce_plugin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function woocommerce_plugin_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function woocommerce_plugin_createClass(Constructor, protoProps, staticProps) { if (protoProps) woocommerce_plugin_defineProperties(Constructor.prototype, protoProps); if (staticProps) woocommerce_plugin_defineProperties(Constructor, staticProps); return Constructor; }




(function (d, w) {
  var WooCommercePlugin = /*#__PURE__*/function () {
    function WooCommercePlugin() {
      woocommerce_plugin_classCallCheck(this, WooCommercePlugin);

      this.version = "1.7.9"; // Manages the mapping of the form configurations to the DOM.

      this.PageManager = null; // Manages the email mapping of the form configurations to the DOM.

      this.EmailPageManager = null; // Manages the phone mapping of the form configurations to the DOM.

      this.PhonePageManager = null; // Manages the form configurations, and creates any dynamic forms

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

        if (this.EmailPageManager) {
          this.EmailPageManager.reload(this.ConfigManager.loadEmailConfigurations());
        }

        if (this.PhonePageManager) {
          // notify country has changed:
          this.PhonePageManager.reload(this.ConfigManager.loadPhoneConfigurations());
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
        var parsedWidgetOptions = this._safeParseJSONObject(w.AddressFinderConfig.widget_options) || {};
        var parsedNzWidgetOptions = this._safeParseJSONObject(w.AddressFinderConfig.nz_widget_options) || parsedWidgetOptions;
        var parsedAuWidgetOptions = this._safeParseJSONObject(w.AddressFinderConfig.au_widget_options) || parsedWidgetOptions;
        var parsedEvWidgetOptions = w.AddressFinderConfig.email || {};
        var parsedPvWidgetOptions = w.AddressFinderConfig.phone || {};
        var clientVersion = {
          ca: "WooCommerce/".concat(this.version)
        };
        var widgetConfig = {
          nzKey: w.AddressFinderConfig.key_nz || w.AddressFinderConfig.key || w.AddressFinderConfig.key_au,
          auKey: w.AddressFinderConfig.key_au || w.AddressFinderConfig.key || w.AddressFinderConfig.key_nz,
          nzWidgetOptions: _objectSpread(_objectSpread({}, parsedNzWidgetOptions), clientVersion),
          auWidgetOptions: _objectSpread(_objectSpread({}, parsedAuWidgetOptions), clientVersion),
          intWidgetOptions: _objectSpread(_objectSpread({}, parsedWidgetOptions), clientVersion),
          evWidgetOptions: _objectSpread(_objectSpread({}, parsedEvWidgetOptions), clientVersion),
          pvWidgetOptions: _objectSpread(_objectSpread({}, parsedPvWidgetOptions), clientVersion),
          defaultCountry: w.AddressFinderConfig.default_country || 'nz',
          debug: w.AddressFinderConfig.debug || false
        };
        this.ConfigManager = new config_manager_ConfigManager(); // Watches for any mutations to the DOM, so we can reload our configurations when something changes.

        new addressfinder_webpage_tools["MutationManager"]({
          widgetConfig: widgetConfig,
          mutationEventHandler: this.mutationEventHandler.bind(this),
          ignoredClass: "af_list"
        });

        if (window.AddressFinderConfig.address_widget_enabled) {
          this._initAddressWidget(widgetConfig);
        }

        if (window.AddressFinderConfig.email_widget_enabled) {
          widgetConfig.evWidgetOptions.rules = this._safeParseJSONObject(w.AddressFinderConfig.email.rules);

          this._initEmailWidget(widgetConfig);
        }

        if (window.AddressFinderConfig.phone_widget_enabled) {
          widgetConfig.pvWidgetOptions.rules = this._safeParseJSONObject(w.AddressFinderConfig.phone.rules); // need to map some country names found in the HTML

          widgetConfig.pvWidgetOptions.countryMappings = {
            "United Kingdom (UK)": "GB",
            "United States (US)": "US"
          };

          this._initPhoneWidget(widgetConfig);
        }
      }
    }, {
      key: "_initAddressWidget",
      value: function _initAddressWidget(widgetConfig) {
        this.PageManager = new addressfinder_webpage_tools["PageManager"]({
          addressFormConfigurations: this.ConfigManager.load(),
          widgetConfig: widgetConfig,
          // When an address is selected dispatch this event on all the updated form fields. This tells the store the fields have been changed.
          formFieldChangeEventToDispatch: 'change',
          // An event listener with this event type is attached to country element. When the country changes the active country for the widget is set.
          countryChangeEventToListenFor: 'blur'
        });

        this._setVersionNumbers();
      }
    }, {
      key: "_initEmailWidget",
      value: function _initEmailWidget(widgetConfig) {
        this.EmailPageManager = new addressfinder_webpage_tools["EmailPageManager"]({
          formConfigurations: this.ConfigManager.loadEmailConfigurations(),
          widgetConfig: widgetConfig
        });
      }
    }, {
      key: "_initPhoneWidget",
      value: function _initPhoneWidget(widgetConfig) {
        this.PhonePageManager = new addressfinder_webpage_tools["PhonePageManager"]({
          formConfigurations: this.ConfigManager.loadPhoneConfigurations(),
          widgetConfig: widgetConfig,
          // An event listener with this event type is attached to country element. When the country changes the default country code for the widget is set.
          countryChangeEventToListenFor: 'blur'
        });
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

  function loadAddressfinderScript(script, callback) {
    var s = document.createElement('script');
    s.src = script;
    s.async = 1;
    s.onload = callback;
    document.body.appendChild(s);
  } // Nested callbacks to load our scripts asynchronously and sequentially.


  loadAddressfinderScript('https://api.addressfinder.io/assets/v3/widget.js', function () {
    loadAddressfinderScript('https://api.addressfinder.io/assets/email/v2/widget.js', function () {
      loadAddressfinderScript('https://api.addressfinder.io/assets/phone/v2/widget.js', function () {
        new WooCommercePlugin();
      });
    });
  });
})(document, window);

/***/ })
/******/ ]);
//# sourceMappingURL=addressfinder.js.map