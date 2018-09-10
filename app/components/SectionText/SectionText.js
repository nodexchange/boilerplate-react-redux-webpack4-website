/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './SectionText.scss';


// eslint-disable-next-line react/prefer-stateless-function
export default class SectionText extends Component {
  static propTypes = {
    copy: PropTypes.string,
    tags: PropTypes.string
  };
  render() {
    // eslint-disable-next-line global-require

    return (
      <div className={'sectionText'}>
        <div className={'inner'}>
          <div className={'header'}>project details:</div>
          <div className={'main'}>{this.props.copy}</div>
          <div className={'tagsTitle'}>categories:</div>
          <div className={'tags'}>{this.props.tags}</div>
        </div>
      </div>
    );
  }
}
