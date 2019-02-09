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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/main.js */ \"./src/main.js\");\n/* remindme.js */\n// Import the rest of our application.\n // module.exports = require('./src/main.js')(process.argv)\n\nObject(_src_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: getInput, parseArgs, parseInput, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInput\", function() { return getInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseArgs\", function() { return parseArgs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseInput\", function() { return parseInput; });\n/* input.js - Process input (from command line, text, etc) and return a message and a time\n\nInput: `['/usrc/bin/file.js', '2d Tell Mike Booth to renew his card']`\nOutput:\n`{\n  message: 'Tell Mike Booth to renew his card',\n  time: '2d'\n}`\n*/\nfunction getInput(argv) {\n  // Parse user input\n  var rawInput = parseArgs(argv);\n\n  if (!rawInput) {\n    return null;\n  } else {\n    var input = parseInput(rawInput);\n    return input;\n  }\n}\nfunction parseArgs(argv) {\n  /* Parse user input and split into array for processing\n  Expected Input: ['/usr/bin/file.js', 'messages go here and stuff']\n  Expected Output: ['messages go here and stuff'] (or null if empty)\n  */\n  // Remove app dir/name (always first paraameter)\n  var input = argv.slice(2); // Check if user inputted anything\n\n  if (input.length == 0) {\n    input = null;\n  } else {\n    // Split remaining parameters into array\n    input = input[0].split(' ');\n  }\n\n  return input;\n}\nfunction parseInput(rawInput) {\n  return rawInput;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getInput: getInput,\n  parseArgs: parseArgs,\n  parseInput: parseInput\n});\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return main; });\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n/* remindme.js - Simple reminders as a service\n\nUsage: `./remindme 2d Tell Mike Booth to renew his card`\n*/\nvar chalk = __webpack_require__(/*! chalk */ \"chalk\");\n\n\nfunction main() {\n  // Input: Array of parameters via command line (process.argv)\n  // Example: ['/blah/blah', 'internet']\n  var input = Object(_input__WEBPACK_IMPORTED_MODULE_0__[\"getInput\"])(process.argv);\n\n  if (input) {\n    console.log(chalk.magenta('Ok brah, reminding you to: ' + input));\n  } else {\n    console.log(chalk.cyan('You didn\\'t input anything, yo'));\n  } // Iterate through array until we find a time\n  // Store time + store remainder as message\n  // Take Input\n  // If no input - show message\n  // If input:\n  // Parse input for Reminder + Time\n  // If no time, prompt for time\n  // If time:\n  // Set reminder in DB\n\n}\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./index.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");\n\n//# sourceURL=webpack:///external_%22chalk%22?");

/***/ })

/******/ });