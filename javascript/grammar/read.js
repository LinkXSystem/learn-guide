const recast = require('recast');

recast.run(function(ast, printSource) {
  //   printSource(ast);
  recast.visit(ast, {
    visitExpressionStatement: function({ node }) {
      console.log(node);
      return false;
    },
  });
});
