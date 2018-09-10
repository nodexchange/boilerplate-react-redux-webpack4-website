import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Helmet from 'react-helmet';
import { Divider, GridBack, Hero, SectionText } from 'components';
import './ProjectDetails.scss';

const settings = {
  "hero image":"aib",
  "header": "AIB - Takeover",
  "description": "Thanks to the close collaboration with the Irish Independent website team, we could achieve a truly unique way of emotionally engaging their audience with the AIB brand. Our initial conversations made it clear that wallpaper formats combined with banners as static homepage takeovers, rarely produce any form of satisfying results for the advertiser. We wanted to challenge that. Make sure to visit the demo page (link above) and click on the advert to understand the Quartile approach to the traditional formats.",
  "date": "2017",
  "client": "Independent IE",
  "demo": "/ie-aib-wallpaper.html",
  "tags":"Homepage, Wallpaper, Unique"
};
export default class ProjectDetails extends Component {
  static propTypes = {
    params: PropTypes.object
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    // const section = this.props.params.projectName;
    const section = 'aib';
  }

  render() {
    const localeCopy = settings;
    return (
      <div className={'projectDetails'}>
        {/* <Helmet title={this.props.params.projectName + " | Detail"} /> */}
        <Helmet title={'aib' + " | Detail"} />
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
