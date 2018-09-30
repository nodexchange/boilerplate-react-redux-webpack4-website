/* eslint-disable react/no-unescaped-entities */
import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { BackgroundSky, Clients, SectionItem } from 'components';
import throttle from '../../helpers/Throttle';
import './Front.scss';
import data from './front-data.json';

export default class Front extends PureComponent {
  constructor(props) {
    super(props);
    this.currentPanel = this.props.offsetRatio || 0;
    // this.localeCopy = this.props.localeCopy || 'pending';
  }

  componentDidMount() {
    // window.addEventListener('resize', throttle(this.props.mainImageResizeAction, 100));
    window.addEventListener('scroll', throttle(this.props.mainWindowScrollAction, 100));
    this.props.mainWindowScrollAction();
    // this.props.mainImageResizeAction();
  }

  componentWillReceiveProps(nextProps) {
    // console.log('PROPS HERE ' + nextProps);
    const panelValue = Math.round(nextProps.offsetRatio) + 0.2;
    if (panelValue !== this.currentPanel) {
      this.currentPanel = Math.round(nextProps.offsetRatio);
    }
  }

  componentWillUnmount() {
    // this.props.updateMaxPages(1);
  }

  render() {
    const frontPanelsCopy = data.data;
    const rows = [];
    for (let i = 0; i < frontPanelsCopy.length; i++) {
      if (this.currentPanel === i) {
        rows.push(
          <SectionItem inView key={i} order={i} {...frontPanelsCopy[i]} offset={this.props.offsetRatio} />
        );
      } else {
        rows.push(
          <SectionItem inView={false} key={i} order={i} {...frontPanelsCopy[i]} offset={this.props.offsetRatio} />
        );
      }
    }
    // console.log(this.props);
    return (
      <section className="content">
        <div className={'front'}>
          <Helmet title="Home" />
          {rows}
          <Clients />
        </div>
      </section>
    );
  }
}

Front.propTypes = {
  mainWindowScrollAction: PropTypes.func.isRequired,
  mainImageResizeAction: PropTypes.func,
  updateMaxPages: PropTypes.func.isRequired,
  offsetRatio: PropTypes.number,
}
