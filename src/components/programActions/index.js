import React from 'react';
import './programActions.scss';

export default class ProgramActions extends React.Component {
  render () {
    return (
      <div className="program-actions">
        <button className="button">
          Executar código
        </button>
        <button className="button">
          Enviar e avaliar
        </button>
      </div>
    )
  }
}
