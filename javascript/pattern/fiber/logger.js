/**
 * @description 颜色输出，参考：https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
 */

const FontColor = {
  BLACK: "30",
  RED: "31",
  GREEN: "32",
  YELLOW: "33",
  BLUE: "34",
  PURPLE: "35",
  DARKGREEN: "36",
  WHITE: "37"
};

const BackgroundColor = {
  BLACK: "40",
  DARKRED: "41",
  GREEN: "42",
  YELLOW: "43",
  BLUE: "44",
  PURPLE: "45",
  DARKGREEN: "46",
  WHITE: "47"
};

class Logger {
  static build(prefix) {
    return new Logger(prefix);
  }

  constructor(prefix) {
    this.prefix = prefix;
  }

  color({ font, background, content }) {
    console.log(`\x1b[${background};${font}m ${content} in 19987ms\x1b[0m`);
  }
}

module.exports = {
  BackgroundColor,
  FontColor,
  Logger
};
