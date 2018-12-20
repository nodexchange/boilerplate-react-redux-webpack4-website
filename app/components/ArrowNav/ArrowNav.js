/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './ArrowNav.scss';
import Scroll from './../../helpers/Scroll';

// eslint-disable-next-line react/prefer-stateless-function
export default class ArrowNav extends Component {
  arrowUpHandler = () => {
    this.currentPage -= 1;
    if (this.currentPage < 1) {
      this.currentPage = 1;
    }
    Scroll.scrollToSection(this.currentPage, 'up');
    // TODO(martin): handle 1
  }

  arrowDownHandler = () => {
    this.currentPage += 1;
    if (this.currentPage > this.props.maxPages) {
      this.currentPage = 1;
    }
    Scroll.scrollToSection(this.currentPage, 'down');
    // TODO(martin): handle over max page
  }

  render() {
    // eslint-disable-next-line global-require
    this.currentPage = 1;
    if (this.props.offsetRatio) {
      this.currentPage = Math.floor(this.props.offsetRatio + 1.3);
    }
    if (this.props.maxPages === 1) {
      return (<div className={'arrowNav'} />);
    }
    if (this.currentPage > this.props.maxPages) {
      return (<div className={'arrowNav'} />);
    }
    return (
      <div className={'arrowNav'}>
        <button className={'baseArrow arrowUp'} onClick={this.arrowUpHandler} />
        <button className={'baseArrow arrowDown'} onClick={this.arrowDownHandler} />
        <div className={'counter'}>
          <span className={'counterCurrent'}>{this.currentPage}</span>
          <span className={'counterOf'}> of </span>
          <span className={'currentMax'}>{this.props.maxPages}</span>
        </div>
      </div>
    );
  }
}

ArrowNav.propTypes = {
  maxPages: PropTypes.number,
  offsetRatio: PropTypes.number
}
