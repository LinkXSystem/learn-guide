class Runtime {
  constructor() {}

  extend(name, instance) {
    this[name] = instance;
  }
}

module.exports = Runtime;
