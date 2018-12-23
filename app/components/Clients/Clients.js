import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!../../images/clients/renault-logo.png';
import '!file-loader?name=[name].[ext]!../../images/clients/ford-logo.png';
import '!file-loader?name=[name].[ext]!../../images/clients/audi-logo.png';
import '!file-loader?name=[name].[ext]!../../images/clients/toyota-logo.png';
import '!file-loader?name=[name].[ext]!../../images/clients/you-logo.png';
import '!file-loader?name=[name].[ext]!../../images/clients/gsk-logo.png';
import '!file-loader?name=[name].[ext]!../../images/clients/hme-logo.png';
import '!file-loader?name=[name].[ext]!../../images/clients/dnno-logo.png';
import '!file-loader?name=[name].[ext]!../../images/clients/inm-logo.png';
/* eslint-enable import/no-webpack-loader-syntax */
import './Clients.scss';

export default class Clients extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    inView: PropTypes.bool,
  };

  render() {
    return (
      <div className={'section-clients'}>
        <div className={'info'}>
          Brands and clients that <b>entrust</b> our solutions and empathy&#8482; algorithm
        </div>
        <div className={'clients'}>
          <div className={'client'}>
            <img className={'renault'} alt="renualt" src="./renault-logo.png" />
          </div>
          <div className={'client'}>
            <img className={'ford'} alt="ford" src="./ford-logo.png" />
          </div>
          <div className={'client'}>
            <img className={'audi'} alt="audi" src="./audi-logo.png" />
          </div>
          <div className={'client'}>
            <img className={'toyota'} alt="toyota" src="./toyota-logo.png" />
          </div>
          <div className={'client'}>
            <img className={'you'} alt="you" src="./you-logo.png" />
          </div>
          <div className={'client'}>
            <img className={'gsk'} alt="gsk" src="./gsk-logo.png" />
          </div>
          <div className={'client'}>
            <img className={'hme'} alt="hme" src="./hme-logo.png" />
          </div>
          <div className={'client'}>
            <img className={'dnno'} alt="dnno" src="./dnno-logo.png" />
          </div>
          <div className={'client'}>
            <img className={'inm'} alt="inm" src="./inm-logo.png" />
          </div>
        </div>
      </div>
    );
  }
}
