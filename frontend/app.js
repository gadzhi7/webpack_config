'use strict';

// чтобы каждую переменную так не объявляеть решает плагин ProvidePlugin
// let pluck = require('lodash/collection/pluck');

let users = [
  {id: 1, name: 'Vasya'},
  {id: 2, name: 'Petya'},
  {id: 3, name: 'Masha'}
]

// через плагин lodash возвращает из массива объектов новый массив состоящий из определенных свойств объектов
console.log( _.plunk(users, 'name') );
