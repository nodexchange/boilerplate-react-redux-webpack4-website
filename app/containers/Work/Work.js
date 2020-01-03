import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { Divider, GridCard, Hero } from 'components';
import './Work.scss';
import data from './work-data.json';

export default class Work extends PureComponent {
  constructor(props) {
    super(props);
    this.quote = { author: '', text: '' };
    this.state = { environment: 'all', format: 'all', feature: 'all', quote: this.quote };
  }
  selectRandomQuote = () => {
    const { quotes } = data;
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  componentDidMount() {
    this.quote = this.selectRandomQuote();
    this.setState({ quote: this.quote });
  }

  handleEnvChange = (event) => {
    this.setState({ environment: event.target.value });
    event.preventDefault();
  }
  handleFormatChange = (event) => {
    this.setState({ format: event.target.value });
    event.preventDefault();
  }
  handleFeatureChange = (event) => {
    this.setState({ feature: event.target.value });
    event.preventDefault();
  }

  filterData = () => {
    let filterData = data.data;
    if (this.state.environment !== 'all') {
      filterData = filterData.filter((ad) => {
        if (ad.environment.split(',').length > 1) {
          const envs = ad.environment.split(',');
          for (let i = 0; i < envs.length; i++) {
            if (envs[i] === this.state.environment) {
              return ad;
            }
          }
        } else {
          /* eslint-disable */
          if (ad.environment === this.state.environment) {
            return true;
          }
           /* eslint-enable */
        }
        return false;
      });
    }

    if (this.state.format !== 'all') {
      console.log('----- PHASE 2, ' + this.state.format);
      filterData = filterData.filter((ad) => {
        if (ad.feature.split(',').length > 1) {
          const formats = ad.format.split(',');
          for (let i = 0; i < formats.length; i++) {
            if (formats[i] === this.state.format) {
              return ad;
            }
          }
        } else {
          /* eslint-disable */
          if (ad.format === this.state.format) {
            return true;
          }
          /* eslint-enable */
        }
        return false;
      });
    }
    if (this.state.feature !== 'all') {
      console.log('----- PHASE 3, ' + this.state.feature, 'length :: ' + filterData.length);
      filterData = filterData.filter((ad) => {
        if (ad.feature.split(',').length > 1) {
          const features = ad.feature.split(',');
          for (let i = 0; i < features.length; i++) {
            if (features[i] === this.state.feature) {
              return true;
            }
          }
        } else {
          /* eslint-disable */
          if (ad.feature === this.state.feature) {
            return true;
          }
          /* eslint-enable */
        }
        if (ad.feature === this.state.feature) {
          return true;
        }
        return false;
      });
    }
    return filterData;
  }

  render() {
    const cards = [];
    const projectsGridCopy = this.filterData();
    for (let i = 0; i < projectsGridCopy.length; i++) {
      cards.push(<GridCard key={i} order={i} {...projectsGridCopy[i]} />);
    }
   
    // {cards}
    return (
      <div className={'projects'}>
        <Helmet title="Our Work" />
        <Hero smallHeader={'"' + this.quote.text + '"'} smallText={this.quote.author} background="narrow" />
        <div className={'section'}>
          <div className={'workFilter'}>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="Filters">
                Filters:
                <select value={this.state.environment} onChange={this.handleEnvChange}>
                  <option value="all">All Environments</option>
                  <option value="display">Display</option>
                  <option value="mobile">Mobile InApp</option>
                  <option value="video">Video</option>
                  <option value="cross-screen">Cross-screen</option>
                </select>
                <select value={this.state.format} onChange={this.handleFormatChange}>
                  <option value="all">All Formats</option>
                  <option value="IAB-Standard">IAB Standard</option>
                  <option value="wallpaper">Wallpaper</option>
                  <option value="banner">Banner</option>
                  <option value="custom">Custom Size</option>
                  <option value="full-screen">Full Screen</option>
                </select>
                <select value={this.state.feature} onChange={this.handleFeatureChange}>
                  <option value="all">All Features</option>
                  <option value="360">360°</option>
                  <option value="animation">Animation</option>
                  <option value="responsive">Responsive</option>
                  <option value="vr">VR/AR</option>
                  <option value="video">Video</option>
                </select>
              </label>
              {/* <input type="submit" value="Submit" /> */}
            </form>
          </div>
          <ul className={'grid cards'}>
            {cards}
          </ul>
        </div>
        <Divider colour="" />
      </div>
    );
  }
}
