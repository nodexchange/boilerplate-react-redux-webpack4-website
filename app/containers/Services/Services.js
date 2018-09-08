import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Divider } from 'components';
import './Services.scss';

const settings = [{
  "service1": "Creative Production, From simple IAB certified Ad banners to bespoke builds and homepage takeovers, our team's expertise can facilitate delivery on any creative ad campaign. Google Web Designer, Celtra, DoubleClick Studio, ONE Creative or Hype, we can help with all.",
  "service2": "Ad Support, We are happy to assist with adverts conversions, bug fixing, reporting adjustments or any other technical ad query.",
  "service3": "Design, Our award-winning team will be happy to assist with any creative tasks, from mock-ups to visual design.",
  "service4": "Training, This service is design to assist our clients with the planning of dedicated training and workshops. We would be happy upskill your team on technical ad build, industry jargon or unique solutions such as DCO or Audience Targeting.",
  "service5": "Holistic Ad Serving, Our most straight forward way of showing you the excellence of our service. We would be happy to design your ad to the provided specs, build and traffic it. We will be sharing regular updates and reports with you throughout the campaign lifecycle.",
  "service6": "Consultancy, We can advise on deadlines, feasibility or unique solutions. Let's us be part of your conversations & brainstorming sessions. Our technical expertise is yours to leverage."
}];

export default class Services extends Component {
  render() {
    const servicesCopy = settings;

    return (
      <div className={'services'}>
        <Helmet title="Services" />
        <div className={'section'}>
          <div className={'phone'} />
          <div className={'logo'} />
          <div className={'logoShadow'} />
          <div className={'stars'}>
            <div className={'numbers'}>
              <div className={'number1' + ' ' + 'numberEl'}>{servicesCopy[0].service1}</div>
              <div className={'number2' + ' ' + 'numberEl'}>{servicesCopy[0].service2}</div>
              <div className={'number3' + ' ' + 'numberEl'}>{servicesCopy[0].service3}</div>
              <div className={'number4' + ' ' + 'numberEl'}>{servicesCopy[0].service4}</div>
              <div className={'number5' + ' ' + 'numberEl'}>{servicesCopy[0].service5}</div>
              <div className={'number6' + ' ' + 'numberEl'}>{servicesCopy[0].service6}</div>
            </div>
          </div>
          <div className={'mobileServices'}>
            <div className={'number1' + ' ' + 'numberEl'}>{servicesCopy[0].service1}</div>
            <div className={'number2' + ' ' + 'numberEl'}>{servicesCopy[0].service2}</div>
            <div className={'number3' + ' ' + 'numberEl'}>{servicesCopy[0].service3}</div>
            <div className={'number4' + ' ' + 'numberEl'}>{servicesCopy[0].service4}</div>
            <div className={'number5' + ' ' + 'numberEl'}>{servicesCopy[0].service5}</div>
            <div className={'number6' + ' ' + 'numberEl'}>{servicesCopy[0].service6}</div>
          </div>
        </div>
        <Divider colour="" />
        <Divider colour="" />
        <Divider colour="" />
      </div>
    );
  }
}
