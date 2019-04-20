import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Helmet from 'react-helmet';
import { GridBack, ScrollToTopOnMount } from 'components';
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!../../static/autotrader-toyota.html';
import '!file-loader?name=[name].[ext]!../../static/brazil.html';
import '!file-loader?name=[name].[ext]!../../static/empire-marvel.html';
import '!file-loader?name=[name].[ext]!../../static/ford.html';
import '!file-loader?name=[name].[ext]!../../static/ie-aib-wallpaper.html';
import '!file-loader?name=[name].[ext]!../../static/ie-ebs-wallpaper.html';
import '!file-loader?name=[name].[ext]!../../static/Independant-renault.html';
import '!file-loader?name=[name].[ext]!../../static/Independant-audi.html';
import '!file-loader?name=[name].[ext]!../../static/maxim-audi.html';
import '!file-loader?name=[name].[ext]!../../static/adidas-3d.html';
import '!file-loader?name=[name].[ext]!../../static/adidas.mp4';
import '!file-loader?name=[name].[ext]!../../static/audi-filmstrip.html';
import '!file-loader?name=[name].[ext]!../../static/audi-filmstrip.mp4';
import '!file-loader?name=[name].[ext]!../../static/gsk-banner.html';
import '!file-loader?name=[name].[ext]!../../static/gsk-banner.mp4';
import '!file-loader?name=[name].[ext]!../../static/gsk-article.html';
import '!file-loader?name=[name].[ext]!../../static/gsk-article.mp4';
import '!file-loader?name=[name].[ext]!../../static/lg-g7.html';
import '!file-loader?name=[name].[ext]!../../static/lg-g7.mp4';
import '!file-loader?name=[name].[ext]!../../static/rolls-royce.html';
import '!file-loader?name=[name].[ext]!../../static/rolls-royce.mp4';

import '!file-loader?name=[name].[ext]!../../static/google56e1490867514ec2.html';
import '!file-loader?name=[name].[ext]!../../static/sitemap.txt';
/* eslint-enable import/no-webpack-loader-syntax */
import './ProjectPreview.scss';


export default class ProjectPreview extends Component {
  static propTypes = {
    params: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.section = this.props.match.params.projectName; // eslint-disable-line
  }

  componentDidMount() {
    // const section = this.props.params.projectName;
    this.section = this.props.match.params.projectName;
  }

  iframe = (urlSrc) => {
    const iframeSrc = '<iframe src="' + urlSrc + '" width="100%" height="100%"></iframe>';
    return {
      __html: iframeSrc
    };
  }

  render() {
    // const localeCopy = data[this.section];
    // eslint-disable-next-line
    const urlSrc = this.props.location.search.replace('?', '/');
    window.open(urlSrc, '_self');
    return (
      <div className={'projectPreview'}>
        {/* <Helmet title={this.props.params.projectName + " | Detail"} /> */}
        <Helmet title={'test | Details | Preview'} />
        {/* <Hero
          smallHeader={localeCopy.header}
          background={localeCopy['hero image']}
          client={localeCopy.client}
          date={localeCopy.date}
          demo={localeCopy.demo}
        /> */}
        <div>
          {/* <div dangerouslySetInnerHTML={this.iframe(urlSrc)} /> */}
        </div>
        <GridBack link="work" />
        <ScrollToTopOnMount />
      </div>
    );
  }
}
