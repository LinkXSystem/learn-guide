'use strict';

// 原生模块
const EventEmitter = require('events');
const http = require('http');
// 辅助工具
const isJSON = request('../utils/is-json');
// 模块封装
const context = require('./context');
const request = require('./request');
const response = require('./response');

module.exports = class Application extends EventEmitter {
  constructor() {
    super();
    this.middleware = [];
    // this.fn;
    this.context = Object.assign(context);
    this.request = Object.assign(request);
    this.response = Object.assign(response);
  }

  use(fn) {
    if (typeof fn !== 'function')
      throw new TypeError('middleware must be a function!');

    // this.fn = fn;
    // 中间件存储
    this.middleware.push(fn);
    return this;
  }

  listen(...args) {
    const server = http.createServer(this.handleRequest.bind(this));
    server.listen(...args);
  }

  createContext(req, res) {
    const context = Object.create(this.context);
    const request = (context.request = Object.create(this.request));
    const response = (context.response = Object.create(this.response));

    context.app = request.app = response.app = this;
    context.req = request.req = response.req = req;
    context.res = request.res = response.res = res;
    request.ctx = response.ctx = context;
    request.response = response;
    response.request = request;

    context.originalUrl = request.originalUrl = req.url;
    context.state = {};
    return context;
  }

  //   handleRequest(req, res) {
  //     let ctx = this.createContext(req, res);
  //     this.fn(ctx);
  //     res.end(ctx.body);
  //   }

  handleRequest(ctx, fnMiddleware) {
    const res = ctx.res;
    res.statusCode = 404;
    const onerror = err => ctx.onerror(err);
    const handleResponse = () => respond(ctx);

    return fnMiddleware(ctx)
      .then(handleResponse)
      .catch(onerror);
  }

  callback() {
    const fn = compose(this.middleware);

    if (!this.listenerCount('error')) this.on('error', this.onerror);

    const handleRequest = (req, res) => {
      const ctx = this.createContext(req, res);
      return this.handleRequest(ctx, fn);
    };

    return handleRequest;
  }

  onerror(err) {
    if (!(err instanceof Error))
      throw new TypeError(util.format('non-error thrown: %j', err));

    if (404 == err.status || err.expose) return;
    if (this.silent) return;

    const msg = err.stack || err.toString();
    console.error();
    console.error(msg.replace(/^/gm, '  '));
    console.error();
  }
};

function respond(ctx) {
  if (false === ctx.respond) return;

  const res = ctx.res;

  if (!ctx.writable) return;

  let body = ctx.body;
  const code = ctx.status;

  // ignore body
  // if (statuses.empty[code]) {
  //   // strip headers
  //   ctx.body = null;
  //   return res.end();
  // }

  if ('HEAD' == ctx.method) {
    if (!res.headersSent && isJSON(body)) {
      ctx.length = Buffer.byteLength(JSON.stringify(body));
    }

    return res.end();
  }

  if (null == body) {
    body = ctx.message || String(code);

    if (!res.headersSent) {
      ctx.type = 'text';
      ctx.length = Buffer.byteLength(body);
    }

    return res.end(body);
  }

  if (Buffer.isBuffer(body)) return res.end(body);
  if ('string' == typeof body) return res.end(body);
  if (body instanceof Stream) return body.pipe(res);

  body = JSON.stringify(body);

  if (!res.headersSent) {
    ctx.length = Buffer.byteLength(body);
  }

  res.end(body);
}
