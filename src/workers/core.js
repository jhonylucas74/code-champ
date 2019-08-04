function write (log) {
  const data = { log };
  postMessage(JSON.stringify(data));
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
      log: err.message
    }

    postMessage(JSON.stringify(data));
  }

  endProgram();
}

addEventListener('message', event => {
  const data = JSON.parse(event.data);
  executeProgram(data.program)
});
