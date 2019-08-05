import React from 'react';
import ProgramActions from '../programActions/'
import GameOver from '../game-over/'
import Markdown from 'react-markdown';
import {connect} from 'react-redux';
import Tests from '../tests/';
import './instructions.scss';

class Intructions extends React.Component {
  render () {
    const {exercise} = this.props;

    return (
      <div className="instructions">
        <div className="content">
          <Markdown source={exercise.text} />
        </div>
        <Tests />
        <ProgramActions />
        <GameOver />
      </div>
    )
  }
}

const mapStateToProps = ({ exercise }) => {
  return { exercise };
}

export default connect(mapStateToProps)(Intructions);
