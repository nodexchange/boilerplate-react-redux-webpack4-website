/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Clients, Divider, SectionItem } from 'components';
import throttle from '../../helpers/Throttle';
import './Front.scss';

const settings = [{
  "smallHeader": "Creative Ad Agency",
  "header": "Data & Empathy driven solutions",
  "description": "We are data obsessed, London based innovators, day dreamers, creative ad specialists, always striving to push the boundaries of our emotional & bleeding edge digital executions to the next level.",
  "buttonText": "Learn More",
  "link": "/about",
  "backgroundClass":"blue",
  "sectionClass": "one",
  "videoLink": "/top.mp4"
}, {
  "smallHeader": "Accelerate",
  "header": "Conversions",
  "description": "Ads are dead! That's why we produce eye-catching personalised experiences. Our focus is to engage new audiences through the user-centric, data-first approach and adapt it real-time through various input points. By applying our asset level targeting and dynamic creative optimisation based on our proprietary machine learning algorithm, we produce ads that deliver premium performance.",
  "buttonText": "Get in touch",
  "link": "/contact",
  "backgroundClass":"orange",
  "sectionClass": "two",
  "videoLink": ""
}, {
  "smallHeader": "Immersive",
  "header": "360° & VR Experiences",
  "description": "Innovation is in our DNA. Our personalised 360° Cross-screen video player's intelligence adjusts the content in the real-time, exposing the audience to the most interactive areas. Our VR experiences can seamlessly deliver immersive ground-breaking visuals that no other static media can offer.",
  "buttonText": "Our Work",
  "link": "/work",
  "backgroundClass":"blue",
  "sectionClass": "three",
  "videoLink": ""
}, {
  "smallHeader": "Standard creative display",
  "header": "Contextually enhanced",
  "description": "Across the web, mobile, in-app or video inventory, our talented team can assist with creation of any standard IAB executions, reusable ad templates, as well as full scale, responsive, true cross-screen ads and homepage takeovers. Our native solutions are often embedded contextually and dynamically enhanced to reflect the hosting page.",
  "buttonText": "Get in touch",
  "link": "/contact",
  "backgroundClass":"orange",
  "sectionClass": "four",
  "videoLink": ""
}, {
  "smallHeader": "Open cross platform",
  "header": "Agnostic Solutions",
  "description": "Our services are not designed to lock-in our customers. Our product and optimisation processes are ad server agnostic and can run across various cross-environment inventory simultaneously. Our true cross-screen personalised solutions. available in Celtra, DoubleClick Studio and ONE Creative, accelerate conversions and drive higher campaign performance.",
  "buttonText": "Learn More",
  "link": "/about",
  "backgroundClass":"blue",
  "sectionClass": "five",
  "videoLink": ""
}, {
  "smallHeader": "Have an idea?",
  "header": "Talk to us",
  "description": "We love to brainstorm ideas, and we do believe that the inspiration can come from anywhere. Inspire us to innovate, challenge us, tell us what you think; we are always happy to learn new things.",
  "buttonText": "Get in touch",
  "link": "/contact",
  "backgroundClass":"orange",
  "sectionClass": "six",
  "videoLink": ""
}]

export default class Front extends Component {
  constructor(props) {
    super(props);
    this.currentPanel = this.props.offsetRatio || 0;
    // this.localeCopy = this.props.localeCopy || 'pending';
  }

  componentDidMount() {
    // window.addEventListener('resize', throttle(this.props.mainImageResizeAction, 100));
    // window.addEventListener('scroll', throttle(this.props.mainWindowScrollAction, 100));
    // this.props.mainWindowScrollAction();
    // this.props.mainImageResizeAction();
  }

  componentWillReceiveProps(nextProps) {
    // const panelValue = Math.round(nextProps.offsetRatio) + 0.2;
    // const panelValue = Math.round(nextProps.offsetRatio) + 0.2;
    // if (panelValue !== this.currentPanel) {
    //   this.currentPanel = Math.round(nextProps.offsetRatio);
    // }
  }

  componentWillUnmount() {
    // this.props.updateMaxPages(1);
  }

  render() {
    const frontPanelsCopy = settings;
    const rows = [];
    for (let i = 0; i < frontPanelsCopy.length; i++) {
      if (this.currentPanel === i) {
        rows.push(
          <SectionItem inView key={i} order={i} {...frontPanelsCopy[i]} offset={0} />
        );
      } else {
        rows.push(
          <SectionItem inView={false} key={i} order={i} {...frontPanelsCopy[i]} offset={0} />
        );
      }
    }
    return (
      <section className="content">
        <div className={'front'}>
          <Helmet title="Home" />
          {rows}
          <Clients />
          <Divider colour="blue" />
          <Divider colour="blue" />
        </div>
      </section>
    );
  }
}
