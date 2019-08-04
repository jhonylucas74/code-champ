import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import {connect} from 'react-redux';
import {setCode} from 'Redux/code/actions'
import './code-editor.scss';

class CodeEditor extends React.Component {
  constructor (props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  editorDidMount(editor, monaco) {
    editor.focus();
  }

  onChange(newValue, e) {
    console.log('onChange', newValue, e);
    this.props.setCode(newValue);
  }

  render () {
    const options = {
      selectOnLineNumbers: true,
      tabSize: 2,
      minimap: {
        enabled: false
      }
    };

    return (
      <div className="code-editor">
        <MonacoEditor
          width="100%"
          height="100%"
          language="javascript"
          theme="vs-dark"
          value={this.props.code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ code }) => {
  return { code }
}

export default connect(mapStateToProps, {
  setCode
})(CodeEditor)