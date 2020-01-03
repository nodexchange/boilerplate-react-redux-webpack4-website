import React, { Component } from 'react';

export default class ProductItem extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const styles = require('./ProductItem.scss');

    return (
      <div className={`${styles.productItem}  well`}>
        <a href="./" target="_self">
          <img
            src="./Email, calendar, and contacts APIs that power your app _ Nylas Cloud_files/ic-price-tag@2x.png"
            width=""
            height=""
            alt="CRM"
            sizes="(max-width: 186px) 100vw, 186px"
          />
          <h2>CRM</h2>
          <p>Import conversations and new contacts across every mailbox &amp; calendar.</p>
          <h6>Learn More</h6>
        </a>
      </div>
    );
  }
}
