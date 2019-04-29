'use strict';

exports.showMenu = function() {

  require.ensure([], function(require) {
    let Menu = require('./menu').default

    let pandaMenu = new Menu({
      title: 'Menu of panda',
      items: [{
        text: 'eggs',
        href: '#eggs'
      }, {
        text: 'meat',
        href: '#meat'
      }, {
        text: '99% food is bamboo!',
        href: '#bamboo'
      }]
    })

    document.body.appendChild(pandaMenu.elem)
  })

}
