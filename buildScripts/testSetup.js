//this file isn't transpiled so using CommonJS and ES5

require('babel-register')();

//disable webpack features that mocha doesn't understand
require.extensions['.css'] = function () {}