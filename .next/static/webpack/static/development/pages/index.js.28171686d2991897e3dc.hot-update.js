webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./lib/components/sections/DateSection/DateSection.js":
/*!************************************************************!*\
  !*** ./lib/components/sections/DateSection/DateSection.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Section_Section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/Section/Section */ "./lib/components/containers/Section/Section.js");
/* harmony import */ var _DateSection_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateSection.css */ "./lib/components/sections/DateSection/DateSection.css");
/* harmony import */ var _DateSection_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DateSection_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\dseri\\Desktop\\Developer\\clock\\lib\\components\\sections\\DateSection\\DateSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function DateSection(_ref) {
  var datetime = _ref.datetime;
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return __jsx(_containers_Section_Section__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, "".concat(days[datetime.getDay()], " ").concat(months[datetime.getMonth()], " ").concat(datetime.getDate(), ", ").concat(datetime.getFullYear()));
}

/***/ })

})
//# sourceMappingURL=index.js.28171686d2991897e3dc.hot-update.js.map