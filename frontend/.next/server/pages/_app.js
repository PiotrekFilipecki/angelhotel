/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/NGVhNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/pages/_app */ \"./node_modules/next/dist/pages/_app.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanM/ZjAxNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1R0FBNkMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/app.js\n");

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStrapiURL\": function() { return /* binding */ getStrapiURL; },\n/* harmony export */   \"fetchAPI\": function() { return /* binding */ fetchAPI; }\n/* harmony export */ });\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ \"qs\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/**\n * Get full Strapi URL from path\n * @param {string} path Path of the URL\n * @returns {string} Full Strapi URL\n */\n\nfunction getStrapiURL(path = \"\") {\n  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || \"http://localhost:1337\"}${path}`;\n}\n/**\n * Helper to make GET requests to Strapi API endpoints\n * @param {string} path Path of the API route\n * @param {Object} urlParamsObject URL params object, will be stringified\n * @param {Object} options Options passed to fetch\n * @returns Parsed API call response\n */\n\nasync function fetchAPI(path, urlParamsObject = {}, options = {}) {\n  // Merge default and user options\n  const mergedOptions = _objectSpread({\n    headers: {\n      \"Content-Type\": \"application/json\"\n    }\n  }, options); // Build request URL\n\n\n  const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);\n  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : \"\"}`)}`; // Trigger API call\n\n  const response = await fetch(requestUrl, mergedOptions); // Handle response\n\n  if (!response.ok) {\n    console.error(response.statusText);\n    throw new Error(`An error occured please try again`);\n  }\n\n  const data = await response.json();\n  return data;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9saWIvYXBpLmpzP2FhODUiXSwibmFtZXMiOlsiZ2V0U3RyYXBpVVJMIiwicGF0aCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCIsImZldGNoQVBJIiwidXJsUGFyYW1zT2JqZWN0Iiwib3B0aW9ucyIsIm1lcmdlZE9wdGlvbnMiLCJoZWFkZXJzIiwicXVlcnlTdHJpbmciLCJxcyIsInJlcXVlc3RVcmwiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwiRXJyb3IiLCJkYXRhIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTQSxZQUFULENBQXNCQyxJQUFJLEdBQUcsRUFBN0IsRUFBaUM7QUFDdEMsU0FBUSxHQUNOQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsMEJBQVosSUFBMEMsdUJBQzNDLEdBQUVILElBQUssRUFGUjtBQUdEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sZUFBZUksUUFBZixDQUF3QkosSUFBeEIsRUFBOEJLLGVBQWUsR0FBRyxFQUFoRCxFQUFvREMsT0FBTyxHQUFHLEVBQTlELEVBQWtFO0FBQ3ZFO0FBQ0EsUUFBTUMsYUFBYTtBQUNqQkMsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQ7QUFEUSxLQUlkRixPQUpjLENBQW5CLENBRnVFLENBU3ZFOzs7QUFDQSxRQUFNRyxXQUFXLEdBQUdDLG1EQUFBLENBQWFMLGVBQWIsQ0FBcEI7QUFDQSxRQUFNTSxVQUFVLEdBQUksR0FBRVosWUFBWSxDQUMvQixPQUFNQyxJQUFLLEdBQUVTLFdBQVcsR0FBSSxJQUFHQSxXQUFZLEVBQW5CLEdBQXVCLEVBQUcsRUFEbkIsQ0FFaEMsRUFGRixDQVh1RSxDQWV2RTs7QUFDQSxRQUFNRyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixVQUFELEVBQWFKLGFBQWIsQ0FBNUIsQ0FoQnVFLENBa0J2RTs7QUFDQSxNQUFJLENBQUNLLFFBQVEsQ0FBQ0UsRUFBZCxFQUFrQjtBQUNoQkMsV0FBTyxDQUFDQyxLQUFSLENBQWNKLFFBQVEsQ0FBQ0ssVUFBdkI7QUFDQSxVQUFNLElBQUlDLEtBQUosQ0FBVyxtQ0FBWCxDQUFOO0FBQ0Q7O0FBQ0QsUUFBTUMsSUFBSSxHQUFHLE1BQU1QLFFBQVEsQ0FBQ1EsSUFBVCxFQUFuQjtBQUNBLFNBQU9ELElBQVA7QUFDRCIsImZpbGUiOiIuL2xpYi9hcGkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgZnJvbSBcInFzXCJcblxuLyoqXG4gKiBHZXQgZnVsbCBTdHJhcGkgVVJMIGZyb20gcGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggUGF0aCBvZiB0aGUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBGdWxsIFN0cmFwaSBVUkxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaVVSTChwYXRoID0gXCJcIikge1xuICByZXR1cm4gYCR7XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIlxuICB9JHtwYXRofWBcbn1cblxuLyoqXG4gKiBIZWxwZXIgdG8gbWFrZSBHRVQgcmVxdWVzdHMgdG8gU3RyYXBpIEFQSSBlbmRwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIEFQSSByb3V0ZVxuICogQHBhcmFtIHtPYmplY3R9IHVybFBhcmFtc09iamVjdCBVUkwgcGFyYW1zIG9iamVjdCwgd2lsbCBiZSBzdHJpbmdpZmllZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBwYXNzZWQgdG8gZmV0Y2hcbiAqIEByZXR1cm5zIFBhcnNlZCBBUEkgY2FsbCByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBUEkocGF0aCwgdXJsUGFyYW1zT2JqZWN0ID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAvLyBNZXJnZSBkZWZhdWx0IGFuZCB1c2VyIG9wdGlvbnNcbiAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIC4uLm9wdGlvbnMsXG4gIH1cblxuICAvLyBCdWlsZCByZXF1ZXN0IFVSTFxuICBjb25zdCBxdWVyeVN0cmluZyA9IHFzLnN0cmluZ2lmeSh1cmxQYXJhbXNPYmplY3QpXG4gIGNvbnN0IHJlcXVlc3RVcmwgPSBgJHtnZXRTdHJhcGlVUkwoXG4gICAgYC9hcGkke3BhdGh9JHtxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogXCJcIn1gXG4gICl9YFxuXG4gIC8vIFRyaWdnZXIgQVBJIGNhbGxcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsLCBtZXJnZWRPcHRpb25zKVxuXG4gIC8vIEhhbmRsZSByZXNwb25zZVxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc29sZS5lcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgIHRocm93IG5ldyBFcnJvcihgQW4gZXJyb3Igb2NjdXJlZCBwbGVhc2UgdHJ5IGFnYWluYClcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIHJldHVybiBkYXRhXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/api.js\n");

/***/ }),

/***/ "./lib/media.js":
/*!**********************!*\
  !*** ./lib/media.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStrapiMedia\": function() { return /* binding */ getStrapiMedia; }\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./lib/api.js\");\n\nfunction getStrapiMedia(media) {\n  console.log(media.data);\n  const {\n    url\n  } = media.data.attributes;\n  const imageUrl = url.startsWith(\"/\") ? (0,_api__WEBPACK_IMPORTED_MODULE_0__.getStrapiURL)(url) : url;\n  return imageUrl;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9saWIvbWVkaWEuanM/YWI4YSJdLCJuYW1lcyI6WyJnZXRTdHJhcGlNZWRpYSIsIm1lZGlhIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ1cmwiLCJhdHRyaWJ1dGVzIiwiaW1hZ2VVcmwiLCJzdGFydHNXaXRoIiwiZ2V0U3RyYXBpVVJMIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRU8sU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDcENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLElBQWxCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVVKLEtBQUssQ0FBQ0csSUFBTixDQUFXRSxVQUEzQjtBQUNBLFFBQU1DLFFBQVEsR0FBR0YsR0FBRyxDQUFDRyxVQUFKLENBQWUsR0FBZixJQUFzQkMsa0RBQVksQ0FBQ0osR0FBRCxDQUFsQyxHQUEwQ0EsR0FBM0Q7QUFDQSxTQUFPRSxRQUFQO0FBQ0QiLCJmaWxlIjoiLi9saWIvbWVkaWEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tIFwiLi9hcGlcIlxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyYXBpTWVkaWEobWVkaWEpIHtcbiAgY29uc29sZS5sb2cobWVkaWEuZGF0YSk7XG4gIGNvbnN0IHsgdXJsIH0gPSBtZWRpYS5kYXRhLmF0dHJpYnV0ZXNcbiAgY29uc3QgaW1hZ2VVcmwgPSB1cmwuc3RhcnRzV2l0aChcIi9cIikgPyBnZXRTdHJhcGlVUkwodXJsKSA6IHVybFxuICByZXR1cm4gaW1hZ2VVcmxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/media.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nexports.__esModule = true;\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _utils = __webpack_require__(/*! ../next-server/lib/utils */ \"../next-server/lib/utils\");\n\nexports.AppInitialProps = _utils.AppInitialProps;\nexports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;\n/**\n* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.\n* This allows for keeping state between navigation, custom error handling, injecting additional data.\n*/\n\nasync function appGetInitialProps({\n  Component,\n  ctx\n}) {\n  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);\n  return {\n    pageProps\n  };\n}\n\nclass App extends _react.default.Component {\n  render() {\n    const {\n      Component,\n      pageProps\n    } = this.props;\n    return /*#__PURE__*/_react.default.createElement(Component, pageProps);\n  }\n\n}\n\nexports.default = App;\nApp.origGetInitialProps = appGetInitialProps;\nApp.getInitialProps = appGetInitialProps;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19hcHAuanM/MDc5NSJdLCJuYW1lcyI6WyJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImV4cG9ydHMiLCJfcmVhY3QiLCJfdXRpbHMiLCJBcHBJbml0aWFsUHJvcHMiLCJOZXh0V2ViVml0YWxzTWV0cmljIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiQ29tcG9uZW50IiwiY3R4IiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkFwcCIsImRlZmF1bHQiLCJyZW5kZXIiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIl0sIm1hcHBpbmdzIjoiQUFBYTs7QUFBQSxJQUFJQSxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxvSEFBRCxDQUFsQzs7QUFBbUZDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUlDLE1BQU0sR0FBQ0gsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFqQzs7QUFBb0QsSUFBSUcsTUFBTSxHQUFDSCxtQkFBTyxDQUFDLDBEQUFELENBQWxCOztBQUErQ0MsdUJBQUEsR0FBd0JFLE1BQU0sQ0FBQ0MsZUFBL0I7QUFBK0NILDJCQUFBLEdBQTRCRSxNQUFNLENBQUNFLG1CQUFuQztBQUF1RDtBQUN4VjtBQUNBO0FBQ0E7O0FBQUcsZUFBZUMsa0JBQWYsQ0FBa0M7QUFBQ0MsV0FBRDtBQUFXQztBQUFYLENBQWxDLEVBQWtEO0FBQUMsUUFBTUMsU0FBUyxHQUFDLE1BQUssQ0FBQyxHQUFFTixNQUFNLENBQUNPLG1CQUFWLEVBQStCSCxTQUEvQixFQUF5Q0MsR0FBekMsQ0FBckI7QUFBbUUsU0FBTTtBQUFDQztBQUFELEdBQU47QUFBbUI7O0FBQUEsTUFBTUUsR0FBTixTQUFrQlQsTUFBTSxDQUFDVSxPQUFQLENBQWVMLFNBQWpDLENBQTBDO0FBQUNNLFFBQU0sR0FBRTtBQUFDLFVBQUs7QUFBQ04sZUFBRDtBQUFXRTtBQUFYLFFBQXNCLEtBQUtLLEtBQWhDO0FBQXNDLFdBQU0sYUFBYVosTUFBTSxDQUFDVSxPQUFQLENBQWVHLGFBQWYsQ0FBNkJSLFNBQTdCLEVBQXVDRSxTQUF2QyxDQUFuQjtBQUFzRTs7QUFBdEg7O0FBQXVIUixlQUFBLEdBQWdCVSxHQUFoQjtBQUFvQkEsR0FBRyxDQUFDSyxtQkFBSixHQUF3QlYsa0JBQXhCO0FBQTJDSyxHQUFHLENBQUNNLGVBQUosR0FBb0JYLGtCQUFwQiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzO2V4cG9ydHMuTmV4dFdlYlZpdGFsc01ldHJpYz1fdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYzsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtDb21wb25lbnQsY3R4fSl7Y29uc3QgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7cmVuZGVyKCl7Y29uc3R7Q29tcG9uZW50LHBhZ2VQcm9wc309dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQscGFnZVByb3BzKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_app.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalContext\": function() { return /* binding */ GlobalContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_css_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/css/style.scss */ \"./assets/css/style.scss\");\n/* harmony import */ var _assets_css_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\n/* harmony import */ var _lib_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/media */ \"./lib/media.js\");\n\n\nvar _jsxFileName = \"/Users/piotrekfilipecki/Desktop/angelhotelapp/frontend/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n // import { appWithTranslation } from 'next-i18next';\n// import { Merriweather } from '@next/font/google'\n// import { SourceSansPro } from '@next/font/google'\n// const merriweather = Merriweather({ subsets: ['latin'] })\n// const sanspro = SourceSansPro({ subsets: ['latin'] })\n// Store Strapi Global object in context\n\nconst GlobalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)({});\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  const {\n    global\n  } = pageProps;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"shortcut icon\",\n        href: (0,_lib_media__WEBPACK_IMPORTED_MODULE_6__.getStrapiMedia)(global.attributes.favicon)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalContext.Provider, {\n      value: global.attributes,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n}; // getInitialProps disables automatic static optimization for pages that don't\n// have getStaticProps. So article, category and home pages still get SSG.\n// Hopefully we can replace this with getStaticProps once this issue is fixed:\n// https://github.com/vercel/next.js/discussions/10949\n\n\nMyApp.getInitialProps = async ctx => {\n  // Calls page's `getInitialProps` and fills `appProps.pageProps`\n  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx); // Fetch global site settings from Strapi\n\n  const globalRes = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_5__.fetchAPI)(\"/global\", {\n    populate: {\n      favicon: \"*\",\n      defaultSeo: {\n        populate: \"*\"\n      }\n    }\n  }); // Pass the data to our page via props\n\n  return _objectSpread(_objectSpread({}, appProps), {}, {\n    pageProps: {\n      global: globalRes.data\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWJsb2cvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiR2xvYmFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdsb2JhbCIsImdldFN0cmFwaU1lZGlhIiwiYXR0cmlidXRlcyIsImZhdmljb24iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJhcHBQcm9wcyIsIkFwcCIsImdsb2JhbFJlcyIsImZldGNoQVBJIiwicG9wdWxhdGUiLCJkZWZhdWx0U2VvIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUNPLE1BQU1BLGFBQWEsZ0JBQUdDLG9EQUFhLENBQUMsRUFBRCxDQUFuQzs7QUFFUCxNQUFNQyxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUMxQyxRQUFNO0FBQUVDO0FBQUYsTUFBYUQsU0FBbkI7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFDRSxXQUFHLEVBQUMsZUFETjtBQUVFLFlBQUksRUFBRUUsMERBQWMsQ0FBQ0QsTUFBTSxDQUFDRSxVQUFQLENBQWtCQyxPQUFuQjtBQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FLDhEQUFDLGFBQUQsQ0FBZSxRQUFmO0FBQXdCLFdBQUssRUFBRUgsTUFBTSxDQUFDRSxVQUF0QztBQUFBLDZCQUNFLDhEQUFDLFNBQUQsb0JBQWVILFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQSxrQkFERjtBQWFELENBaEJELEMsQ0FrQkE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBRixLQUFLLENBQUNPLGVBQU4sR0FBd0IsTUFBT0MsR0FBUCxJQUFlO0FBQ3JDO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLCtEQUFBLENBQW9CRixHQUFwQixDQUF2QixDQUZxQyxDQUdyQzs7QUFDQSxRQUFNRyxTQUFTLEdBQUcsTUFBTUMsa0RBQVEsQ0FBQyxTQUFELEVBQVk7QUFDMUNDLFlBQVEsRUFBRTtBQUNSUCxhQUFPLEVBQUUsR0FERDtBQUVSUSxnQkFBVSxFQUFFO0FBQ1ZELGdCQUFRLEVBQUU7QUFEQTtBQUZKO0FBRGdDLEdBQVosQ0FBaEMsQ0FKcUMsQ0FZckM7O0FBQ0EseUNBQVlKLFFBQVo7QUFBc0JQLGFBQVMsRUFBRTtBQUFFQyxZQUFNLEVBQUVRLFNBQVMsQ0FBQ0k7QUFBcEI7QUFBakM7QUFDRCxDQWREOztBQWdCQSwrREFBZWYsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBcIi4uL2Fzc2V0cy9jc3Mvc3R5bGUuc2Nzc1wiXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGZldGNoQVBJIH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwiLi4vbGliL21lZGlhXCJcbi8vIGltcG9ydCB7IGFwcFdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ25leHQtaTE4bmV4dCc7XG4vLyBpbXBvcnQgeyBNZXJyaXdlYXRoZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbi8vIGltcG9ydCB7IFNvdXJjZVNhbnNQcm8gfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcblxuLy8gY29uc3QgbWVycml3ZWF0aGVyID0gTWVycml3ZWF0aGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG4vLyBjb25zdCBzYW5zcHJvID0gU291cmNlU2Fuc1Bybyh7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG4vLyBTdG9yZSBTdHJhcGkgR2xvYmFsIG9iamVjdCBpbiBjb250ZXh0XG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IGdsb2JhbCB9ID0gcGFnZVByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic2hvcnRjdXQgaWNvblwiXG4gICAgICAgICAgaHJlZj17Z2V0U3RyYXBpTWVkaWEoZ2xvYmFsLmF0dHJpYnV0ZXMuZmF2aWNvbil9XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Z2xvYmFsLmF0dHJpYnV0ZXN9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cblxuLy8gZ2V0SW5pdGlhbFByb3BzIGRpc2FibGVzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uIGZvciBwYWdlcyB0aGF0IGRvbid0XG4vLyBoYXZlIGdldFN0YXRpY1Byb3BzLiBTbyBhcnRpY2xlLCBjYXRlZ29yeSBhbmQgaG9tZSBwYWdlcyBzdGlsbCBnZXQgU1NHLlxuLy8gSG9wZWZ1bGx5IHdlIGNhbiByZXBsYWNlIHRoaXMgd2l0aCBnZXRTdGF0aWNQcm9wcyBvbmNlIHRoaXMgaXNzdWUgaXMgZml4ZWQ6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvZGlzY3Vzc2lvbnMvMTA5NDlcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgLy8gQ2FsbHMgcGFnZSdzIGBnZXRJbml0aWFsUHJvcHNgIGFuZCBmaWxscyBgYXBwUHJvcHMucGFnZVByb3BzYFxuICBjb25zdCBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuICAvLyBGZXRjaCBnbG9iYWwgc2l0ZSBzZXR0aW5ncyBmcm9tIFN0cmFwaVxuICBjb25zdCBnbG9iYWxSZXMgPSBhd2FpdCBmZXRjaEFQSShcIi9nbG9iYWxcIiwge1xuICAgIHBvcHVsYXRlOiB7XG4gICAgICBmYXZpY29uOiBcIipcIixcbiAgICAgIGRlZmF1bHRTZW86IHtcbiAgICAgICAgcG9wdWxhdGU6IFwiKlwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuICAvLyBQYXNzIHRoZSBkYXRhIHRvIG91ciBwYWdlIHZpYSBwcm9wc1xuICByZXR1cm4geyAuLi5hcHBQcm9wcywgcGFnZVByb3BzOiB7IGdsb2JhbDogZ2xvYmFsUmVzLmRhdGEgfSB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./assets/css/style.scss":
/*!*******************************!*\
  !*** ./assets/css/style.scss ***!
  \*******************************/
/***/ (function() {



/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();