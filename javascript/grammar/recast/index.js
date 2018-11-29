const recast = require('recast');

const {
  variableDeclaration,
  variableDeclarator,
  functionExpression,
} = recast.types.builders;

const code = `
function add(a, b) {
    return a + 
    b;
}
`;

const ast = recast.parse(code);

const add = ast.program.body[0];

ast.program.body[0] = variableDeclaration('const', [
  variableDeclarator(add.id, functionExpression(null, add.params, add.body)),
]);

const output = recast.prettyPrint(ast, { tabWidth: 2 }).code;

console.log(output);
