import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!../../static/clients/renault.png';
import '!file-loader?name=[name].[ext]!../../static/clients/ford.png';
import '!file-loader?name=[name].[ext]!../../static/clients/audi.png';
import '!file-loader?name=[name].[ext]!../../static/clients/toyota.png';
import '!file-loader?name=[name].[ext]!../../static/clients/you.png';
import '!file-loader?name=[name].[ext]!../../static/clients/gsk.png';
import '!file-loader?name=[name].[ext]!../../static/clients/hme.png';
import '!file-loader?name=[name].[ext]!../../static/clients/dnno.png';
import '!file-loader?name=[name].[ext]!../../static/clients/inm.png';
/* eslint-enable import/no-webpack-loader-syntax */
import './Clients.scss';

export default class Clients extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    inView: PropTypes.bool,
  };

  render() {
    return (
      <div className={'section'}>
        <div className={'info'}>
          Brands and clients that <b>entrust</b> our solutions and empathy&#8482; algorithm
        </div>
        <div className={'clients'}>
          <div className={'client'}>
            <img className={'renault'} alt="renualt" src="./renault.png" />
          </div>
          <div className={'client'}>
            <img className={'ford'} alt="ford" src="./ford.png" />
          </div>
          <div className={'client'}>
            <img className={'audi'} alt="audi" src="./audi.png" />
          </div>
          <div className={'client'}>
            <img className={'toyota'} alt="toyota" src="./toyota.png" />
          </div>
          <div className={'client'}>
            <img className={'you'} alt="you" src="./you.png" />
          </div>
          <div className={'client'}>
            <img className={'gsk'} alt="gsk" src="./gsk.png" />
          </div>
          <div className={'client'}>
            <img className={'hme'} alt="hme" src="./hme.png" />
          </div>
          <div className={'client'}>
            <img className={'dnno'} alt="dnno" src="./dnno.png" />
          </div>
          <div className={'client'}>
            <img className={'inm'} alt="inm" src="./inm.png" />
          </div>
        </div>
      </div>
    );
  }
}
