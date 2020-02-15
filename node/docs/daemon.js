const { spawn } = require('child_process');
const process = require('process');

const subprocess = spawn('node', ['children.js'], {
  detached: true,
  // 设置父进程与子进程的通信方式
  stdio: 'ignore',
});

subprocess.unref();
