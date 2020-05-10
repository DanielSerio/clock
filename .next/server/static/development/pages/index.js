module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/components/Menu/Menu.css":
/*!**************************************!*\
  !*** ./lib/components/Menu/Menu.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/components/Menu/Menu.js":
/*!*************************************!*\
  !*** ./lib/components/Menu/Menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Layer_Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/Layer/Layer */ "./lib/components/containers/Layer/Layer.js");
/* harmony import */ var _controls_ColorSlider_ColorSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controls/ColorSlider/ColorSlider */ "./lib/components/controls/ColorSlider/ColorSlider.js");
/* harmony import */ var _Menu_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu.css */ "./lib/components/Menu/Menu.css");
/* harmony import */ var _Menu_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Menu_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Swatch_Swatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Swatch/Swatch */ "./lib/components/Swatch/Swatch.js");
/* harmony import */ var _controls_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controls/IconButton/IconButton */ "./lib/components/controls/IconButton/IconButton.js");
var _jsxFileName = "C:\\Users\\dseri\\Desktop\\Developer\\clock\\lib\\components\\Menu\\Menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Menu({
  red,
  green,
  blue,
  alpha,
  setColor,
  closeMenu
}) {
  const {
    0: rgba,
    1: setRgba
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    r: red,
    g: green,
    b: blue,
    a: alpha
  });

  const formatColor = () => `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleSave = () => {
    setColor(rgba);
    closeMenu();
  };

  const handleChange = (value, name) => {
    setRgba(_objectSpread({}, rgba, {
      [name]: value
    }));
  };

  return __jsx(_containers_Layer_Layer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "color-menu",
    zIndex: 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: "color-menu-form",
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_controls_ColorSlider_ColorSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Red",
    value: red,
    onChange: v => handleChange(v, 'r'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx(_controls_ColorSlider_ColorSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Green",
    value: green,
    onChange: v => handleChange(v, 'g'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx(_controls_ColorSlider_ColorSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Blue",
    value: blue,
    onChange: v => handleChange(v, 'b'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx(_controls_ColorSlider_ColorSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Alpha",
    value: alpha,
    onChange: v => handleChange(v, 'a'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("footer", {
    className: "color-menu-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_Swatch_Swatch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: formatColor(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx(_controls_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "save",
    color: formatColor(),
    onClick: handleSave,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./lib/components/Swatch/Swatch.css":
/*!******************************************!*\
  !*** ./lib/components/Swatch/Swatch.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/components/Swatch/Swatch.js":
/*!*****************************************!*\
  !*** ./lib/components/Swatch/Swatch.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Swatch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Swatch_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Swatch.css */ "./lib/components/Swatch/Swatch.css");
/* harmony import */ var _Swatch_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Swatch_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\dseri\\Desktop\\Developer\\clock\\lib\\components\\Swatch\\Swatch.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Swatch({
  color
}) {
  return __jsx("div", {
    className: "swatch",
    style: {
      color
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, "Color");
}

/***/ }),

/***/ "./lib/components/containers/Layer/Layer.css":
/*!***************************************************!*\
  !*** ./lib/components/containers/Layer/Layer.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/components/containers/Layer/Layer.js":
/*!**************************************************!*\
  !*** ./lib/components/containers/Layer/Layer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layer.css */ "./lib/components/containers/Layer/Layer.css");
/* harmony import */ var _Layer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Layer_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\dseri\\Desktop\\Developer\\clock\\lib\\components\\containers\\Layer\\Layer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Layer({
  isMain,
  className,
  zIndex,
  color,
  children
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isMain && __jsx("main", {
    className: `layer ${className ? className : ''}`,
    style: {
      zIndex: zIndex,
      color
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "layer-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, children)), !isMain && __jsx("section", {
    className: `layer ${className ? className : ''}`,
    style: {
      zIndex: zIndex,
      color
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "layer-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, children)));
}

/***/ }),

/***/ "./lib/components/containers/Section/Section.js":
/*!******************************************************!*\
  !*** ./lib/components/containers/Section/Section.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\dseri\\Desktop\\Developer\\clock\\lib\\components\\containers\\Section\\Section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Section({
  className,
  children
}) {
  return __jsx("section", {
    className: `section ${className ? className : ''}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }, children);
}

/***/ }),

/***/ "./lib/components/controls/ColorSlider/ColorSlider.css":
/*!*************************************************************!*\
  !*** ./lib/components/controls/ColorSlider/ColorSlider.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/components/controls/ColorSlider/ColorSlider.js":
/*!************************************************************!*\
  !*** ./lib/components/controls/ColorSlider/ColorSlider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorSlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-slider */ "rc-slider");
/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ColorSlider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorSlider.css */ "./lib/components/controls/ColorSlider/ColorSlider.css");
/* harmony import */ var _ColorSlider_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ColorSlider_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\dseri\\Desktop\\Developer\\clock\\lib\\components\\controls\\ColorSlider\\ColorSlider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ColorSlider({
  name,
  value,
  onChange
}) {
  const colors = {
    'red': 'linear-gradient(90deg, black, red)',
    'green': 'linear-gradient(90deg, black, green)',
    'blue': 'linear-gradient(90deg, black, blue)',
    'alpha': 'linear-gradient(90deg, black, white)'
  };
  const key = name.toLowerCase();
  return __jsx("label", {
    className: "label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, name), __jsx(rc_slider__WEBPACK_IMPORTED_MODULE_1___default.a, {
    min: 0,
    defaultValue: value,
    max: name.toLowerCase() === 'alpha' ? 1 : 255,
    railStyle: {
      backgroundImage: colors[key]
    },
    trackStyle: {
      backgroundColor: 'transparent'
    },
    handleStyle: {
      borderColor: key,
      backgroundColor: 'black',
      boxShadow: '0 0 3px black'
    },
    step: 0.1,
    onAfterChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./lib/components/controls/IconButton/IconButton.css":
/*!***********************************************************!*\
  !*** ./lib/components/controls/IconButton/IconButton.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/components/controls/IconButton/IconButton.js":
/*!**********************************************************!*\
  !*** ./lib/components/controls/IconButton/IconButton.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IconButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconButton.css */ "./lib/components/controls/IconButton/IconButton.css");
/* harmony import */ var _IconButton_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_IconButton_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\dseri\\Desktop\\Developer\\clock\\lib\\components\\controls\\IconButton\\IconButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function IconButton({
  name,
  color,
  onClick
}) {
  return __jsx("svg", {
    className: "icon-btn",
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, name === 'palette' && __jsx("path", {
    fill: color,
    d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), name === 'save' && __jsx("path", {
    fill: color,
    d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M0 0h24v24H0z",
    fill: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./lib/components/sections/DateSection/DateSection.css":
/*!*************************************************************!*\
  !*** ./lib/components/sections/DateSection/DateSection.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/components/sections/DateSection/DateSection.js":
/*!************************************************************!*\
  !*** ./lib/components/sections/DateSection/DateSection.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Section_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/Section/Section */ "./lib/components/containers/Section/Section.js");
/* harmony import */ var _DateSection_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateSection.css */ "./lib/components/sections/DateSection/DateSection.css");
/* harmony import */ var _DateSection_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DateSection_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\dseri\\Desktop\\Developer\\clock\\lib\\components\\sections\\DateSection\\DateSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function DateSection({
  datetime
}) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return __jsx(_containers_Section_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, `${days[datetime.getDay()]} ${months[datetime.getMonth()]} ${datetime.getDate()}, ${datetime.getFullYear()}`);
}

/***/ }),

/***/ "./lib/components/sections/TimeSection/TimeSection.css":
/*!*************************************************************!*\
  !*** ./lib/components/sections/TimeSection/TimeSection.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./lib/components/sections/TimeSection/TimeSection.js":
/*!************************************************************!*\
  !*** ./lib/components/sections/TimeSection/TimeSection.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Section_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/Section/Section */ "./lib/components/containers/Section/Section.js");
/* harmony import */ var _TimeSection_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeSection.css */ "./lib/components/sections/TimeSection/TimeSection.css");
/* harmony import */ var _TimeSection_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TimeSection_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\dseri\\Desktop\\Developer\\clock\\lib\\components\\sections\\TimeSection\\TimeSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function TimeSection({
  datetime
}) {
  function ampm() {
    return datetime.getHours() > 11 ? 'PM' : 'AM';
  }

  function hour() {
    const h = datetime.getHours();
    return h > 12 ? h % 12 : h;
  }

  function min() {
    return `${datetime.getMinutes()}`.padStart(2, '0');
  }

  function sec() {
    return `${datetime.getSeconds()}`.padStart(2, '0');
  }

  return __jsx(_containers_Section_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "time",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, hour(), ":", min()), __jsx("div", {
    className: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "sec",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, sec()), __jsx("div", {
    className: "ampm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, ampm())));
}

/***/ }),

/***/ "./node_modules/rc-slider/assets/index.css":
/*!*************************************************!*\
  !*** ./node_modules/rc-slider/assets/index.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_components_containers_Layer_Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/components/containers/Layer/Layer */ "./lib/components/containers/Layer/Layer.js");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/components/Menu/Menu */ "./lib/components/Menu/Menu.js");
/* harmony import */ var _lib_components_controls_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/components/controls/IconButton/IconButton */ "./lib/components/controls/IconButton/IconButton.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_components_sections_TimeSection_TimeSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/components/sections/TimeSection/TimeSection */ "./lib/components/sections/TimeSection/TimeSection.js");
/* harmony import */ var _lib_components_sections_DateSection_DateSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/components/sections/DateSection/DateSection */ "./lib/components/sections/DateSection/DateSection.js");
var _jsxFileName = "C:\\Users\\dseri\\Desktop\\Developer\\clock\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function index() {
  const {
    0: rgba,
    1: setRgba
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    r: 255,
    g: 255,
    b: 255,
    a: 0.8
  });
  const {
    0: menuOpen,
    1: setMenuOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: datetime,
    1: setDatetime
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setInterval(() => setDatetime(new Date()), 1000);
  }, []);

  const formatColor = () => `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;

  const setColor = rgba => setRgba(rgba);

  const openMenu = () => setMenuOpen(true);

  const closeMenu = () => setMenuOpen(false);

  return __jsx(_lib_components_containers_Layer_Layer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isMain: true,
    className: "clock",
    zIndex: 10,
    color: formatColor(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "/static/font.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })), __jsx("header", {
    className: "clock-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(_lib_components_sections_DateSection_DateSection__WEBPACK_IMPORTED_MODULE_7__["default"], {
    datetime: datetime,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, menuOpen && __jsx(_lib_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setColor: setColor,
    red: rgba.r,
    green: rgba.g,
    blue: rgba.b,
    alpha: rgba.a,
    closeMenu: closeMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx(_lib_components_sections_TimeSection_TimeSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
    datetime: datetime,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), __jsx("footer", {
    className: "clock-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(_lib_components_controls_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "palette",
    color: formatColor(),
    onClick: openMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dseri\Desktop\Developer\clock\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "rc-slider":
/*!****************************!*\
  !*** external "rc-slider" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-slider");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map