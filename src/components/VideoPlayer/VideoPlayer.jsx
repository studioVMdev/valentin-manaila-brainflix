import React from 'react';
import './VideoPlayer.scss';

const VideoPlayer = ({videoDetails}) => {
  return (
    <section className="video-player">
      <div className="video-player__container">
        <video id={videoDetails.id} poster={videoDetails.image} id={videoDetails.id}src={videoDetails.video} className="video-player__player"></video>
        <div className="video-player__controls"></div>
      </div>
    </section>
  );
};

export default VideoPlayer;