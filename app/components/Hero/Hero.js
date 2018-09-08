import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './Hero.scss';

export default class Hero extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    smallHeader: PropTypes.string,
    header: PropTypes.string,
    smallText: PropTypes.string,
    client: PropTypes.string,
    date: PropTypes.string,
    demo: PropTypes.string,
    background: PropTypes.string
  }

  render() {
    return (
      <div className={'hero' + ' ' + this.props.background}>
        <div className={'info'}>
          <span className={'smallHeader'}>{this.props.smallHeader}</span>
          <h1 className={'header'}>{this.props.header}</h1>
          <span className={'line'}>{''}</span>
          <span className={'smallText'}>{this.props.smallText}</span>
          <div className={'projectInfo'}>
            <span className={'smallText'}>Client name: {this.props.client}</span>
            <br />
            <span className={'smallText'}>Year: {this.props.date}</span>
            <br />
            <span className={'smallText'}>Demo link:
            <a href={this.props.demo} target="_blank"> {this.props.demo}</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
