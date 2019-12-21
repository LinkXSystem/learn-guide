const http = require("http");

class Robot {
  static factory(port = 3600) {
    const robot = new Robot();

    http
      .createServer((request, response) => {
        robot.launcher(request, response);
      })
      .listen(port);

    return robot;
  }

  constructor(configuration) {
    const { error } = configuration || {};
    let temp_ = configuration || {};

    if (!error) {
      temp_ = Object.assign(temp_, {
        error: { status: false, message: "This is Github's Robot !!!" }
      });
    }

    this.config = temp_;
    this.router = new Map();
  }

  launcher(request, response) {
    const { url, method, headers } = request;

    let buffer = [];

    request.on("error", info => {
      buffer = [];
      this.error(response);
    });

    request.on("data", chunk => {
      buffer.push(chunk);
    });

    request.on("end", () => {
      // body = Buffer.concat(body).toString();
      const callback = this.router.get(`${url}|${method}`);
      if (callback) {
        return callback(request, response);
      }

      this.error(response);
    });
  }

  error(response) {
    const { error } = this.config;
    response.end(JSON.stringify(error));
  }

  plugin() {}

  bind(path, method, callback) {
    this.router.set(`${path}|${method}`, callback);
  }

  unbind(path, method) {}

  destroy() {}
}

module.exports = Robot;
