import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { ScrollToTopOnMount } from 'components';
import data from './gdpr-data.json';
import './Gdpr.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class Gdpr extends Component {
  render() {
    const topStyle = { top: 0 + '%' };
    return (
      <div className={'containerGdpr'}>
        <Helmet title="Gdpr & Quartile" />
        <div id={'gdprInner'}>
          <div className={'smallBox'} style={topStyle}>
            <span className={'header inView'}>{data.Gdpr.header}</span>
            <div className={'description inView'}>
              {data.Gdpr.description.split('\n').map((i) =>
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
