import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Helmet from 'react-helmet';
import { GridBack, Hero, SectionText } from 'components';
import './ProjectDetails.scss';
import data from './projects-data.json';

export default class ProjectDetails extends Component {
  static propTypes = {
    params: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.section = this.props.match.params.projectName;
  }

  componentDidMount() {
    // const section = this.props.params.projectName;
    this.section = this.props.match.params.projectName;
  }

  render() {
    const localeCopy = data[this.section];
    return (
      <div className={'projectDetails'}>
        {/* <Helmet title={this.props.params.projectName + " | Detail"} /> */}
        <Helmet title={localeCopy.client + ' | Details'} />
        <Hero
          smallHeader={localeCopy.header}
          background={localeCopy['hero image']}
          client={localeCopy.client}
          date={localeCopy.date}
          demo={localeCopy.demo}
        />
        <GridBack link="work" />
        <SectionText header={localeCopy.header} copy={localeCopy.description} tags={localeCopy.tags} />
      </div>
    );
  }
}
