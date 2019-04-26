(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // чтобы каждую переменную так не объявляеть решает плагин ProvidePlugin
// let pluck = require('lodash/collection/pluck');

var users = [{
  id: 1,
  name: 'Vasya'
}, {
  id: 2,
  name: 'Petya'
}, {
  id: 3,
  name: 'Masha'
}]; // через плагин lodash возвращает из массива объектов новый массив состоящий из определенных свойств объектов

console.log(_.plunk(users, 'name'));

/***/ })
],[[0,1]]]);