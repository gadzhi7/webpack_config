'use strict';

// чтобы каждую переменную так не объявляеть решает плагин ProvidePlugin
// let pluck = require('lodash/collection/pluck');

// let users = [
//   {id: 1, name: 'Vasya'},
//   {id: 2, name: 'Petya'},
//   {id: 3, name: 'Masha'}
// ]

// через плагин lodash возвращает из массива объектов новый массив состоящий из определенных свойств объектов
// console.log( _.plunk(users, 'name') );

// import angular from 'angular';

// тоже самое что и ниже только imports и exports обрабатывается в webpack.config.js в модулях 
// let old = require('imports-loader?workSettings=>{delay:500}!exports-loader?Work!../vendor/old/dist/old');
let old = require('../vendor/old/dist/old');
old();
