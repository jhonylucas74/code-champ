import React, {Fragment} from 'react';
import { Switch, Route } from 'react-router-dom';
import Editor from './routes/editor/';

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={Editor} />
        </Switch>
      </Fragment>
    )
  }
}
