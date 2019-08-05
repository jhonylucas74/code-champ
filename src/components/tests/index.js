import React from 'react';
import Classnames from 'classnames';
import {connect} from 'react-redux';
import {cleanTests} from 'Redux/tests/actions';
import exercises from '../../constants/exercises/';
import {setExercise} from 'Redux/exercise/actions';
import {cleanInputs} from 'Redux/inputs/actions';
import {cleanOutputs} from 'Redux/output/actions';
import './tests.scss';

class Tests extends React.Component {

  cleanRegex (input) {
    const str = input.source;
    return str.replace(/\.\*|\\/g,'')
  }

  showButton() {
    return this.props.tests.every(elm => elm.status == 'sucess' || elm.status == 'fail')
  }

  next () {
    this.props.cleanInputs();
    this.props.cleanTests();
    this.props.cleanOutputs();
    this.props.setExercise(exercises[this.props.history.length]);
  }

  render() {
    if (this.props.tests.length === 0 ) return null;

    return (
      <div className="tests">
        <div className="tests__box">
          <h1>Rodandos testes no código</h1>
          <ul>
            {this.props.tests.map(elm => {
              const style = Classnames({
                sucess: elm.status === 'sucess',
                fail: elm.status === 'fail',
              })

              return (
                <li className={style}>
                  Entrada: {elm.inputs.join(', ')},
                  saída experada: {this.cleanRegex(elm.output)}
                </li>
              )
            })}
          </ul>
          { this.showButton() &&
            <button
              onClick={() => this.next()}
              className="next-step">
              Próximo desafio
            </button>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ tests, history }) => {
  return { tests, history }
}

export default connect(mapStateToProps, {
  cleanTests,
  setExercise,
  cleanInputs,
  cleanOutputs
})(Tests);