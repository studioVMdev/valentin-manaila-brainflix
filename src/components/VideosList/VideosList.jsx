import React from 'react';
import VideoItem from "../VideoItem/VideoItem";

const VideosList = () => {
  return (
    <div className="videos-list__container">
      <p className="videos-list__headline">Next Videos</p>
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
    </div>
  );
};

export default VideosList;