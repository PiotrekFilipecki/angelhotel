/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/article/[slug]",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _buttons_LanguageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/LanguageContext */ \"./components/buttons/LanguageContext.js\");\n/* harmony import */ var _buttons_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons/LanguageSwitcher */ \"./components/buttons/LanguageSwitcher.js\");\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/piotrekfilipecki/Desktop/angelhotelapp/frontend/components/nav.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n // import logo from \"../public/logos/stradomhouselogo.png\"\n\n\n\n\n\nvar Nav = function Nav(_ref) {\n  _s();\n\n  var categories = _ref.categories,\n      pages = _ref.pages;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"en\"),\n      language = _useState[0],\n      setLanguage = _useState[1];\n\n  var provider = {\n    language: language,\n    setLanguage: setLanguage\n  };\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      isActive = _useState2[0],\n      setActive = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isOpen = _useState3[0],\n      setOpen = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      navDisplayed = _useState4[0],\n      setDisplay = _useState4[1];\n\n  var handleToggle = function handleToggle() {\n    setActive(!isActive);\n    setTimeout(setDisplay(navDisplayed), 1000);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons_LanguageContext__WEBPACK_IMPORTED_MODULE_4__.default.Provider, {\n    value: provider,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: isActive ? \"sidenav\" : \"sidenav opened\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"sidenav-inner\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"\",\n            children: categories.map(function (category) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  href: \"/category/\".concat(category.attributes.slug),\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"uk-link-reset\",\n                    children: category.attributes.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 33,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 32,\n                  columnNumber: 19\n                }, _this)\n              }, category.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"button-wrapper\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(hamburger_react__WEBPACK_IMPORTED_MODULE_6__.Squash, {\n          className: \"hamburger\",\n          onToggle: function onToggle(toggled) {\n            if (toggled) {\n              handleToggle();\n            } else {\n              handleToggle();\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n          width: 220,\n          height: 66,\n          style: {\n            maxWidth: '100%',\n            height: 'auto'\n          },\n          src: \"/logos/stradomhouselogo.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"right-nav\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          className: \"reserve-button\",\n          href: \"/\",\n          children: \"reserve\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 15\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Nav, \"HB8/kprZVKNeaGk5FV0feY5OyUg=\");\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanM/MzFiMiJdLCJuYW1lcyI6WyJOYXYiLCJjYXRlZ29yaWVzIiwicGFnZXMiLCJ1c2VTdGF0ZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJwcm92aWRlciIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwiaXNPcGVuIiwic2V0T3BlbiIsIm5hdkRpc3BsYXllZCIsInNldERpc3BsYXkiLCJoYW5kbGVUb2dnbGUiLCJzZXRUaW1lb3V0IiwibWFwIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwic2x1ZyIsIm5hbWUiLCJpZCIsInRvZ2dsZWQiLCJtYXhXaWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBMkI7QUFBQTs7QUFBQSxNQUF4QkMsVUFBd0IsUUFBeEJBLFVBQXdCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUNMQywrQ0FBUSxDQUFDLElBQUQsQ0FESDtBQUFBLE1BQzlCQyxRQUQ4QjtBQUFBLE1BQ3BCQyxXQURvQjs7QUFFckMsTUFBTUMsUUFBUSxHQUFHO0FBQUVGLFlBQVEsRUFBUkEsUUFBRjtBQUFZQyxlQUFXLEVBQVhBO0FBQVosR0FBakI7O0FBRnFDLG1CQUdQRiwrQ0FBUSxDQUFDLElBQUQsQ0FIRDtBQUFBLE1BRzlCSSxRQUg4QjtBQUFBLE1BR3BCQyxTQUhvQjs7QUFBQSxtQkFJWEwsK0NBQVEsQ0FBQyxLQUFELENBSkc7QUFBQSxNQUk5Qk0sTUFKOEI7QUFBQSxNQUl0QkMsT0FKc0I7O0FBQUEsbUJBS0ZQLCtDQUFRLENBQUMsS0FBRCxDQUxOO0FBQUEsTUFLOUJRLFlBTDhCO0FBQUEsTUFLaEJDLFVBTGdCOztBQU9yQyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCTCxhQUFTLENBQUMsQ0FBQ0QsUUFBRixDQUFUO0FBQ0FPLGNBQVUsQ0FDUkYsVUFBVSxDQUFDRCxZQUFELENBREYsRUFHVCxJQUhTLENBQVY7QUFJRCxHQU5EOztBQU9BLHNCQUNFLDhEQUFDLHNFQUFEO0FBQTBCLFNBQUssRUFBRUwsUUFBakM7QUFBQSwyQkFDQTtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUMsUUFBUSxHQUFHLFNBQUgsR0FBZSxnQkFBdkM7QUFBQSwrQkFDQTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGlDQUNJO0FBQUkscUJBQVMsRUFBQyxFQUFkO0FBQUEsc0JBQ0dOLFVBQVUsQ0FBQ2MsR0FBWCxDQUFlLFVBQUNDLFFBQUQsRUFBYztBQUM1QixrQ0FDRTtBQUFBLHVDQUNFLDhEQUFDLGtEQUFEO0FBQU0sc0JBQUksc0JBQWVBLFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQkMsSUFBbkMsQ0FBVjtBQUFBLHlDQUNFO0FBQUcsNkJBQVMsRUFBQyxlQUFiO0FBQUEsOEJBQThCRixRQUFRLENBQUNDLFVBQVQsQ0FBb0JFO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsaUJBQVNILFFBQVEsQ0FBQ0ksRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQU9ELGFBUkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWlCRTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSwrQkFDQSw4REFBQyxtREFBRDtBQUFXLG1CQUFTLEVBQUMsV0FBckI7QUFBaUMsa0JBQVEsRUFBRSxrQkFBQUMsT0FBTyxFQUFJO0FBQzFELGdCQUFJQSxPQUFKLEVBQWE7QUFDVlIsMEJBQVk7QUFDZCxhQUZELE1BRU87QUFDTEEsMEJBQVk7QUFDYjtBQUNGO0FBTks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQkYsZUE2QkUsOERBQUMsa0RBQUQ7QUFBTyxZQUFJLEVBQUMsR0FBWjtBQUFBLCtCQUNVLDhEQUFDLG1EQUFEO0FBQ0EsZUFBSyxFQUFFLEdBRFA7QUFFQSxnQkFBTSxFQUFFLEVBRlI7QUFJVixlQUFLLEVBQUU7QUFDTFMsb0JBQVEsRUFBRSxNQURMO0FBRUxDLGtCQUFNLEVBQUU7QUFGSCxXQUpHO0FBU1YsYUFBRyxFQUFDO0FBVE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3QkYsZUEwQ1U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDRSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBTSxtQkFBUyxFQUFDLGdCQUFoQjtBQUFpQyxjQUFJLEVBQUMsR0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBMUNWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVERCxDQXJFRDs7R0FBTXZCLEc7O0tBQUFBLEc7QUF1RU4sK0RBQWVBLEdBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuLy8gaW1wb3J0IGxvZ28gZnJvbSBcIi4uL3B1YmxpYy9sb2dvcy9zdHJhZG9taG91c2Vsb2dvLnBuZ1wiXG5pbXBvcnQgTGFuZ3VhZ2VDb250ZXh0IGZyb20gXCIuL2J1dHRvbnMvTGFuZ3VhZ2VDb250ZXh0XCI7XG5pbXBvcnQgTGFuZ3VhZ2VTd2l0Y2hlciBmcm9tIFwiLi9idXR0b25zL0xhbmd1YWdlU3dpdGNoZXJcIjtcbmltcG9ydCB7IFNxdWFzaCBhcyBIYW1idXJnZXIgfSBmcm9tICdoYW1idXJnZXItcmVhY3QnXG5cbmNvbnN0IE5hdiA9ICh7IGNhdGVnb3JpZXMsIHBhZ2VzIH0pID0+IHtcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShcImVuXCIpO1xuICBjb25zdCBwcm92aWRlciA9IHsgbGFuZ3VhZ2UsIHNldExhbmd1YWdlIH07XG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbmF2RGlzcGxheWVkLCBzZXREaXNwbGF5XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmUoIWlzQWN0aXZlKTtcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgc2V0RGlzcGxheShuYXZEaXNwbGF5ZWQpXG5cbiAgICAsMTAwMClcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8TGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm92aWRlcn0+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IFwic2lkZW5hdlwiIDogXCJzaWRlbmF2IG9wZW5lZFwifT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZW5hdi1pbm5lclwiPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtjYXRlZ29yeS5pZH0+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1ay1saW5rLXJlc2V0XCI+e2NhdGVnb3J5LmF0dHJpYnV0ZXMubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiPlxuICAgICAgPEhhbWJ1cmdlciBjbGFzc05hbWU9XCJoYW1idXJnZXJcIiBvblRvZ2dsZT17dG9nZ2xlZCA9PiB7XG4gIGlmICh0b2dnbGVkKSB7XG4gICAgIGhhbmRsZVRvZ2dsZSgpXG4gIH0gZWxzZSB7XG4gICAgaGFuZGxlVG9nZ2xlKClcbiAgfVxufX0gLz5cbiAgICAgIFxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPExpbmsgIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgd2lkdGg9ezIyMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezY2fVxuXG4gICAgICBzdHlsZT17e1xuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgXG4gICAgICB9fVxuICAgICAgc3JjPVwiL2xvZ29zL3N0cmFkb21ob3VzZWxvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1uYXZcIj5cbiAgICAgICAgICAgICAgICA8TGFuZ3VhZ2VTd2l0Y2hlciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInJlc2VydmUtYnV0dG9uXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgIHJlc2VydmVcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDwvTGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyPlxuXG4gICAgXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav.js\n");

/***/ })

});