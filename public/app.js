(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "../vendor/old/dist/old.js":
/*!*********************************!*\
  !*** ../vendor/old/dist/old.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function Work() {\r\n  setTimeout(function () {\r\n    console.log('work complete!')\r\n  }, workSettings.delay);\r\n}\r\n\n\n//# sourceURL=webpack:///../vendor/old/dist/old.js?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// чтобы каждую переменную так не объявляеть решает плагин ProvidePlugin\r\n// let pluck = require('lodash/collection/pluck');\r\n\r\n// let users = [\r\n//   {id: 1, name: 'Vasya'},\r\n//   {id: 2, name: 'Petya'},\r\n//   {id: 3, name: 'Masha'}\r\n// ]\r\n\r\n// через плагин lodash возвращает из массива объектов новый массив состоящий из определенных свойств объектов\r\n// console.log( _.plunk(users, 'name') );\r\n\r\n// import angular from 'angular';\r\n\r\n// тоже самое что и ниже только imports и exports обрабатывается в webpack.config.js в модулях \r\n// let old = require('imports-loader?workSettings=>{delay:500}!exports-loader?Work!../vendor/old/dist/old');\r\nlet old = __webpack_require__(/*! ../vendor/old/dist/old */ \"../vendor/old/dist/old.js\");\r\nold();\r\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

},[["./app.js","runtime~app"]]]);