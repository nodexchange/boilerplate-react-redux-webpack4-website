import React, { Component } from 'react';
import threeEntryPoint from './threejs/threeEntryPoint';
import './ThreeJsTest.scss';

export default class ThreeJsTest extends Component {
  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }
  render() {
    return (
      <div className="header-header" ref={element => this.threeRootElement = element} />
    );
}
}
