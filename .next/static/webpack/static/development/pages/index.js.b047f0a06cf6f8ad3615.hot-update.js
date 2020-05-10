webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./lib/components/Menu/Menu.js":
/*!*************************************!*\
  !*** ./lib/components/Menu/Menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_Layer_Layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/Layer/Layer */ "./lib/components/containers/Layer/Layer.js");
/* harmony import */ var _controls_ColorSlider_ColorSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controls/ColorSlider/ColorSlider */ "./lib/components/controls/ColorSlider/ColorSlider.js");
/* harmony import */ var _Menu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu.css */ "./lib/components/Menu/Menu.css");
/* harmony import */ var _Menu_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Menu_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Swatch_Swatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Swatch/Swatch */ "./lib/components/Swatch/Swatch.js");
/* harmony import */ var _controls_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../controls/IconButton/IconButton */ "./lib/components/controls/IconButton/IconButton.js");

var _jsxFileName = "C:\\Users\\dseri\\Desktop\\Developer\\clock\\lib\\components\\Menu\\Menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function Menu(_ref) {
  var red = _ref.red,
      green = _ref.green,
      blue = _ref.blue,
      alpha = _ref.alpha,
      setColor = _ref.setColor,
      closeMenu = _ref.closeMenu;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    r: red,
    g: green,
    b: blue,
    a: alpha
  }),
      rgba = _useState[0],
      setRgba = _useState[1];

  var formatColor = function formatColor() {
    return "rgba(".concat(rgba.r, ", ").concat(rgba.g, ", ").concat(rgba.b, ", ").concat(rgba.a, ")");
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
  };

  var handleSave = function handleSave() {
    setColor(rgba);
    closeMenu();
  };

  var handleChange = function handleChange(value, name) {
    setRgba(_objectSpread({}, rgba, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value)));
  };

  return __jsx(_containers_Layer_Layer__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  }, __jsx(_controls_ColorSlider_ColorSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Red",
    value: red,
    onChange: function onChange(v) {
      return handleChange(v, 'r');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx(_controls_ColorSlider_ColorSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Green",
    value: green,
    onChange: function onChange(v) {
      return handleChange(v, 'g');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx(_controls_ColorSlider_ColorSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Blue",
    value: blue,
    onChange: function onChange(v) {
      return handleChange(v, 'b');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx(_controls_ColorSlider_ColorSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Alpha",
    value: alpha,
    onChange: function onChange(v) {
      return handleChange(v, 'a');
    },
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
  }, __jsx(_Swatch_Swatch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: formatColor(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx(_controls_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

/***/ })

})
//# sourceMappingURL=index.js.b047f0a06cf6f8ad3615.hot-update.js.map