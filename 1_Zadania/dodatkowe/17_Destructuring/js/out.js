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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Zadanie 0a.\r\n\r\nlet weather = [\"snow\", \"rain\", \"sun\"];\r\nlet [firstOne, , secondOne] = weather;\r\n\r\nconsole.log(`${firstOne} ${secondOne}`);\r\n\r\n// Zadanie 0b.\r\nconst slider = {\r\n    type: \"infinite\",\r\n    numberOfItems: 10,\r\n    center: true,\r\n    autoStart: true\r\n}\r\nlet {type, autoStart} = slider;\r\n\r\nconsole.log(`${type} ${autoStart}`);\r\n\r\n// Zadanie 1.\r\nlet names = [\"Thomas\", \"John\", \"Arthur\"];\r\nlet [name1, name2, name3] = names;\r\n\r\nconsole.log(`${name1} ${name2} ${name3}`);\r\n\r\n// Zadanie 2.\r\nfunction generateRandomNumbers() {\r\n  let numbers = [];\r\n\r\n  for (let i = 0; i < 6; i++) {\r\n    numbers.push(Math.floor(Math.random() * 6));\r\n  }\r\n\r\n  return numbers;\r\n}\r\n\r\nlet [a, , b] = generateRandomNumbers();\r\n\r\nconsole.log(`${a} ${b}`);\r\n\r\n// Zadanie 4.\r\nfunction getAnimal() {\r\n  return {\r\n    name: \"Mruczek\",\r\n    age: 10,\r\n    getVoice: () => \"miau miau\"\r\n  };\r\n}\r\n\r\nlet animal = getAnimal();\r\nlet {name: catName, getVoice: catVoice} = animal;\r\n\r\nconsole.log(`${catName} ${catVoice()}`);\r\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });