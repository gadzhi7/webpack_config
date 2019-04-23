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


// динамическое подгружение по url
let moduleName = location.pathname.slice(1);
let handler
try {
  handler = require('bundle!./routes' + moduleName)
} catch (e) {
  alert('No such path');
}

if(handler) {
  handler(function(route) {
    route();
  });
}




// выдает ошибку Cannot statically analyse 'require(…, …)'
// динамическое подгружение всех файлов по ключам (обычно для подгружение тестов)
                                // не считать вложенные папки
// let context = require('./routes', false, /\.js$/)
// context.keys().forEach(function(path) {
//   let module = context(path);
//   module();
// })

// динамическое подгружение по url файлов находищихся в папке routes
// let route
// try {
//   route = require('./routes' + moduleName);
// } catch (e) {
//   alert(e);
// }
// if (route) {
//   route();
// }
