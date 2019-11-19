const wait = function(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};

const TaskQueue = [];

class Task {
  constructor(time, func) {
    this.time = time;
    this.func = func;
  }
}

const buildTasks = function(amount) {
  const time = 1000;

  const func = async () => {
    console.log("===============Task===============", Date.now());
    await wait(Math.floor(Math.random() * 5) * time);
    console.log("===============Task===============", Date.now());
  };

  const task = new Task(time, func);

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

(async function Loop() {
  updateTask();

  let start = Date.now();

  while (TaskQueue.length) {
    const current = Date.now();

    const task = TaskQueue.pop();

    await task.func();

    if (current - start > TimeSlice) {
      console.log("==============Sleep===============");
      console.log(Date.now());
      console.log("==============Sleep===============");

      await wait(SleepTime);
      updateTask();
      start = Date.now();
    }
  }
})();
