import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { ScrollToTopOnMount, SectionItem } from 'components';
import data from './career-data.json';
import './Career.scss';

export default class NotFound extends Component {
  constructor(props) {
    super(props);
    console.log('here>>>');
  }
  render() {
    return (
      <div className={'about'}>
        <Helmet title="Careers" />
        <SectionItem inView key={0} offset={0} order={0} {...data['About Us']} link="about" />
        <ScrollToTopOnMount />
      </div>
    );
  }
}
