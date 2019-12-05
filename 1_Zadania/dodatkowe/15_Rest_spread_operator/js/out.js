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
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Zadanie 0.\r\nlet namesA = [\"Zosia\", \"Marcin\", \"Kamil\"];\r\nlet namesB = [\"Ala\", \"Puszek\", ...namesA, \"Jan\", \"Karol\" ];\r\n\r\nfunction getAverage(...args) {\r\n  return (args.reduce((sum, num) => sum + num) / args.length).toFixed(2);\r\n}\r\n\r\nconsole.log(getAverage(2, 4, 4));\r\n\r\n// Zadanie 1.\r\nlet name = \"Adrian\";\r\nlet letters = [];\r\n\r\nletters.push(...name);\r\nletters.forEach((item) => console.log(item));\r\n\r\n// Zadanie 2.\r\nlet fruits = [\"Apple\", \"Raspberry\", \"Orange\"];\r\nlet vegetables = [\"Tomato\", \"Cucumber\", \"Pepper\"];\r\nlet mix = [];\r\n\r\nmix.push(...fruits);\r\nmix.push(...vegetables);\r\n\r\nconsole.log(mix);\r\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/zadanie03.js":
/*!*************************!*\
  !*** ./js/zadanie03.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let people = [\r\n    {\r\n        person: \"Kim Yoo Suk\",\r\n        profession: \"tyczkarz\"\r\n    },\r\n    {\r\n        person: \"Sue Yoo\",\r\n        profession: \"prawnik\"\r\n    },\r\n    {\r\n        person: \"Dr. Alden Cockburn\",\r\n        profession: \"urolog\"\r\n    },\r\n    {\r\n        person: \"Rusty Kuntz\",\r\n        profession: \"trener\"\r\n    }\r\n];\r\n\r\nfunction setFunnyName(...args) {\r\n  args.forEach(p => people.push(p));\r\n}\r\n\r\nsetFunnyName(\r\n  {person: \"Tommy Shelby\", profession: \"bukmacher\"},\r\n  {person: \"Mr Robot\", profession: \"hakier\"},\r\n  {person: \"Dr House\", profession: \"doktor\"}\r\n);\r\n\r\nconsole.log(people);\r\n\n\n//# sourceURL=webpack:///./js/zadanie03.js?");

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./js/app.js ./js/zadanie03.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app.js */\"./js/app.js\");\nmodule.exports = __webpack_require__(/*! ./js/zadanie03.js */\"./js/zadanie03.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app.js_./js/zadanie03.js?");

/***/ })

/******/ });