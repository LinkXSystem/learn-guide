const IP = require("./ip");

function logger(request, response) {
  const { url, method } = request;
  const { runtime } = this;
  const ip = IP.getClientIPAddress(request);

  runtime.logger.info(`'${method} ${url} | ${ip}'`);
}

module.exports = {
  logger
};
