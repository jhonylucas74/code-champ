import React from 'react';
import {connect} from 'react-redux';
import {
  addInput,
  updateInput,
  removeInput
} from 'Redux/inputs/actions'
import './inputs-list.scss';

class InputsList extends React.Component {
  constructor (props) {
    super(props);

    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput (value, id) {
    this.props.updateInput({ id, value });
  }

  render () {
    const {inputs} = this.props;

    return (
      <div className="inputs-list">
        <div className="inputs-list__header">Entradas</div>
        <ul>
          {inputs.map(elm =>
            <li key={elm.id}>
              <input
                value={elm.value}
                type="text"
                onChange={(e) => this.onChangeInput(e.target.value, elm.id)}/>

              <span onClick={() => this.props.removeInput(elm.id)} className="close">x</span>
            </li>
          )}
          <li onClick={() => this.props.addInput()}>inserir nova entrada</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ inputs }) => {
  return { inputs };
}

export default connect(mapStateToProps, {
  addInput,
  updateInput,
  removeInput
})(InputsList)