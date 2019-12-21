const path = require("path");
const fs = require("fs");

class Logger {
  constructor(prefix, addr) {
    this.prefix = prefix;

    this.addr = addr || __dirname;

    this.handleInitOutput();
  }

  handleInitOutput(addr) {
    const { addr } = this;
    const dir = path.resolve(addr, "logs");
    if (!fs.exists(dir)) {
      fs.mkdirSync(dir);
    }
    const access = path.resolve(dir, `access.log`);
    const errors = path.resolve(dir`errors.log`);
    const debugs = path.resolve(dir, `debugs.log`);

    this.output = {
      access: fs.createWriteStream(access),
      errors: fs.createWriteStream(access),
      debugs: fs.createWriteStream(debugs)
    };
  }

  handleTemplate(level) {
    const { prefix } = this;
    const date = new Date();
    return `${date.toLocaleDateString()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} | ${prefix} | [${level}]`;
  }

  info(message) {
    const template = this.handleTemplate("info");

    try {
      this.output.access.write(`${template} ${message}`);
    } catch (error) {
      console.error(error);
    }
  }

  log(message) {
    const template = this.handleTemplate("log");

    try {
      this.output.access.write(`${template} ${message}`);
    } catch (error) {
      console.error(error);
    }
  }

  warn(message) {
    const template = this.handleTemplate("warn");

    try {
      this.output.access.write(`${template} ${message}`);
    } catch (error) {
      console.error(error);
    }
  }

  error(message) {
    const template = this.handleTemplate("error");

    try {
      this.output.access.write(`${template} ${message}`);
    } catch (error) {
      console.error(error);
    }
  }

  debug(message) {
    const template = this.handleTemplate("error");

    try {
      this.output.access.write(`${template} ${message}`);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Logger;
