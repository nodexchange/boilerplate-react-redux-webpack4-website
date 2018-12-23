import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { ScrollToTopOnMount } from 'components';
import data from './legal-data.json';
import './Legal.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class Legal extends Component {
  render() {
    const topStyle = { top: 0 + '%' };
    return (
      <div className={'containerLegal'}>
        <Helmet title="Legal & Quartile" />
        <div id={'LegalInner'}>
          <div className={'smallBox'} style={topStyle}>
            <span className={'header inView'}>{data.Legal.header}</span>
            <div className={'description inView'}>
              {data.Legal.description.split('\n').map((i) =>
                <div className={'descText'} key={i}>{i}</div>
              )}
            </div>
          </div>
        </div>
        <ScrollToTopOnMount />
      </div>
    );
  }
}
