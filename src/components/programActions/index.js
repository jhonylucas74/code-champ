import React from 'react';
import Transpiler from 'Util/transpiler';
import {connect} from 'react-redux';
import exercises from '../../constants/exercises/';
import {setExercise} from 'Redux/exercise/actions';
import {addHistory} from 'Redux/history/actions';
import {
  setInputs,
  cleanInputs
} from 'Redux/inputs/actions';
import {
  setTests,
  cleanTests,
  updateTest
} from 'Redux/tests/actions';
import './programActions.scss';
import uuid from 'uuid-with-v6';

class ProgramActions extends React.Component {
  constructor (props) {
    super(props);
    this.assertTest = this.assertTest.bind(this);
  }

  componentDidMount () {
    this.props.setExercise({...exercises[this.props.history.length] });
  }

  executeProgram () {
    Transpiler.execute(this.props.code, this.props.inputs);
  }

  assertTest (regex) {
    const finish = this.props.output.filter(elm => elm.finish)[0];

    if (finish) {
      const output = this.props.output.map(elm => elm.message);
      if (regex.test(output[0])) {
        return true;
      } else {
        return false;
      }
    }

    return null;
  }

  runTest (test) {
    return new Promise((resolve, reject) => {
      this.props.cleanInputs();
      this.props.setInputs(test.inputs);

      const inputs = test.inputs.map(elm => ({ value: elm }))
      Transpiler.execute(this.props.code, inputs);

      const interval = setInterval(() => {
        const result = this.assertTest(test.output);

        if (result === true) {
          clearInterval(interval);
          resolve();
        }

        if (result === false) {
          clearInterval(interval);
          reject();
        }
      }, 200);
    })
  }

  async evaluate () {
    const {exercise} = this.props;
    console.log('running test: ' + exercise.title);

    const tests = exercise.tests.map(elm => {
      elm.id = uuid.v6();
      elm.status = null;
      return elm;
    });

    this.props.setTests(tests);

    for (let test of tests) {
      try {
        await this.runTest(test);
        this.props.updateTest({ id: test.id, status: 'sucess'})
      } catch (err) {
        this.props.updateTest({ id: test.id, status: 'fail'})
      }
    }

    this.props.addHistory({
      name: exercise.title,
      tests: this.props.tests
    })
  }

  render () {
    return (
      <div className="program-actions">
        <button onClick={() => this.executeProgram()} className="button">
          Executar código
        </button>
        <button onClick={() => this.evaluate()} className="button">
          Enviar e avaliar
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ code, inputs, output, exercise, tests, history }) => {
  return { code, inputs, output, exercise, tests, history };
}

export default connect(mapStateToProps, {
  setExercise,
  setInputs,
  cleanInputs,
  setTests,
  cleanTests,
  updateTest,
  addHistory
})(ProgramActions);
