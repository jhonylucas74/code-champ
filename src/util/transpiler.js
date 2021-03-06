import * as Babel from '@babel/standalone';
import Store from 'Redux/';
import {addOutput, cleanOutputs} from 'Redux/output/actions';

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
    Store.dispatch(addOutput(data));
    
    if (data.finish) {
      this.stop()
    }
  }

  execute(code, args = []) {
    Store.dispatch(cleanOutputs());
    this.stop();
    this.worker = new Worker('../workers/core.js', { type: 'module' });
    this.worker.onmessage = this.handleMessage;

    try {
      const babelcode = Babel.transform(code, { presets: ['es2015'] }).code;
      console.log(babelcode);
      const params = {
        program: babelcode,
        args,
      }

      this.worker.postMessage(JSON.stringify(params));
    } catch (err) {
      Store.dispatch(addOutput({
        error: true,
        log: err.message + err.stack
      }));
    }
  }
}

export default new Transpiler();
