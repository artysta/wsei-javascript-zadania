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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _square_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square.js */ \"./js/square.js\");\n\r\n\r\nlet square = new _square_js__WEBPACK_IMPORTED_MODULE_0__[\"Square\"](2);\r\nsquare.sayName();\r\nconsole.log(square.area());\r\nconsole.log(new _square_js__WEBPACK_IMPORTED_MODULE_0__[\"Square\"]().area());\r\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/polygon.js":
/*!***********************!*\
  !*** ./js/polygon.js ***!
  \***********************/
/*! exports provided: Polygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Polygon\", function() { return Polygon; });\nclass Polygon {\r\n  constructor(height, width) {\r\n    this.name = 'Polygon';\r\n    this.height = height;\r\n    this.width = width;\r\n  }\r\n\r\n  area() {\r\n    return this.height * this.width;\r\n  }\r\n\r\n  sayName() {\r\n    console.log('Cześć jestem', this.name + '.');\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/polygon.js?");

/***/ }),

/***/ "./js/square.js":
/*!**********************!*\
  !*** ./js/square.js ***!
  \**********************/
/*! exports provided: Square */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Square\", function() { return Square; });\n/* harmony import */ var _polygon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polygon.js */ \"./js/polygon.js\");\n\r\n\r\nclass Square extends _polygon_js__WEBPACK_IMPORTED_MODULE_0__[\"Polygon\"] {\r\n  constructor(dim = 5) {\r\n    super(dim, dim);\r\n    this.name = 'Square';\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/square.js?");

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./js/app.js ./js/polygon.js ./js/square.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app.js */\"./js/app.js\");\n__webpack_require__(/*! ./js/polygon.js */\"./js/polygon.js\");\nmodule.exports = __webpack_require__(/*! ./js/square.js */\"./js/square.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app.js_./js/polygon.js_./js/square.js?");

/***/ })

/******/ });