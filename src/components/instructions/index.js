import React from 'react';
import ProgramActions from '../programActions/'
import './instructions.scss';

export default class Intructions extends React.Component {
  render () {
    return (
      <div className="instructions">
        <ProgramActions />
      </div>
    )
  }
}
