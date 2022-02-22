import React from 'react';
import './Video.scss';

const Video = () => {
  return (
    <section className="video">
      <div className="video__wrapper">
        <video src="" className="video__player"></video>
        <div className="video__player-controls"></div>
      </div>
    </section>
  );
};

export default Video;