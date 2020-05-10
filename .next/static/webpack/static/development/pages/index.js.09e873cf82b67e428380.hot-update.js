webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./lib/components/containers/Section/Section.js":
/*!******************************************************!*\
  !*** ./lib/components/containers/Section/Section.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\dseri\\Desktop\\Developer\\clock\\lib\\components\\containers\\Section\\Section.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Section(_ref) {
  var className = _ref.className;
  return __jsx("section", {
    className: "section ".concat(className ? className : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }, children);
}

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Section_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/Section/Section */ "./lib/components/containers/Section/Section.js");
var _jsxFileName = "C:\\Users\\dseri\\Desktop\\Developer\\clock\\lib\\components\\sections\\TimeSection\\TimeSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function TimeSection(_ref) {
  var datetime = _ref.datetime;

  function ampm() {
    return datetime.getHours() > 11 ? 'PM' : 'AM';
  }

  function hour() {
    var h = datetime.getHours();
    return h > 12 ? h % 12 : h;
  }

  function min() {
    return "".concat(datetime.getMinutes()).padStart(2, '0');
  }

  function sec() {
    return "".concat(datetime.getSeconds()).padStart(2, '0');
  }

  return __jsx(_containers_Section_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "time",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, hour(), ":", min()), __jsx("div", {
    className: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "sec",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, sec()), __jsx("div", {
    className: "ampm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, ampm())));
}

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_components_containers_Layer_Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/components/containers/Layer/Layer */ "./lib/components/containers/Layer/Layer.js");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/components/Menu/Menu */ "./lib/components/Menu/Menu.js");
/* harmony import */ var _lib_components_controls_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/components/controls/IconButton/IconButton */ "./lib/components/controls/IconButton/IconButton.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_components_sections_TimeSection_TimeSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/components/sections/TimeSection/TimeSection */ "./lib/components/sections/TimeSection/TimeSection.js");
var _jsxFileName = "C:\\Users\\dseri\\Desktop\\Developer\\clock\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    r: 255,
    g: 255,
    b: 255,
    a: 0.8
  }),
      rgba = _useState[0],
      setRgba = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      menuOpen = _useState2[0],
      setMenuOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(new Date()),
      datetime = _useState3[0],
      setDatetime = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setInterval(function () {
      return setDatetime(new Date());
    }, 1000);
  }, []);

  var formatColor = function formatColor() {
    return "rgba(".concat(rgba.r, ", ").concat(rgba.g, ", ").concat(rgba.b, ", ").concat(rgba.a, ")");
  };

  var setColor = function setColor(rgba) {
    return setRgba(rgba);
  };

  var openMenu = function openMenu() {
    return setMenuOpen(true);
  };

  var closeMenu = function closeMenu() {
    return setMenuOpen(false);
  };

  return __jsx(_lib_components_containers_Layer_Layer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isMain: true,
    className: "clock",
    zIndex: 10,
    color: formatColor(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "/static/font.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx("header", {
    className: "clock-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx(_lib_components_sections_TimeSection_TimeSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
    datetime: datetime,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })), __jsx("footer", {
    className: "clock-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(_lib_components_controls_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "palette",
    color: formatColor(),
    onClick: openMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.09e873cf82b67e428380.hot-update.js.map