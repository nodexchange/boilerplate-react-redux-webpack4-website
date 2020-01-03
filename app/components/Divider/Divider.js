import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './Divider.scss';

export default class Divider extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    colour: PropTypes.string
  };
  render() {
    return (
      <div className={'divider ' + this.props.colour} />
    );
  }
}
