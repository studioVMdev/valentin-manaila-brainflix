import React from "react";
import "./VideoList.scss";
import VideoItem from "../VideoItem/VideoItem";

const VideosList = ({ videosListData, currentVideoId }) => {
	return (
		<div className="videos-list__container">
			<p className="videos-list__headline">Next Videos</p>
			{videosListData
				.filter((video) => video.id !== currentVideoId)
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
