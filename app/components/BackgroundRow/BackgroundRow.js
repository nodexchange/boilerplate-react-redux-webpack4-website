import React, { Component } from 'react';

export default class BackgroundRow extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const styles = require('./BackgroundRow.scss');
    return (
      <div className={`${styles.backgroundRow} ${styles.section}`} />
    );
  }
}
