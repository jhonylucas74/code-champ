import React from 'react';
import './header.scss';

export default class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <p className="header__player-name">
          Champ Code
        </p>
      </header>
    )
  }
}
