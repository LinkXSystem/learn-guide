const { Method } = require("./constants");
const Robot = require("./robot");
const Command = require("./command");

const argvs = Command(process.argv);

if (!argvs.port) {
  throw new Error("You need to specify the server's port !!!");
}

console.warn(argvs);

let robot = Robot.factory(argvs.port);

robot.bind("/action", Method.POST, (request, response) => {
  response.end(JSON.stringify({ status: true, message: "Action method !!!" }));
});
