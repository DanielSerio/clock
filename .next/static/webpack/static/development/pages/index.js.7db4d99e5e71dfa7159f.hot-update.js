webpackHotUpdate("static\\development\\pages\\index.js",{

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
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "/static/font.css",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx("header", {
    className: "clock-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 34,
      columnNumber: 11
    }
  })), __jsx("footer", {
    className: "clock-footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx(_lib_components_controls_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "palette",
    color: formatColor(),
    onClick: openMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.7db4d99e5e71dfa7159f.hot-update.js.map