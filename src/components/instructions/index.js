import React from 'react';
import ProgramActions from '../programActions/'
import Markdown from 'react-markdown';
import './instructions.scss';

export default class Intructions extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      source: `
# Your markdown here

Two cars (X and Y) leave in the same direction. The car X leaves with a constant speed of 60 km/h and the car Y leaves with a constant speed of 90 km / h.

In one hour (60 minutes) the car Y can get a distance of 30 kilometers from the X car, in other words, it can get away one kilometer for each 2 minutes.


## hey mom i'm here

In one hour (60 minutes) the car Y can get a distance of 30 kilometers from the X car, in other words, it can get away one kilometer for each 2 minutes.

In one hour (60 minutes) the car Y can get a distance of 30 kilometers from the X car, in other words, it can get away one kilometer for each 2 minutes.

dica user \`\`write('text')\`\` para escrever e \`\`read()\`\` para carregar entrada de texto.
      `
    }
  }
  render () {
    return (
      <div className="instructions">
        <div className="content">
          <Markdown source={this.state.source} />
        </div>
        <ProgramActions />
      </div>
    )
  }
}
