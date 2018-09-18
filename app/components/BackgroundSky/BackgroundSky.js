/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */
import React from 'react';
import './BackgroundSky.scss';

export default function BackgroundSky() {
  return (
    <div className="backgroundSkyContainer">
      <div className="stars">{''}</div>
      <div className="twinkling">{''}</div>
      <div className="clouds">{''}</div>
    </div>
  );
}
