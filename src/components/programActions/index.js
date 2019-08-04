import React from 'react';
import Transpiler from 'Util/transpiler';
import {connect} from 'react-redux';
import './programActions.scss';

class ProgramActions extends React.Component {
  executeProgram() {
    Transpiler.execute(this.props.code, this.props.inputs);
  }

  render () {
    return (
      <div className="program-actions">
        <button onClick={() => this.executeProgram()} className="button">
          Executar código
        </button>
        <button className="button">
          Enviar e avaliar
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ code, inputs }) => {
  return { code, inputs };
}

export default connect(mapStateToProps)(ProgramActions);