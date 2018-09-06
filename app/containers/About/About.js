import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { PropTypes } from 'prop-types';
import { Divider, SectionItem } from 'components';
import './About.scss';

const settings = {
  "smallHeader": "Quartile",
  "header": "About Us",
  "description": "We are advocates of simplicity and transparency. With over ten years experience in the advertising business, it is safe to say that we gained excellent exposure and grasp in all industry-leading solutions. We place the highest emphasis on immersive experience design, where we collaborate with our clients to deliver comprehensive solutions that meet their even most demanding business goals. Our agency originated in the very heart of London's silicon roundabout, where most of our tech talent was acquired. Get in touch with us, see how our award-winning service differs from others.",
  "buttonText": "Contact US",
  "link": "",
  "sectionClass": "about",
  "videoLink": ""
}

export default class About extends Component {
  render() {
    // console.log(this.settings());
    console.log('>> HERE ::: ');
    console.log({...settings});
    return (
      <div className={'about'}>
        <Helmet>
        <title>About Us</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <p>{settings.description}</p>
        <SectionItem inView key={0} offset={0} order={0} {...settings} link="about" />
        <Divider colour="white" />
      </div>
    );
  }
}
