import React from 'react';
import Header from 'Components/header/';
import CodeEditor from 'Components/code-editor/';
import Instructions from 'Components/instructions/';
import InputsList from 'Components/inputs-list/';
import Output from 'Components/output';
import './editor.scss';

export default class Editor extends React.Component {
  render() {
    return (
      <div className="route-editor">
        <Header />
        <CodeEditor />
        <Instructions />
        <InputsList />
        <Output />
      </div>
    )
  }
}