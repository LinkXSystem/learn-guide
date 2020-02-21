let instance = null;

class Robot {
  number: number;

  static getInstance() {
    if (!instance) {
      instance = new Robot();
    }
    return instance;
  }

  constructor() {
    this.number = Date.now();
  }

  startup() {
    const { number } = this;
    console.log(`I am the robot of ${number}`);
  }
}

(function() {
  const x = Robot.getInstance();
  const y = Robot.getInstance();

  console.warn(x === y);
})();
