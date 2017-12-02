// This file isn't transpiled, so it must us CommonJS and ES5

// Register babel to transpire before out tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
