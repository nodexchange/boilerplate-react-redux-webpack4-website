/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './GridCard.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class GridCard extends Component {
  static propTypes = {
    header: PropTypes.string,
    description: PropTypes.string,
    imageClass: PropTypes.string,
    order: PropTypes.number,
    link: PropTypes.string.isRequired
  };
  render() {
    // eslint-disable-next-line global-require

    return (
      <li className={'gridItem' + ' ' + 'grid' + this.props.order}>
        <Link to={'/' + this.props.link}>
          <div className={'gridBackground' + ' ' + 'this.props.imageClass'} />
          <div className={'gridTitle'}>
            <h2>{this.props.header}</h2>
            <p>
              {this.props.description}
            </p>
          </div>
        </Link>
      </li>
    );
  }
}
