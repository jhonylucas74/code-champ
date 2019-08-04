import React from 'react';
import Classnames from 'classnames';
import {connect} from 'react-redux'
import './output.scss';

class Output extends React.Component {
  
  componentDidUpdate() {
    if (this.outputElm) {
      this.outputElm.scrollBy({
        top: this.outputElm.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  render () {
    const { output } = this.props;

    return (
      <div className="output">
        <div className="output__header">Saída</div>
        <ul ref={(ref) => this.outputElm = ref} id="output-list">
          { output.map(elm => {
            const style = Classnames({
              error: elm.error,
              finish: elm.finish
            });

            return (
              <li key={elm.id} className={style}>
                {elm.message}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ output }) => {
  return { output };
}

export default connect(mapStateToProps)(Output);
