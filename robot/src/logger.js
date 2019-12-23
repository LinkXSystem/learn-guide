const path = require("path");
const fs = require("fs");

const Type = {
  INFO: "INFO",
  WARN: "WARN",
  LOG: "LOG",
  ERROR: "ERROR",
  DEBUG: "DEBUG"
};

class Logger {
  constructor(prefix, addr) {
    this.prefix = prefix;

    this.addr = addr || __dirname;

    this.handleInitOutput();
  }

  handleInitOutput() {
    const { addr } = this;
    const dir = path.resolve(addr, "logs");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    const access = path.resolve(dir, `access.log`);
    const errors = path.resolve(dir, `errors.log`);
    const debugs = path.resolve(dir, `debugs.log`);

    this.output = {
      access: fs.createWriteStream(access, { flags: "a" }),
      errors: fs.createWriteStream(errors, { flags: "a" }),
      debugs: fs.createWriteStream(debugs, { flags: "a" })
    };
  }

  handleTemplate(level) {
    const { prefix } = this;
    const date = new Date();
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minute =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const second =
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    return `${date.toLocaleDateString()} ${hour}:${minute}:${date.getSeconds()} | ${prefix} | [${level}]`;
  }

  info(message) {
    const template = this.handleTemplate(Type.INFO);

    try {
      this.output.access.write(`${template} ${message}`);
    } catch (error) {
      console.error(error);
    }
  }

  log(message) {
    const template = this.handleTemplate(Type.LOG);

    try {
      this.output.access.write(`${template} ${message}\n`);
    } catch (error) {
      console.error(error);
    }
  }

  warn(message) {
    const template = this.handleTemplate(Type.WARN);

    try {
      this.output.access.write(`${template} ${message}\n`);
    } catch (error) {
      console.error(error);
    }
  }

  error(message) {
    const template = this.handleTemplate(Type.ERROR);

    try {
      this.output.access.write(`${template} ${message}\n`);
    } catch (error) {
      console.error(error);
    }
  }

  debug(message) {
    const template = this.handleTemplate(Type.DEBUG);

    try {
      this.output.access.write(`${template} ${message}\n`);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Logger;
