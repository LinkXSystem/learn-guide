const cluster = require('cluster');
const http = require('http');

if (cluster.isMaster) {
  let count = 0;

  setInterval(() => {
    console.log('====================================');
    console.log(`num = ${count}`);
    console.log('====================================');
  }, 1000);

  const handle = message => {
    if (message.cmd && message.cmd === 'notify') {
      count += 1;
    }
  };

  const cpus = require('os').cpus().length;

  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }

  for (const i in cluster.workers) {
    cluster.workers[i].on('message', handle);
  }
} else {
  http
    .Server((req, res) => {
      res.writeHead(200);
      res.end('HELLO CLUSTER');

      process.send({
        cmd: 'notify',
      });
    })
    .listen(8000);
}

cluster.on('online', worker => {
  console.log('====================================');
  console.log(worker);
  console.log('====================================');
});
