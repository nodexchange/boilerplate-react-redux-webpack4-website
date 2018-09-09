/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '!file-loader?name=[name].[ext]!../../static/logo-animation-completed.html';
import '!file-loader?name=[name].[ext]!../../images/logo-animation-bck.png';

import './NavBar.scss';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { navbar: 'sticky', location: '' };
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => { this.mScrollHandler(e); });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', (e) => { this.mScrollHandler(e); });
    this.state = {};
  }

  scrollPageHandler = () => {
    // console.log('Math.random ' + Math.random() + ' e ' + e);
  }

  mScrollHandler = () => {
    const currentTop = window.pageYOffset;
    const scrollPercentage = Math.round((currentTop / document.body.clientHeight) * 100);
    if (scrollPercentage > 20) {
      if (this.state) {
        if (this.state.navbar !== 'scroll') {
          this.setState({ navbar: 'scroll' });
        }
        return;
      }
    } else {
      if (this.state.navbar !== 'sticky') {
        this.setState({ navbar: 'sticky' });
      }
      return;
    }
  }
  mobileNavClickHandler = () => {
    if (this.state) {
      if (this.state.mobileNav === 'open-nav') {
        this.setState({ mobileNav: '' });
        return;
      }
      this.setState({ mobileNav: 'open-nav' });
    }
  }
  navClickHandler = () => {
    if (this.state) {
      if (this.state.mobileNav === 'open-nav') {
        this.setState({ mobileNav: '' });
      }
    }
  }

  retrieveIframeElement = () => {
    const iframeElement = '<iframe frameborder=0 scrolling=no src="./logo-animation-completed.html" width="250" height="90"></iframe>';
    return {
      __html: iframeElement
    };
  }

  render() {
    // eslint-disable-next-line global-require

    let navType = 'sticky';
    let mobileNavType = 'close-nav';
    let brandType = 'brandNormal';
    if (this.state) {
      if (this.state.navbar === 'scroll') {
        navType = 'scroll';
        brandType = 'brandScrolled';
      }
      if (this.state.mobileNav === 'open-nav') {
        mobileNavType = 'openNav';
      }
    }

    const navConfig = [
      {
        to: '/about', name: 'About Us', className: '', onClick: this.navClickHandler
      },
      {
        to: '/work', name: 'Our Work', className: '', onClick: this.navClickHandler
      },
      {
        to: '/services', name: 'What we do', className: '', onClick: this.navClickHandler
      },
      {
        to: '/contact', name: 'Contact', className: 'contactUsButton', onClick: this.navClickHandler
      }
    ];

    const navButtons = [];
    for (let i = 0; i < navConfig.length; i++) {
      navButtons.push(
        <li key={'navBtn' + i}>
          <NavLink activeClassName="activeNavButton" className={navConfig[i].className} to={navConfig[i].to} onClick={navConfig[i].onClick}>{navConfig[i].name}</NavLink>
        </li>
      );
    }

    const logo = [];
    try {
      if (window.location.host !== 'localhot:3000') {
        logo.push(
          <NavLink key="0" to="/" activeStyle={{ color: '#33e0ff' }}>
            <div className={'brandClick'} />
            <div className={'brand' + ' ' + brandType}>
              <div dangerouslySetInnerHTML={this.retrieveIframeElement()} />
            </div>
          </NavLink>
        );
      } else {
        logo.push(
          <NavLink key="0" to="/" activeStyle={{ color: '#33e0ff' }}>
            <div className={'brandClick'} />
          </NavLink>
        );
      }
    } catch (e) {
      logo.push(
        <NavLink key="0" to="/" activeStyle={{ color: '#33e0ff' }}>
          <div className={'brandClick'} />
        </NavLink>
      );
    }

    return (
      <header className={'mainHeader' + ' ' + navType + ' ' + mobileNavType }>
        <div className={'row'}>
          {logo}
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
              {navButtons}
            </ul>
          </nav>
          <div id="navLoader" className={'loader'} />
        </div>
      </header>
    );
  }
}
