import React, { Component } from 'react';
import Helmet from 'react-helmet';
import data from './services-data.json';
import './Services.scss';

export default class Services extends Component {
  render() {
    return (
      <div className={'services'}>
        <Helmet title="Services" />
        <div className={'section'}>
          <div className={'phone'} />
          <div className={'logo'} />
          <div className={'logoShadow'} />
          <div className={'numbers'}>
            <div className={'number1' + ' ' + 'numberEl'}>{data['Pitch Support'].description}</div>
            <div className={'number2' + ' ' + 'numberEl'}>{data['Creative Production'].description}</div>
            <div className={'number3' + ' ' + 'numberEl'}>{data['Ad Support'].description}</div>
            <div className={'number4' + ' ' + 'numberEl'}>{data['Design'].description}</div>
            <div className={'number5' + ' ' + 'numberEl'}>{data['PoC'].description}</div>
            <div className={'number6' + ' ' + 'numberEl'}>{data['Innovation Support'].description}</div>
            <div className={'number7' + ' ' + 'numberEl'}>{data['Training and Workshops'].description}</div>
          </div>
        </div>
      </div>
    );
  }
}
