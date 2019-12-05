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

eval("// Zadanie 0.\r\nclass Vehicle {\r\n\tconstructor(name) {\r\n\t\tthis.name = name;\r\n\t}\r\n\tgetName() {\r\n\t\treturn this.name;\r\n\t}\r\n}\r\n\r\nclass Boat extends Vehicle {\r\n\tsail() {\r\n\t\tconsole.log(\"I am sailing!\");\r\n\t}\r\n}\r\n\r\nclass Car extends Vehicle {\r\n\tdrive() {\r\n\t\tconsole.log(\"I am driving!\");\r\n\t}\r\n}\r\n\r\nclass Plane extends Vehicle {\r\n\tfly() {\r\n\t\tconsole.log(\"I am flying!\");\r\n\t}\r\n}\r\n\r\nlet boat = new Boat(\"Speeder\");\r\nlet car = new Car(\"Banshee\");\r\nlet plane = new Plane(\"Hydra\");\r\n\r\nboat.sail();\r\ncar.drive();\r\nplane.fly();\r\n\r\n// Zadanie 1.\r\nclass Kaczka {\r\n    constructor() {\r\n      this.type = \"zwykła\";\r\n    }\r\n    kwacz() {\r\n      console.log(\"Kwa kwa.\");\r\n    }\r\n    plywaj() {\r\n      console.log(\"Płynę...\");\r\n    }\r\n\t\tlec() {\r\n\t\t\tconsole.log(\"Lecę...\");\r\n\t\t}\r\n    wyswietl() {\r\n      console.log(\"Wygląda jak \" + this.type + \" kaczka.\");\r\n    }\r\n}\r\n\r\nconsole.log(\"\\n>> Kaczka <<\");\r\nvar kaczucha = new Kaczka();\r\nkaczucha.kwacz();\r\nkaczucha.plywaj();\r\nkaczucha.wyswietl();\r\nkaczucha.lec();\r\n\r\n// Zadanie 2.\r\nclass DzikaKaczka extends Kaczka {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.type = \"dzika\";\r\n\t}\r\n}\r\n\r\nconsole.log(\"\\n>> DzikaKaczka <<\");\r\nvar dzikaKaczucha = new DzikaKaczka();\r\ndzikaKaczucha.kwacz();\r\ndzikaKaczucha.plywaj();\r\ndzikaKaczucha.wyswietl();\r\ndzikaKaczucha.lec();\r\n\r\n// Zadanie 3.\r\nclass KrzyzowkaKaczka extends Kaczka {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.type = \"krzyżówka\"\r\n\t}\r\n}\r\n\r\nconsole.log(\"\\n>> KrzyzowkaKaczka <<\");\r\nvar krzyzowkaKaczucha = new KrzyzowkaKaczka();\r\nkrzyzowkaKaczucha.kwacz();\r\nkrzyzowkaKaczucha.plywaj();\r\nkrzyzowkaKaczucha.wyswietl();\r\nkrzyzowkaKaczucha.lec();\r\n\r\n// Zadanie 5.\r\nclass GumowaKaczka extends Kaczka {\r\n\tconstructor() {\r\n\t\tsuper();\r\n\t\tthis.type = \"gumowa\"\r\n\t}\r\n\tlec() {\r\n\t\tconsole.log(\"Gumowe kaczki nie potrafią latać :(\");\r\n\t}\r\n}\r\n\r\nconsole.log(\"\\n>> GumowaKaczka <<\");\r\nvar gumowaKaczucha = new GumowaKaczka();\r\ngumowaKaczucha.kwacz();\r\ngumowaKaczucha.plywaj();\r\ngumowaKaczucha.wyswietl();\r\ngumowaKaczucha.lec();\r\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/zadanie06.js":
/*!*************************!*\
  !*** ./js/zadanie06.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let foods = [];\r\n\r\nclass Food {\r\n  constructor(name, protein, carbs, fat) {\r\n    this.name = name;\r\n    this.protein = protein;\r\n    this.carbs = carbs;\r\n    this.fat = fat;\r\n  }\r\n  print() {\r\n    console.log(this.name + \": \" + this.protein + \"g protein, \" + this.carbs + \"g carbs \" + this.fat + \"g fat.\");\r\n  }\r\n}\r\n\r\nclass FatFreeFood extends Food {\r\n  constructor(name, protein, carbs, fat) {\r\n    super(name, protein, carbs, fat);\r\n  }\r\n}\r\n\r\nclass FastFood extends Food {\r\n  constructor(name, protein, carbs, fat) {\r\n    super(name, protein, carbs, fat);\r\n  }\r\n}\r\n\r\nvar list = document.getElementById(\"products\");\r\nvar form = document.querySelector(\"form\");\r\n\r\nvar nameInput = document.getElementById(\"name\");\r\nnameInput.value = \"\";\r\nnameInput.setAttribute(\"placeholder\", \"Podaj nazwę produktu...\");\r\nnameInput.setAttribute(\"required\", \"required\");\r\n\r\nvar proteinsInput = document.getElementById(\"proteins\");\r\nproteinsInput.setAttribute(\"type\", \"number\");\r\nproteinsInput.setAttribute(\"placeholder\", \"Protein...\");\r\nproteinsInput.setAttribute(\"required\", \"required\");\r\n\r\nvar carbsInput = document.getElementById(\"carbs\");\r\ncarbsInput.setAttribute(\"type\", \"number\");\r\ncarbsInput.setAttribute(\"placeholder\", \"Carbs...\");\r\ncarbsInput.setAttribute(\"required\", \"required\");\r\n\r\nvar fatInput = document.getElementById(\"fat\");\r\nfatInput.setAttribute(\"type\", \"number\");\r\nfatInput.setAttribute(\"placeholder\", \"Fat...\");\r\nfatInput.setAttribute(\"required\", \"required\");\r\n\r\nform.addEventListener(\"submit\", function(event) {\r\n  event.preventDefault();\r\n\r\n  var name = nameInput.value;\r\n  var proteins = proteinsInput.value;\r\n  var carbs = carbsInput.value;\r\n  var fat = fatInput.value;\r\n  var kcal = (proteins * 4 + carbs * 4 + fat * 9).toFixed(2);\r\n\r\n  if (kcal > 250) {\r\n    var product = new FastFood(name, proteins, carbs, fat);\r\n  } else {\r\n    var product = new FatFreeFood(name, proteins, carbs, fat);\r\n  }\r\n\r\n  foods.push(product);\r\n  foods.forEach((element, index) => element.print());\r\n\r\n  var listItem = document.createElement(\"li\");\r\n  listItem.innerHTML = name + \": \" + proteins + \" g proteins, \" + carbs + \" g carbs \" + fat + \" g fat - total \" + kcal + \" kcal.\";\r\n  list.appendChild(listItem);\r\n});\r\n\n\n//# sourceURL=webpack:///./js/zadanie06.js?");

/***/ }),

/***/ "./js/zadanie07.js":
/*!*************************!*\
  !*** ./js/zadanie07.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MenuGenerator {\r\n  constructor(type, elements) {\r\n    this.type = type;\r\n    this.elements = elements;\r\n  }\r\n  getType() {\r\n    console.log(this.type);\r\n  }\r\n  showItems() {\r\n    console.log(this.elements);\r\n  }\r\n  animate() {\r\n    console.log(\"Animacja typu: \" + this.type);\r\n  }\r\n}\r\n\r\nclass HorizontalMenuGenerator extends MenuGenerator {\r\n\r\n}\r\n\r\nclass VerticalMenuGenerator extends MenuGenerator {\r\n\r\n}\r\n\r\nconsole.log(\"\\n>> HorizontalMenuGenerator <<\");\r\nlet hMenuGenetator = new HorizontalMenuGenerator(\"horizontal\", ['start', 'about']);\r\nhMenuGenetator.getType();\r\nhMenuGenetator.showItems();\r\nhMenuGenetator.animate();\r\n\r\nconsole.log(\"\\n>> VerticalMenuGenerator <<\");\r\nlet vMenuGenetator = new VerticalMenuGenerator(\"vertical\", ['home', 'contact']);\r\nvMenuGenetator.getType();\r\nvMenuGenetator.showItems();\r\nvMenuGenetator.animate();\r\n\n\n//# sourceURL=webpack:///./js/zadanie07.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./js/app.js ./js/zadanie06.js ./js/zadanie07.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app.js */\"./js/app.js\");\n__webpack_require__(/*! ./js/zadanie06.js */\"./js/zadanie06.js\");\nmodule.exports = __webpack_require__(/*! ./js/zadanie07.js */\"./js/zadanie07.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app.js_./js/zadanie06.js_./js/zadanie07.js?");

/***/ })

/******/ });