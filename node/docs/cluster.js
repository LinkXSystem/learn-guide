const cluster = require('cluster');
const http = require('http');

const cpuNumbers = require('os').cpus().length;

if (cluster.isMather) {
  for (let i = 0; i < cpuNumbers; i++) {
    cluster.fork();
  }
} else {
  http
    .createServer((req, res) => {
      res.end(`C: WorkerID ${process.pid}`);
    })
    .listen(3000);

  console.log(`Worker ${process.pid} started !`);
}
