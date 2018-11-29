const tool = require("@babel/parser");

const code = `const x = 1;`;

const result = tool.parse(code);

console.log("=====================");
console.log(result);
console.log("=====================");