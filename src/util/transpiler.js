import * as Babel from '@babel/standalone';

class Transpiler {
  constructor () {
    this.worker = null;
    this.handleMessage = this.handleMessage.bind(this);
  }

  stop () {
    if (this.worker) this.worker.terminate();
  }

  handleMessage(event) {
    const data = JSON.parse(event.data);
    console.log(data);
    if (data.finish) {
      this.stop()
    }
  }

  execute(code, args = []) {
    this.stop();
    this.worker = new Worker('../workers/core.js', { type: 'module' });
    this.worker.onmessage = this.handleMessage;

    const babelcode = Babel.transform(code, { presets: ['es2015'] }).code;
    console.log(babelcode);
    const params = {
      program: babelcode,
      args,
    }

    this.worker.postMessage(JSON.stringify(params));
  }
}

export default new Transpiler();
