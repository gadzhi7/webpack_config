'use strict';

import Menu from './menu';

let pandaMenu = new Menu({
  title: 'Menu of panda',
    items: [{
      text: 'eggs',
      href: '#eggs'
    }, {
      text: 'meat',
      hreg: '#meat'
    }, {
      text: '99% food is bamboo!',
      href: '#bamboo'
    }]
})

document.body.appendChild(pandaMenu.elem)
