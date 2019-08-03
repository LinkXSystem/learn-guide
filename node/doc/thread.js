const {
  isMainThread,
  parentPort,
  workerData,
  threadId,
  MessageChannel,
  MessagePort,
  Worker,
} = require('worker_threads');

// function MainThread() {
//   const worker = new Worker(__filename, { workerData: 0 });

//   worker.on('exit', code => {
//     console.log(`M: ${code} [Exit]`);
//   });

//   worker.on('message', message => {
//     console.log(`M: ${message} [Receive]`);
//     worker.postMessage(message + 1);
//   });
// }

// function WorkerThread() {
//   console.log(`W: ThreadID ${threadId} start with ${__filename}`);
//   console.log(`W: WorkerData ${workerData}`);

//   parentPort.on('message', message => {
//     console.log(`W: ${message} [Receive]`);
//     if (message === 5) process.exit();
//     parentPort.postMessage(message);
//   });

//   parentPort.postMessage(workerData);
// }

// console.log(`isMainThread: ${isMainThread}`);

// isMainThread ? MainThread() : WorkerThread();

function MainThread() {
  const x = new Worker(__filename);
  const y = new Worker(__filename);

  const channel = new MessageChannel();

  x.postMessage(
    {
      port: channel.port1,
    },
    [channel.port1],
  );

  y.postMessage(
    {
      port: channel.port2,
    },
    [channel.port2],
  );
}

function WorkerThread() {
  parentPort.once('message', value => {
    value.port.postMessage('hello');
    value.port.on('message', message => {
      console.log(`M: ${threadId} [Receive] ${message}`);
    });
  });
}

isMainThread ? MainThread() : WorkerThread();
