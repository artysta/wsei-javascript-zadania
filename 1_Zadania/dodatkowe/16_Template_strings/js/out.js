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

eval("// Zadanie 0.\r\nconst person = {\r\n  name: \"Vlad\",\r\n  lastName: \"Drăculea\",\r\n  yearOfBirth: 1431,\r\n  proffesion: \"Lord of Wallachia\"\r\n};\r\n\r\nfunction whoAreYou(object) {\r\n  console.log(\r\n`My name is ${object.name} ${object.lastName}.\r\nI am ${new Date().getFullYear() - object.yearOfBirth} years old.\r\nMy profession is ${object.proffesion}.`\r\n  );\r\n}\r\n\r\nwhoAreYou(person);\r\n\r\n// Zadanie 1.\r\nlet a = 5;\r\nlet b = 15;\r\n\r\nconsole.log(`Suma dwóch liczb ${a} i ${b} to ${a + b}.`);\r\n\r\n// Zadanie 2.\r\nlet name = \"Adrian\";\r\n\r\nconsole.log(`Moje imie to: ${name} Kurek.`);\r\n\r\n// Zadanie 3.\r\nconsole.log(\r\n`\"Myślę, że jest wiele piękna\r\nw posiadaniu problemów.\r\nTo jeden ze sposobów w jaki się uczymy\"\r\nHerbie Hancock`);\r\n\r\n// Zadanie 4.\r\nconst button = {\r\n  value: \"Send message\",\r\n  idName: \"sendMsg\",\r\n  width: \"100px\",\r\n  padding: \"20px\",\r\n}\r\n\r\nconsole.log(\r\n`To jest button.\r\nJego szerokość to ${button.width}.\r\nNapis, który na nim widnieje to \"${button.value}\".`\r\n);\r\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });