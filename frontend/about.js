'use strict';

exports.showMenu = function() {

  require.ensure([], function(require) {
    let Menu = require('./menu').default

    let pandaMenu = new Menu({
      title: 'Menu of panda2',
      items: [{
        text: 'two eggs',
        href: '#eggs'
      }, {
        text: 'two meat',
        href: '#meat'
      }, {
        text: '70% food is bamboo!',
        href: '#bamboo'
      }]
    })

    document.body.appendChild(pandaMenu.elem)
  })

}
