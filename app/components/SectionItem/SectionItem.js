import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
// import { SectionVideo } from 'components';
import './SectionItem.scss';


export default class SectionItem extends Component {
  static propTypes = {
    inView: PropTypes.bool.isRequired,
    smallHeader: PropTypes.string,
    header: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    sectionClass: PropTypes.string,
    link: PropTypes.string,
    backgroundClass: PropTypes.string,
    order: PropTypes.number,
    offset: PropTypes.number
  };

  calculateTop() {
    let tValue = 10;
    if (this.props.offset >= this.props.order && this.props.offset < (this.props.order + 1)) {
      const value = (this.props.offset - this.props.order) * 1.2;
      tValue += (70 * value);
      if (value > 0.5) {
        tValue = 45;
      }
    }
    if (tValue > 45) {
      tValue = 45;
    }
    return Math.round(tValue);
  }

  render() {
    // const { info, load } = this.props; // eslint-disable-line no-shadow
    // eslint-disable-next-line global-require
    const selectedClass = this.props.sectionClass;
    const selectedImageClass = this.props.sectionClass + 'Bg';
    let backgroundClass = '';
    if (this.props.backgroundClass) {
      backgroundClass = this.props.backgroundClass;
    }

    let outOrInView = 'outView';
    let infoOutOrInView = 'infoOutView';
    let inset = ' inset';
    if ((this.props.order % 2) === 0) {
      inset = '';
    }
    if (this.props.inView) {
      outOrInView = 'inView';
      infoOutOrInView = 'infoInView';
    }
    let linkNode = (
      <Link to={this.props.link} className={'btn' + ' ' + outOrInView}>{this.props.buttonText}</Link>
    );
    if (Array.isArray(this.props.link)) {
      linkNode = (
        <div id="btn-list">
          <Link to={this.props.link[0]} className={'btn' + ' ' + outOrInView}>{this.props.buttonText[0]}</Link>
          <Link to={this.props.link[1]} className={'btn' + ' ' + outOrInView}>{this.props.buttonText[1]}</Link>
        </div>
      );
    }
    let contactSection = false;
    if (this.props.link === 'contact') {
      contactSection = true;
      linkNode = (
        <a
          href="mailto:hello@quartile.io?Subject=Hello%20Quartile%21"
          className={'btn' + ' ' + outOrInView}
        >
          {this.props.buttonText}
        </a>
      );
    }

    const topValue = this.calculateTop();
    const text = this.props.description;
    let topStyle = { top: topValue + '%' };
    if (backgroundClass === 'section-text-center') {
      topStyle = { top: '30%' };
    }
    // <SectionVideo key={this.props.key} inView={this.props.inView} videoLink={this.props.videoLink} />
    return (
      <div id={selectedClass} className={'section-item' + '' + inset + ' ' + backgroundClass}>
        <div className={'info'}>
          <div className={selectedImageClass + ' ' + 'imageBg'}></div>
          {contactSection &&
            <div className={'contactShadow'}>{''}</div>
          }
          <div className={'smallBox' + ' ' + infoOutOrInView} style={topStyle}>
            <span className={'smallHeader' + ' ' + outOrInView}>{this.props.smallHeader}</span>
            <h1 className={'header' + ' ' + outOrInView}>{this.props.header}</h1>
            <span className={'line' + ' ' + outOrInView}>{/* eslint-disable-line no-shadow */}</span>
            <div className={'description' + ' ' + outOrInView}>
              {text.split('\n').map(i =>
                <div className={'descText'} key={i}>{i}</div>
              )}
            </div>
            {linkNode}
          </div>
        </div>
      </div>
    );
  }
}
