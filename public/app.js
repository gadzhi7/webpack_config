(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///../node_modules/webpack/buildin/global.js?");

/***/ }),

/***/ "../vendor/old/dist/old.js":
/*!*********************************!*\
  !*** ../vendor/old/dist/old.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Work() {\r\n  setTimeout(function () {\r\n    console.log('work complete!')\r\n  }, workSettings.delay);\r\n}\r\n\n\n//# sourceURL=webpack:///../vendor/old/dist/old.js?");

/***/ }),

/***/ "../vendor/old/dist/old.js-exposed":
/*!*****************************************!*\
  !*** ../vendor/old/dist/old.js-exposed ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"Work!imports-loader?workSettings=>{delay:500}!exports-loader?Work\"] = __webpack_require__(/*! -!./old.js */ \"../vendor/old/dist/old.js\");\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///../vendor/old/dist/old.js-exposed?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// чтобы каждую переменную так не объявляеть решает плагин ProvidePlugin\r\n// let pluck = require('lodash/collection/pluck');\r\n\r\n// let users = [\r\n//   {id: 1, name: 'Vasya'},\r\n//   {id: 2, name: 'Petya'},\r\n//   {id: 3, name: 'Masha'}\r\n// ]\r\n\r\n// через плагин lodash возвращает из массива объектов новый массив состоящий из определенных свойств объектов\r\n// console.log( _.plunk(users, 'name') );\r\n\r\n// import angular from 'angular';\r\n\r\n// тоже самое что и ниже только imports и exports обрабатывается в webpack.config.js в модулях \r\n// let old = require('imports-loader?workSettings=>{delay:500}!exports-loader?Work!../vendor/old/dist/old');\r\nlet old = __webpack_require__(/*! ../vendor/old/dist/old */ \"../vendor/old/dist/old.js-exposed\");\r\nold();\r\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

},[["./app.js","runtime~app"]]]);