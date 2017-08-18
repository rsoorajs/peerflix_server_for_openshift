var spawn = require('child_process').spawn;
var start = spawn('sh', ['start.sh','']);

start.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

start.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

start.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
