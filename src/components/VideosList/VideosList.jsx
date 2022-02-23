import React from "react";
import VideoItem from "../VideoItem/VideoItem";

const VideosList = ({ videosListData, currentVideoIndex }) => {
	return (
		<div className="videos-list__container">
			<p className="videos-list__headline">Next Videos</p>
			{videosListData
				.filter((video, i) => i !== currentVideoIndex)
				.map((videoDetailsObj) => {
					return (
						<VideoItem
							key={videoDetailsObj.id}
							videoDetailsObj={videoDetailsObj}
						/>
					);
				})}
		</div>
	);
};

export default VideosList;
