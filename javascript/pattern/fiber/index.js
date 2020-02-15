const { wait } = require("./utils");
const { Task } = require("./task");

const { Logger, FontColor, BackgroundColor } = require("./logger");

const logger = Logger.build("fiber");

const TaskQueue = [];

const buildTasks = function(amount) {
  const time = 1000;

  const func = async () => {
    console.log("===============Task===============", Date.now());
    await wait(Math.floor(Math.random() * 5) * time);
    console.log("===============Task===============", Date.now());
  };

  const task = new Task({ func });

  return new Array(amount).fill(task);
};

const updateTask = function() {
  const amount = Math.floor(Math.random() * 10);
  const tasks = buildTasks(amount);

  tasks.forEach(task => {
    TaskQueue.push(task);
  });
};

const TimeSlice = 2000;
const SleepTime = 3000;

const TaskLoop = async function() {
  updateTask();

  let start = Date.now();

  while (TaskQueue.length) {
    const current = Date.now();

    const task = TaskQueue.pop();

    await task.func();

    if (current - start > TimeSlice) {
      // 让出控制权限
      setTimeout(() => {
        TaskLoop();
      }, 0);

      AnotherLoop();

      break;
    }
  }
};

const AnotherLoop = function() {
  for (let i = 0; i < 1000; i++) {
    if (i === 1) {
      console.log("=============Another==============");
      console.log(Date.now(), "Another Start !");
      console.log("=============Another==============");
    }

    if (i === 1) {
      console.log("=============Another==============");
      console.log(Date.now(), "Another End !!");
      console.log("=============Another==============");
    }
  }
};

(async function Loop() {
  TaskLoop();
  AnotherLoop();
})();
