import React, { Component } from 'react';

import { PropTypes } from 'prop-types';

import './Clouds.css';

export default class Clouds extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    info: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    load: PropTypes.func.isRequired
  };

  render() {
    // https://www.clicktorelease.com/blog/how-to-make-clouds-with-css-3d/
    // const { info, load } = this.props; // eslint-disable-line no-shadow
    return (
      <div className='backgroundRow' />
    );
  }
}
