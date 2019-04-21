document.getElementById('loginbutton').onclick = function() {
  // connect plugin by click method 1 (require.ensure)
    require.ensure([], function(require) {
      let login = require('./login')
      login();
    }, 'auth');


    require.ensure([], function(require) {
      let logout = require('./logout')
      logout();
    }, 'auth');
  // method 2 (AMD)
    // require(['./login'],function(login) {
    //   login();
    // });

};
