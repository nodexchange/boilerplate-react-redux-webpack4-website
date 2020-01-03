
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CookiePanel.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class CookiePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.state.cookiePanelState = 'in';
  }

  componentDidMount() {
    if (document.cookie.indexOf('quartilevisitedconsent=') >= 0) {
      // They've been here before.
      // alert('hello again');
      setTimeout(() => {
        this.setState({ cookiePanelState: 'cookieOut' });
      }, 1000);
    } else {
      // set a new cookie
      // eslint-disable-next-line
      this.setState({ cookiePanelState: 'cookieIn' });
    }
  }

  setTheCookie = () => {
    const expiry = new Date();
    expiry.setTime(expiry.getTime() + (7 * 12 * 60 * 60 * 1000)); // seven days... a day... sixy minutes
    // expiry.setTime(expiry.getTime() + (1000)); // seven days... a day... sixy minutes
    // Date()'s toGMTSting() method will format the date correctly for a cookie
    document.cookie = 'quartilevisitedconsent=yes; expires=' + expiry.toGMTString();
    // alert('this is your first time');
  }

  cookieClosePanelHandler = () => {
    this.setTheCookie();
    this.setState({ cookiePanelState: 'cookieOut' });
  }

  render() {
    return (
      <div id="cookieconsent" className={this.state.cookiePanelState}>
        {/* eslint-disable-next-line */}
        <div className="closeBtn" onClick={this.cookieClosePanelHandler}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <h4>Cookie Policy</h4>
        <p>This website uses cookies to ensure you get the best experience on our website. By closing, you are agreeing to cookies being used in line with our{'  '}
          <Link to="/privacy">Privacy Policy</Link>.
        </p>
      </div>
    );
  }
}
