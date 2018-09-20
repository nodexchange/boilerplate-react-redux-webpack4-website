import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Divider } from 'components';
import './Services.scss';

const settings = [{
  "service1": {
    "title":"Pitch Support",
    "description":"Pitch Support, RFI / RFP."
  },
  "service2": {
    "title":"Proof of Concept",
    "description":"Pitch Support, RFI / RFP."
  },
  "service3": {
    "title":"Innovation Labs",
    "description":"Pitch Support, RFI / RFP."
  },
  "service4": {
    "title":"Creative Production",
    "description":"From simple IAB certified Ad banners to bespoke builds and homepage takeovers, our team's expertise can facilitate delivery on any creative ad campaign. Google Web Designer, Celtra, DoubleClick Studio, ONE Creative or Hype, we can help with all."
  },
  "service5": {
    "title":"Ad Support",
    "description":"We are happy to assist with adverts conversions, bug fixing, reporting adjustments or any other technical ad query."
  },
  "service6": {
    "title":"Design",
    "description":"Our award-winning team will be happy to assist with any creative tasks, from mock-ups to visual design"
  },
  "service7": {
    "title":"Training and Workshops",
    "description": "Training, This service is design to assist our clients with the planning of dedicated training and workshops. We would be happy upskill your team on technical ad build, industry jargon or unique solutions such as DCO or Audience Targeting."
  },
  "service8": {
    "title": "consultancy",
    "description":"Consultancy, We can advise on deadlines, feasibility or unique solutions. Let's us be part of your conversations & brainstorming sessions. Our technical expertise is yours to leverage."
  }
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
          <div className={'numbers'}>
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
