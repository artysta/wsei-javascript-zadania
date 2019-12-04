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

eval("document.addEventListener('DOMContentLoaded', function () {\r\n\r\n    // Zadanie 0.\r\n    const x = 5;\r\n    let y = 3;\r\n\r\n    for (var i = 0; i < 10; i++) {\r\n      console.log(i, y);\r\n    }\r\n    console.log(i, y);\r\n\r\n    function myFn(param1) {\r\n      let y = 4;\r\n      let i = 20;\r\n      console.log(param1, y, i);\r\n    }\r\n\r\n    myFn(i)\r\n\r\n    console.log(x);\r\n    {\r\n      let y = 25;\r\n      console.log(y);\r\n      var z = 50;\r\n    }\r\n\r\n    console.log(z, y);\r\n\r\n    // Zadanie 3.\r\n    for (var i = 0; i < 10; i++) {\r\n      console.log(i);\r\n    }\r\n\r\n    // Wypisuje 10.\r\n    console.log(i);\r\n\r\n    for (let j = 0; j < 10; j++) {\r\n      console.log(k);\r\n    }\r\n\r\n    // ReferenceError: j is not defined.\r\n    console.log(k);\r\n\r\n    // Zadanie 5.\r\n    (function () {\r\n      console.log(\"Hello world!\");\r\n    })();\r\n\r\n    // Zadanie 6.\r\n    ((name) => {\r\n      console.log(name);\r\n    })(\"Adrian\");\r\n})\r\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/zadanie01.js":
/*!*************************!*\
  !*** ./js/zadanie01.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//I. Sprawdź najpierw zasięg let\r\nlet numbers = [2, 3, 4];\r\n{\r\n    // A1 - wypisuję zmienną numbers przed deklaracją\r\n    // Wynik w konsoli to: ReferenceError: Cannot access 'numbers' before initialization.\r\n    // Dlaczego taki wynik? Hoisting sprawia, że deklaracje zmiennych \"przenoszone\" są na \"sam początek\" ich zasięgu.\r\n    // Nie przenoszona jest jednak przypisana do zmiennych wartość, dlatego też nie ma do nich dostępu.\r\n    console.log(numbers);\r\n\r\n    // A2 - wypisuję zmienną numbers po deklaracji\r\n    // Wynik w konsoli to: [2, 3, 4].\r\n    // Dlaczego taki wynik? Tutaj wszystko jest okej, ponieważ wypisujemy zmienną już po deklaracji zmiennej i przypisaniu do niej wartości.\r\n    console.log(numbers);\r\n}\r\n\r\n// A3 - wypisuję zmienną numbers za blokiem\r\n// Wynik w konsoli to: ReferenceError: numbers is not defined.\r\n// Dlaczego taki wynik? Jeżeli zmienna deklarowana jest w osobnym bloku kodu, to w przypadku zmiennej let ma ona wyłącznie jego zasięg, stąd też tutaj uważana jest za zdefiniowaną.\r\nconsole.log(numbers);\r\n\r\n// II. Sprawdź teraz  zasięg const\r\nconst PI = 3.14;\r\n{\r\n    // A1 - wypisuję zmienną PI przed deklaracją\r\n    // Wynik w konsoli to: ReferenceError: Cannot access 'PI' before initialization.\r\n    // Dlaczego taki wynik? Sytuacja taka sama jak w przypadku zmiennej numbers.\r\n    console.log(PI);\r\n\r\n    // A2 - wypisuję zmienną PI po deklaracji\r\n    // Wynik w konsoli to: 3.14.\r\n    // Dlaczego taki wynik? Tutaj również wszystko jest okej, ponieważ wypisujemy zmienną już po deklaracji zmiennej i przypisaniu do niej wartości.\r\n    console.log(PI);\r\n}\r\n\r\n// A3 - wypisuję zmienną PI za blokiem\r\n// Wynik w konsoli to: ReferenceError: PI is not defined.\r\n// Dlaczego taki wynik? To samo co w przypadku zmiennej numbers. Jeżeli zmienna deklarowana jest w osobnym bloku kodu, to w przypadku zmiennej const ma ona wyłącznie jego zasięg, stąd też tutaj uważana jest za zdefiniowaną.\r\nconsole.log(PI);\r\n\n\n//# sourceURL=webpack:///./js/zadanie01.js?");

/***/ }),

/***/ "./js/zadanie02.js":
/*!*************************!*\
  !*** ./js/zadanie02.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let character = \"księżniczka\";\r\nlet timeOfDay = \"dzień\";\r\nconst lover = 'Shrek';\r\n\r\n{\r\n    let timeOfDay = \"noc\";\r\n    let character = \"ogrzyca\";\r\n    console.log(\"Teraz jest: \" + timeOfDay + \" i Fiona to: \" + character + \", a jej ukochany to: \" + lover);\r\n    // TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.\r\n\r\n    /*\r\n      timeOfDay -> noc\r\n      character -> ogrzyca\r\n      lover -> Shrek\r\n\r\n      Zmienne character i timeOfDay deklarowane są ponownie wewnątrz bloku, stąd też przypisane zostają do nich nowe wartości.\r\n      Gdyby pominąć ponowną deklarację, zmienne posiadałyby takie wartości, jakie przypisane zostały do nich przed blokiem.\r\n      Blok ma bowiem dostęp do zmiennych znajdujących się \"na zewnątrz\".\r\n    */\r\n}\r\n\r\nconsole.log(\"Teraz jest: \" + timeOfDay + \" i Fiona to: \" + character + \", a jej ukochany to: \" + lover);\r\n// TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.\r\n\r\n/*\r\n  timeOfDay -> dzień\r\n  character -> księżniczka\r\n  lover -> Shrek\r\n\r\n  W tej sytuacji zmienne znajdujące się w bloku kodu nie są w ogóle brane pod uwagę, ponieważ ich zasięg ogranicza się wyłącznie do niego.\r\n  Zmienne mają więc wartości, które zostały do nich przypisane przy pierwszej deklaracji.\r\n*/\r\n\n\n//# sourceURL=webpack:///./js/zadanie02.js?");

/***/ }),

/***/ "./js/zadanie04.js":
/*!*************************!*\
  !*** ./js/zadanie04.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.\r\nconst name = \"Agata\";\r\n\r\n// TypeError: Assignment to constant variable.\r\nname = \"Adrian\";\r\n\r\n//TODO:\r\n//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.\r\n//b) spróbuj dodać nową wartość do tablicy\r\n//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray\r\nconst simpleArray = [1, 2, 3, 4];\r\n\r\n// a) - TypeError: Assignment to constant variable.\r\nsimpleArray = [-1, -2, -3, -4];\r\n\r\n// b) - Ok.\r\nsimpleArray.push(5);\r\nconsole.log(simpleArray[4]);\r\n\r\n// c) - Ok.\r\nsimpleArray[0] = 9;\r\nconsole.log(simpleArray[0]);\r\n\r\n//TODO:\r\n//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.\r\n//b) spróbuj zmienić właśność skill obiektu dog\r\n//c) spróbuj dodać nową własność do obiektu dog np. age\r\nconst dog = {\r\n    name: \"Puszek\",\r\n    skill: \"killing\"\r\n}\r\n\r\n// a) - TypeError: Assignment to constant variable.\r\ndog = {\r\n  name: \"Szarik\",\r\n  skill: \"driving a tank\"\r\n}\r\n\r\n// b) - Ok.\r\ndog.killing = \"jumping\";\r\nconsole.log(dog.killing);\r\n\r\n// c) - Ok.\r\ndog.age = 5;\r\nconsole.log(dog.age);\r\n\r\n// Wnioski: typ const oznacza, że do raz zdefiniowanej zmiennej nie można przypisać innej wartości.\r\n// Nie dotyczy to jednak właśnie elementów tablicy. Jeśli tablica posiada typ const, to możemy modyfikować je etc..\r\n// Sytuacja wygląda identycznie w przypadku obiektów tworzonych w JS.\r\n\n\n//# sourceURL=webpack:///./js/zadanie04.js?");

/***/ }),

/***/ 0:
/*!*******************************************************************************!*\
  !*** multi ./js/app.js ./js/zadanie01.js ./js/zadanie02.js ./js/zadanie04.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./js/app.js */\"./js/app.js\");\n__webpack_require__(/*! ./js/zadanie01.js */\"./js/zadanie01.js\");\n__webpack_require__(/*! ./js/zadanie02.js */\"./js/zadanie02.js\");\nmodule.exports = __webpack_require__(/*! ./js/zadanie04.js */\"./js/zadanie04.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app.js_./js/zadanie01.js_./js/zadanie02.js_./js/zadanie04.js?");

/***/ })

/******/ });