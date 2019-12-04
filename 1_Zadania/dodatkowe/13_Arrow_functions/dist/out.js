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

eval("// Zadanie 1.\r\nvar hello = () => console.log(\"Hello World!\");\r\nhello();\r\n\r\n// Zadanie 2.\r\nvar multiply = (a = 10) => a * 2;\r\nconsole.log(multiply());\r\n\r\n// Zadanie 3.\r\nvar getGreater = (a, b) => a > b ? a : b;\r\nconsole.log(getGreater(2, 5));\r\n\r\n// Zadanie 4.\r\nvar getSecondMaxNumber = (array) => {\r\n  array.sort((a, b) => a - b);\r\n  return array[array.length - 2];\r\n};\r\n\r\nvar arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];\r\nconsole.log(getSecondMaxNumber(arr1));\r\n\r\n// Zadanie 5.\r\n(a => a)(\"Hello World!\");\r\n\r\n// Zadanie 6.\r\nvar interval = (a = 5) => {\r\n  var counter = 0;\r\n  var intervalId = setInterval(() => {\r\n    counter++;\r\n    console.log(\"Hello\")\r\n    console.log(\"Licznik: \" + counter)\r\n    if (counter == a) {\r\n      clearInterval(intervalId);\r\n    }\r\n  }, 1000);\r\n};\r\n\r\ninterval();\r\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/zadanie00.js":
/*!*************************!*\
  !*** ./js/zadanie00.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', function () {\r\n\r\n\tvar getSpan = document.querySelectorAll('span');\r\n\tvar getUl = document.querySelectorAll('ul');\r\n\r\n\tfor (let i = 0; i < getUl.length; i++) {\r\n\t\tgetUl[i].style.display = 'none';\r\n\t}\r\n\r\n\tfor (let i = 0; i < getSpan.length; i++) {\r\n\t\tgetSpan[i].addEventListener('mouseover', (event) => {\r\n\t\t\tconsole.log(event.target);\r\n\t\t\tevent.target.nextElementSibling.style.display = 'block';\r\n\r\n\t\t})\r\n\r\n\t\tgetSpan[i].addEventListener('mouseout', (event) => {\r\n\t\t\tevent.target.nextElementSibling.style.display = 'none';\r\n\t\t})\r\n\r\n\t};\r\n\r\n\tvar Students = function(array) {\r\n\t\tthis.students = array;\r\n\t}\r\n\r\n\t// Zadanie 0.\r\n\tvar Students = function(array) {\r\n\t\t this.students = array;\r\n\t\t this.countLetters = function() {\r\n\t\t\tthis.numberOfLetters = this.students.map(name => name.length);\r\n\t\t}\r\n\t}\r\n\r\n\tvar students = new Students([\"Ania\", \"Kamil\", \"Mariusz\"]);\r\n\tstudents.countLetters();\r\n\tconsole.log(students.numberOfLetters); // [4, 5, 7]\r\n});\r\n\n\n//# sourceURL=webpack:///./js/zadanie00.js?");

/***/ }),

/***/ "./js/zadanie07.js":
/*!*************************!*\
  !*** ./js/zadanie07.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const App = function () {\r\n  this.websites = ['onet', 'wp', 'facebook'];\r\n  this.links = [];\r\n}\r\n\r\n\r\nApp.prototype.generateLinks = function () {\r\n  this.links.push(\"https://onet.com\");\r\n  this.links.push(\"https://wp.com\");\r\n  this.links.push(\"https://facebook.com\");\r\n}\r\n\r\nlet app = new App();\r\napp.generateLinks();\r\nconsole.log(app.links)\r\n\r\n$(\"nav.menu a\").each(function (index, value) {\r\n  $(this).attr(\"href\", app.links[index]);\r\n});\r\n\n\n//# sourceURL=webpack:///./js/zadanie07.js?");

/***/ }),

/***/ "./js/zadanie08.js":
/*!*************************!*\
  !*** ./js/zadanie08.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const dog = {\r\n    type: \"Mammal\",\r\n    name: \"\",\r\n    setName: function(newName) {\r\n        this.name = newName;\r\n    }\r\n}\r\n\r\ndog.setName(\"Reksio\");\r\nconsole.log(dog.name);\r\n\n\n//# sourceURL=webpack:///./js/zadanie08.js?");

/***/ }),

/***/ "./js/zadanie09.js":
/*!*************************!*\
  !*** ./js/zadanie09.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Zadanie 9\r\nvar getSpan = document.querySelectorAll('span');\r\nvar getUl = document.querySelectorAll('ul');\r\n\r\nfor (let i = 0; i < getUl.length; i++) {\r\n  getUl[i].style.display = 'none';\r\n}\r\n\r\nfor (let i = 0; i < getSpan.length; i++) {\r\n  getSpan[i].addEventListener('mouseover', (event) => {\r\n    console.log(event.target);\r\n    event.target.nextElementSibling.style.display = 'block';\r\n\r\n  })\r\n\r\n  getSpan[i].addEventListener('mouseout', (event) => {\r\n    event.target.nextElementSibling.style.display = 'none';\r\n  })\r\n\r\n};\r\n\n\n//# sourceURL=webpack:///./js/zadanie09.js?");

/***/ }),

/***/ 0:
/*!*************************************************************************************************!*\
  !*** multi ./js/app.js ./js/zadanie00.js ./js/zadanie07.js ./js/zadanie08.js ./js/zadanie09.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app.js */\"./js/app.js\");\n__webpack_require__(/*! ./js/zadanie00.js */\"./js/zadanie00.js\");\n__webpack_require__(/*! ./js/zadanie07.js */\"./js/zadanie07.js\");\n__webpack_require__(/*! ./js/zadanie08.js */\"./js/zadanie08.js\");\nmodule.exports = __webpack_require__(/*! ./js/zadanie09.js */\"./js/zadanie09.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app.js_./js/zadanie00.js_./js/zadanie07.js_./js/zadanie08.js_./js/zadanie09.js?");

/***/ })

/******/ });