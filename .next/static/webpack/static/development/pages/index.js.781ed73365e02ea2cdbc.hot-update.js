webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _TimeSection_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeSection.css */ "./lib/components/sections/TimeSection/TimeSection.css");
/* harmony import */ var _TimeSection_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TimeSection_css__WEBPACK_IMPORTED_MODULE_2__);
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

/***/ })

})
//# sourceMappingURL=index.js.781ed73365e02ea2cdbc.hot-update.js.map