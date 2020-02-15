class Task {
  static getLevelByMAX_SAFE_INTEGER() {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  }

  constructor({ level, func }) {
    this.level = level || Task.getLevelByMAX_SAFE_INTEGER();
    this.func = func;
  }

  run() {
    return this.func();
  }
}

module.exports = { Task };
