const { spawn } = require('child_process');

const dir = spawn('dir', []);

dir.stdout.on('data', data => {
  console.log('====================================');
  console.log(`${data}`);
  console.log('====================================');
});

dir.stderr.on('data', data => {
  console.log('====================================');
  console.log(`${data}`);
  console.log('====================================');
});

dir.on('close', code => {
  console.log('====================================');
  console.log(`${code}`);
  console.log('====================================');
});
