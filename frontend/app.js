'use strict';

let users = [
  {id: 1, name: 'Vasya'},
  {id: 2, name: 'Petya'},
  {id: 3, name: 'Masha'}
]

// через плагин lodash возвращает из массива объектов новый массив состоящий из определенных свойств объектов
console.log( _.pluck(users, 'name') );
