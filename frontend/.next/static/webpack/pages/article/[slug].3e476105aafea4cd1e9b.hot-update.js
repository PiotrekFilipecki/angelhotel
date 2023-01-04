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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _buttons_LanguageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/LanguageContext */ \"./components/buttons/LanguageContext.js\");\n/* harmony import */ var _buttons_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons/LanguageSwitcher */ \"./components/buttons/LanguageSwitcher.js\");\n/* harmony import */ var hamburger_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hamburger-react */ \"./node_modules/hamburger-react/dist-esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/piotrekfilipecki/Desktop/angelhotelapp/frontend/components/nav.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n // import logo from \"../public/logos/stradomhouselogo.png\"\n\n\n\n\n\nvar Nav = function Nav(_ref) {\n  _s();\n\n  var categories = _ref.categories,\n      pages = _ref.pages;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"en\"),\n      language = _useState[0],\n      setLanguage = _useState[1];\n\n  var provider = {\n    language: language,\n    setLanguage: setLanguage\n  };\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"false\"),\n      isActive = _useState2[0],\n      setActive = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      isOpen = _useState3[0],\n      setOpen = _useState3[1];\n\n  var handleToggle = function handleToggle() {\n    setActive(!isActive);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons_LanguageContext__WEBPACK_IMPORTED_MODULE_4__.default.Provider, {\n    value: provider,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: isActive ? \"sidenav\" : \"sidenav opened\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"\",\n            children: categories.map(function (category) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                  href: \"/category/\".concat(category.attributes.slug),\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"uk-link-reset\",\n                    children: category.attributes.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 33,\n                    columnNumber: 21\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 32,\n                  columnNumber: 19\n                }, _this)\n              }, category.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"button-wrapper\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(hamburger_react__WEBPACK_IMPORTED_MODULE_6__.Squash, {\n          onToggle: function onToggle(toggled) {\n            if (toggled) {\n              handleToggle();\n            } else {\n              handleToggle();\n            }\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 7\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          onClick: handleToggle,\n          children: \"menu\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 7\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n          width: 220,\n          height: 66,\n          style: {\n            maxWidth: '100%',\n            height: 'auto'\n          },\n          src: \"/logos/stradomhouselogo.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"right-nav\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttons_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n          className: \"reserve-button\",\n          href: \"/\",\n          children: \"reserve\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 15\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Nav, \"jvCZgDQLNS3gcpMfdKpo0fR9EkI=\");\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXYuanM/MzFiMiJdLCJuYW1lcyI6WyJOYXYiLCJjYXRlZ29yaWVzIiwicGFnZXMiLCJ1c2VTdGF0ZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJwcm92aWRlciIsImlzQWN0aXZlIiwic2V0QWN0aXZlIiwiaXNPcGVuIiwic2V0T3BlbiIsImhhbmRsZVRvZ2dsZSIsIm1hcCIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsInNsdWciLCJuYW1lIiwiaWQiLCJ0b2dnbGVkIiwibWF4V2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQTJCO0FBQUE7O0FBQUEsTUFBeEJDLFVBQXdCLFFBQXhCQSxVQUF3QjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDTEMsK0NBQVEsQ0FBQyxJQUFELENBREg7QUFBQSxNQUM5QkMsUUFEOEI7QUFBQSxNQUNwQkMsV0FEb0I7O0FBRXJDLE1BQU1DLFFBQVEsR0FBRztBQUFFRixZQUFRLEVBQVJBLFFBQUY7QUFBWUMsZUFBVyxFQUFYQTtBQUFaLEdBQWpCOztBQUZxQyxtQkFHUEYsK0NBQVEsQ0FBQyxPQUFELENBSEQ7QUFBQSxNQUc5QkksUUFIOEI7QUFBQSxNQUdwQkMsU0FIb0I7O0FBQUEsbUJBSVhMLCtDQUFRLENBQUMsS0FBRCxDQUpHO0FBQUEsTUFJOUJNLE1BSjhCO0FBQUEsTUFJdEJDLE9BSnNCOztBQU1yQyxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCSCxhQUFTLENBQUMsQ0FBQ0QsUUFBRixDQUFUO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRSw4REFBQyxzRUFBRDtBQUEwQixTQUFLLEVBQUVELFFBQWpDO0FBQUEsMkJBQ0E7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVDLFFBQVEsR0FBRyxTQUFILEdBQWUsZ0JBQXZDO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU1FO0FBQUssbUJBQVMsRUFBQyxFQUFmO0FBQUEsaUNBQ0U7QUFBSSxxQkFBUyxFQUFDLEVBQWQ7QUFBQSxzQkFDR04sVUFBVSxDQUFDVyxHQUFYLENBQWUsVUFBQ0MsUUFBRCxFQUFjO0FBQzVCLGtDQUNFO0FBQUEsdUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxzQkFBSSxzQkFBZUEsUUFBUSxDQUFDQyxVQUFULENBQW9CQyxJQUFuQyxDQUFWO0FBQUEseUNBQ0U7QUFBRyw2QkFBUyxFQUFDLGVBQWI7QUFBQSw4QkFBOEJGLFFBQVEsQ0FBQ0MsVUFBVCxDQUFvQkU7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFBU0gsUUFBUSxDQUFDSSxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBT0QsYUFSQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBc0JFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBLGdDQUNBLDhEQUFDLG1EQUFEO0FBQVcsa0JBQVEsRUFBRSxrQkFBQUMsT0FBTyxFQUFJO0FBQ3BDLGdCQUFJQSxPQUFKLEVBQWE7QUFDVlAsMEJBQVk7QUFDZCxhQUZELE1BRU87QUFDTEEsMEJBQVk7QUFDYjtBQUNGO0FBTks7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEQSxlQVFBO0FBQVEsaUJBQU8sRUFBRUEsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGLGVBa0NFLDhEQUFDLGtEQUFEO0FBQU8sWUFBSSxFQUFDLEdBQVo7QUFBQSwrQkFDVSw4REFBQyxtREFBRDtBQUNBLGVBQUssRUFBRSxHQURQO0FBRUEsZ0JBQU0sRUFBRSxFQUZSO0FBSVYsZUFBSyxFQUFFO0FBQ0xRLG9CQUFRLEVBQUUsTUFETDtBQUVMQyxrQkFBTSxFQUFFO0FBRkgsV0FKRztBQVNWLGFBQUcsRUFBQztBQVRNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbENGLGVBK0NVO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0UsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLDhEQUFDLGtEQUFEO0FBQU0sbUJBQVMsRUFBQyxnQkFBaEI7QUFBaUMsY0FBSSxFQUFDLEdBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9DVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0REQsQ0FyRUQ7O0dBQU1wQixHOztLQUFBQSxHO0FBdUVOLCtEQUFlQSxHQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbi8vIGltcG9ydCBsb2dvIGZyb20gXCIuLi9wdWJsaWMvbG9nb3Mvc3RyYWRvbWhvdXNlbG9nby5wbmdcIlxuaW1wb3J0IExhbmd1YWdlQ29udGV4dCBmcm9tIFwiLi9idXR0b25zL0xhbmd1YWdlQ29udGV4dFwiO1xuaW1wb3J0IExhbmd1YWdlU3dpdGNoZXIgZnJvbSBcIi4vYnV0dG9ucy9MYW5ndWFnZVN3aXRjaGVyXCI7XG5pbXBvcnQgeyBTcXVhc2ggYXMgSGFtYnVyZ2VyIH0gZnJvbSAnaGFtYnVyZ2VyLXJlYWN0J1xuXG5jb25zdCBOYXYgPSAoeyBjYXRlZ29yaWVzLCBwYWdlcyB9KSA9PiB7XG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUoXCJlblwiKTtcbiAgY29uc3QgcHJvdmlkZXIgPSB7IGxhbmd1YWdlLCBzZXRMYW5ndWFnZSB9O1xuICBjb25zdCBbaXNBY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZShcImZhbHNlXCIpO1xuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmUoIWlzQWN0aXZlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8TGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwcm92aWRlcn0+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IFwic2lkZW5hdlwiIDogXCJzaWRlbmF2IG9wZW5lZFwifT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cblxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5hdHRyaWJ1dGVzLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVrLWxpbmstcmVzZXRcIj57Y2F0ZWdvcnkuYXR0cmlidXRlcy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi13cmFwcGVyXCI+XG4gICAgICA8SGFtYnVyZ2VyIG9uVG9nZ2xlPXt0b2dnbGVkID0+IHtcbiAgaWYgKHRvZ2dsZWQpIHtcbiAgICAgaGFuZGxlVG9nZ2xlKClcbiAgfSBlbHNlIHtcbiAgICBoYW5kbGVUb2dnbGUoKVxuICB9XG59fSA+PC9IYW1idXJnZXI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0+bWVudTwvYnV0dG9uPlxuICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPExpbmsgIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgd2lkdGg9ezIyMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezY2fVxuXG4gICAgICBzdHlsZT17e1xuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgXG4gICAgICB9fVxuICAgICAgc3JjPVwiL2xvZ29zL3N0cmFkb21ob3VzZWxvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodC1uYXZcIj5cbiAgICAgICAgICAgICAgICA8TGFuZ3VhZ2VTd2l0Y2hlciAvPlxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInJlc2VydmUtYnV0dG9uXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgIHJlc2VydmVcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICAgIDwvTGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyPlxuXG4gICAgXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/nav.js\n");

/***/ })

});