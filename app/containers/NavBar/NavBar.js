import React, { Component } from 'react';
import { IndexLink, Link, browserHistory } from 'react-router';

import './NavBar.scss';

export default class NavBar extends Component {
  render() {
    let navType = 'sticky';
    let mobileNavType = 'close-nav';
    const navButtons = [];
    const logo = [];

    return (
      <header className={'mainHeader' + ' ' + navType + ' ' + mobileNavType }>
        <div className='row'>
          <div
            role="button"
            tabIndex="0"
            className={'mobileToggle'}
            onClick={this.mobileNavClickHandler}>
            <span>{}</span>
            <span>{}</span>
            <span>{}</span>
          </div>
          <nav className={'navBar'}>
            <ul>
            </ul>
          </nav>
          <div id="navLoader" className={'loader'} />
        </div>
      </header>
    );
    /* eslint-enable */
  }
}
