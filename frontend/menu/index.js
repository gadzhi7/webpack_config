// import './style.css'
import './../style.sass'

import template from './menu.pug'

export default class  Menu {
  constructor(options) {
    this.elem = document.createElement('div');
    this.elem.className = 'menu';

    this.elem.innerHTML = template(options);

    this.titleElem = this.elem.querySelector('.title');

    this.titleElem.onlcick = () => this.elem.classList.toggle('open');

    this.titleElem.onmousedown = () => false;
  }
}
