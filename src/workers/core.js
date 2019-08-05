let ___args = []

function write (log) {
  const data = { log };
  postMessage(JSON.stringify(data));
}

function read () {
  return (___args.shift() || {}).value;
}

function endProgram() {
  const data = { finish: true, log: 'fim do programa.' };
  postMessage(JSON.stringify(data));
}

function executeProgram(program) {
  try {
    eval(program);
  } catch (err) {
    const data = {
      error: true,
      stack: err.stack,
      log: err.message + err.stack
    }

    postMessage(JSON.stringify(data));
  }

  endProgram();
}

addEventListener('message', event => {
  const data = JSON.parse(event.data);
  ___args = data.args;
  executeProgram(data.program);
});
