(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

document.getElementById('loginbutton').onclick = function () {
  // connect plugin by click method 1 (require.ensure)
  __webpack_require__.e(/* require.ensure | auth */ 1).then((function (require) {
    var login = __webpack_require__(1);

    login();
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

  __webpack_require__.e(/* require.ensure | auth */ 1).then((function (require) {
    var logout = __webpack_require__(2);

    logout();
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); // method 2 (AMD)
  // require(['./login'],function(login) {
  //   login();
  // });

};

/***/ })
],[[0,2]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbmJ1dHRvbicpLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAvLyBjb25uZWN0IHBsdWdpbiBieSBjbGljayBtZXRob2QgMSAocmVxdWlyZS5lbnN1cmUpXHJcbiAgICByZXF1aXJlLmVuc3VyZShbXSwgZnVuY3Rpb24ocmVxdWlyZSkge1xyXG4gICAgICBsZXQgbG9naW4gPSByZXF1aXJlKCcuL2xvZ2luJylcclxuICAgICAgbG9naW4oKTtcclxuICAgIH0sICdhdXRoJyk7XHJcblxyXG5cclxuICAgIHJlcXVpcmUuZW5zdXJlKFtdLCBmdW5jdGlvbihyZXF1aXJlKSB7XHJcbiAgICAgIGxldCBsb2dvdXQgPSByZXF1aXJlKCcuL2xvZ291dCcpXHJcbiAgICAgIGxvZ291dCgpO1xyXG4gICAgfSwgJ2F1dGgnKTtcclxuICAvLyBtZXRob2QgMiAoQU1EKVxyXG4gICAgLy8gcmVxdWlyZShbJy4vbG9naW4nXSxmdW5jdGlvbihsb2dpbikge1xyXG4gICAgLy8gICBsb2dpbigpO1xyXG4gICAgLy8gfSk7XHJcblxyXG59O1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBIiwic291cmNlUm9vdCI6IiJ9