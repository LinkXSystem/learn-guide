const { Method, Robot, Plugins, Command } = require('./src');

const argvs = Command(process.argv);

if (!argvs.port) {
  throw new Error("You need to specify the server's port !!!");
}
let robot = Robot.factory({
  port: argvs.port,
  name: 'Alice'
});

robot.plugin(Plugins.logger);

robot.post('/github/payload', (request, response) => {
  response.end(JSON.stringify({ status: true, message: 'Action method !!!' }));
});
