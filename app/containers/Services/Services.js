import React, { Component } from 'react';
import Helmet from 'react-helmet';
import data from './services-data.json';
import './Services.scss';

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ animation: 'serviceItemAnimation' });
    }, 500);
  }
  render() {
    let services = ['Pitch Support', 'Creative Production', 'Ad Support', 'Design', 'Interactive Mocks', 'Innovation Support', 'Training and Workshops', 'Ad Service', 'Consultancy'];
    let rows = [];;
    for (let i = 0; i < services.length; i++) {
      let dataPoint = data[services[i]];
      rows.push(
        // <SectionItem inView={false} key={i} order={i} {...frontPanelsCopy[i]} offset={this.props.offsetRatio} />
        <div key={i} className={'service' + i + ' ' + 'serviceItem' + ' ' + this.state.animation}>
          <i className={'sprite' + ' ' + dataPoint.icon}></i>
          <div className={'serviceHeader'}>{dataPoint.header}</div>
          <div className={'serviceDescription'}>{dataPoint.description}</div>
        </div>
      );
    }
    return (
      <div className={'services'}>
        <Helmet title="Services" />
        <div className={'section'}>
          <div className={'phoneContainer'}>
            <div className={'logo'} />
            <div className={'logoShadow'} />
          </div>
          <div className={'serviceItems'}>
            {rows}
          </div>
        </div>
      </div>
    );
  }
}
