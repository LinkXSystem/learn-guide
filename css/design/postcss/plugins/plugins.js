const postcss = require('postcss');

module.exports = postcss.plugin('ast', function(options) {
  options = options || {};

  return function(root, result) {};
});
