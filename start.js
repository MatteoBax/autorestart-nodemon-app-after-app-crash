const { spawn } = require('child_process');
const config = require('./config.json');
function spawnNodemon() {
  const cp = spawn('nodemon', [config.file, '--watch', config.pathToWatch], {
    stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
  });

  return cp;
}

var app = spawnNodemon();
app.stderr.on('data', (data) => {
  console.error(`${data}`);
});
app.stdout.on('data', (data) => {
  console.error(`${data}`);
});

app.on('message', function (event) {
  if (event.type === 'start') {
  } else if (event.type === 'crash') {
    app.send('restart');
  }
});
