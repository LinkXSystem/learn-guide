const http = require('http');
const Runtime = require('./runtime');
const Logger = require('./logger');

const Utils = require('./utils');
const { Method } = require('./constants');

class Robot {
  static factory(configuration) {
    const { port } = configuration;
    const robot = new Robot(configuration);

    http
      .createServer((request, response) => {
        robot.launcher(request, response);
      })
      .listen(port || 4200);

    return robot;
  }

  constructor(configuration) {
    const { error, name } = configuration || {};
    let temp_ = configuration || {};

    if (!error) {
      temp_ = Object.assign(temp_, {
        error: { status: false, message: "This is Github's Robot !!!" }
      });
    }

    if (!name) {
      temp_ = Object.assign(temp_, {
        name: 'ROBOT'
      });
    }

    this.config = temp_;

    this.init();
  }

  init() {
    const { logger, name } = this.config;
    this.runtime = new Runtime();
    this.plugins = [];
    this.router = new Map();

    this.runtime.extend('logger', logger || new Logger(name));
  }

  launcher(request, response) {
    const { url, method, headers } = request;

    let buffer = [];

    request.on('error', info => {
      buffer = [];
      this.error(response);
    });

    request.on('data', chunk => {
      buffer.push(chunk);
    });

    request.on('end', () => {
      const callback = this.router.get(`${url}|${method}`);
      if (callback) {
        const series = [].concat(this.plugins, [callback]);
        return Utils.flow(request, response, series);
      }

      this.error(response);
    });
  }

  error(response) {
    const { error } = this.config;
    response.end(JSON.stringify(error));
  }

  plugin(callback) {
    const func = callback.bind(this);
    this.plugins.push(func);
  }

  bind(path, method, callback) {
    this.router.set(`${path}|${method}`, callback);
  }

  unbind(path, method) {
    const key = `${path}|${method}`;
    if (this.router.get(key)) {
      this.router.delete(key);
    }
  }

  get(path, callback) {
    this.bind(path, Method.GET, callback);
  }

  post(path, callback) {
    this.bind(path, Method.POST, callback);
  }

  // TODO: 未实现
  group() {}

  destroy() {}
}

module.exports = Robot;
