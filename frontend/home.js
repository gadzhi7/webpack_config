module.exports = function() {
  require.ensure([], function(require){
    let login = require('...');
    login();
  })

  console.log('home');
}
