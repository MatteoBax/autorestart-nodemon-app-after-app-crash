const { spawn } = require('child_process');

function spawnNodemon() {
  const cp = spawn('nodemon', ['/sdcard/bot/main.js', '--watch', '/sdcard/bot'], {
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
  }else if (event.type === 'exit') {
    app.send('quit');
  }
});
