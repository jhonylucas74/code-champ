import React from 'react';
import './game-over.scss';
import {connect} from 'react-redux';
import exercises from '../../constants/exercises/';

class GameOver extends React.Component {
  getNote() {
    let tests = [];

    for (let history of this.props.history) {
      tests = tests.concat(history.result.tests);
    }
    
    const total = tests.length;
    const corrects = tests.filter(elm => elm.status == 'sucess').length;
    return Number((corrects * 10 ) / total).toFixed(1);
  }

  encode (note) {
    return btoa(new String(note))
  }

  showModal () {
    return exercises.length === this.props.history.length
  }

  render () {
    if (!this.showModal()) return null;

    const note = this.getNote();
    return (
      <div className="game-over">
        <div className="game-over__box">
          <p>Fim de jogo!</p>
          <h1>{note}</h1>
          <div className="code">
            {this.encode(note)}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ history }) => {
  return { history };
}

export default connect(mapStateToProps)(GameOver)