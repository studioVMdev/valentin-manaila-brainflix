import React from 'react';
import VideoItem from "../VideoItem/VideoItem";

const VideosList = ({ videosListData }) => {
	return (
		<div className="videos-list__container">
			<p className="videos-list__headline">Next Videos</p>
			videosListData.map(videoDetailsObj=>
      {<VideoItem key={videoDetailsObj.id}videoDetailsObj={videoDetailsObj} />})
		</div>
	);
};

export default VideosList;