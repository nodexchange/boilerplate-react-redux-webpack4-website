import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { ScrollToTopOnMount, SectionItem } from 'components';
import data from './career-data.json';
import './Career.scss';

export default class Careers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={'containerCareers'}>
        <Helmet title="Careers" />
        <SectionItem inView key={0} offset={0} order={0} {...data['Careeers']} link="legal" />
        <ScrollToTopOnMount />
      </div>
    );
  }
}
