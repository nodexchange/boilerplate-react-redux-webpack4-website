import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { ScrollToTopOnMount, SectionItem } from 'components';
import throttle from '../../helpers/Throttle';
import data from './about-data.json';
import './About.scss';

export default class About extends Component {
  componentDidMount() {
    this.world = document.getElementById('world');
    this.viewport = document.getElementById('viewport');
    this.worldXAngle = 0;
    this.worldYAngle = 0;
    this.d = 0;
    this.mouseActive = true;

    window.addEventListener('mousemove', throttle(this.mouseHandler, 10));
    window.addEventListener('mouseout', (e) => this.mouseLeaveHandler(e));
    window.addEventListener('mouseover', (e) => this.mouseOverHandler(e));
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', throttle(this.mouseHandler, 10));
    window.removeEventListener('mouseout', (e) => this.mouseLeaveHandler(e));
    window.removeEventListener('mouseover', (e) => this.mouseOverHandler(e));
  }

  mouseHandler = (e) => {
    this.worldYAngle = -(0.5 - (e.clientX / window.innerWidth)) * 180;
    this.worldXAngle = (0.5 - (e.clientY / window.innerHeight)) * 180;
    this.updateView();
  }
  mouseOverHandler = () => {
    this.mouseActive = true;
    this.world.style.transition = 'all 0.1s';
  }
  mouseLeaveHandler = (e) => {
    if (e.target.className === 'smallBox infoInView' ||
      e.target.className === 'aboutBg imageBg' ||
      e.target.className === 'descText' ||
      e.target.parentNode.className === 'smallBox infoInView') {
      return;
    }
    this.mouseActive = false;
    this.world.style.transition = 'all 1s';
    this.world.style.transform = 'translateZ(0px) rotateX(0deg) rotateY(0deg)';
  }
  updateView() {
    if (!this.mouseActive) {
      return;
    }
    this.world.style.transform = 'translateZ( ' + this.d + 'px ) rotateX( ' + this.worldXAngle + 'deg) rotateY( ' + this.worldYAngle + 'deg)';
  }

  render() {
    return (
      <div className={'about'}>
        <Helmet title="About Us" />
        <div id="viewport">
          <div id="world"></div>
        </div>
        <SectionItem inView key={0} offset={0} order={0} {...data['About Us']} link="about" />
        <ScrollToTopOnMount />
      </div>
    );
  }
}
