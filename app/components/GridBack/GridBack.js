/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './GridBack.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class GridBack extends Component {
  static propTypes = {
    link: PropTypes.string.isRequired
  };
  render() {
    // eslint-disable-next-line global-require

    return (
      <Link to={'/' + this.props.link}>
        <div className={'gridBack'}>{}</div>
      </Link>
    );
  }
}
