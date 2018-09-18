import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Divider, GridCard, Hero } from 'components';
import './Work.scss';
import data from './work-data.json';

export default class Work extends Component {
  selectRandomQuote() {
    const quotes = data.quotes;
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  render() {
    const cards = [];
    const projectsGridCopy = data.data;
    for (let i = 0; i < projectsGridCopy.length; i++) {
      cards.push(<GridCard key={i} order={i} {...projectsGridCopy[i]} />);
    }
    const quote = this.selectRandomQuote();
    // {cards}
    return (
      <div className={'projects'}>
        <Helmet title="Our Work" />
        <Hero smallHeader={'"' + quote.text + '"'} smallText={quote.author} background="narrow" />
        <div className={'section'}>
          <ul className={'grid cards'}>
            {cards}
          </ul>
        </div>
        <Divider colour="" />
      </div>
    );
  }
}
