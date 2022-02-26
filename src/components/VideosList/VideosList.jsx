import React from "react";
import "./VideoList.scss";
import VideoItem from "../VideoItem/VideoItem";

const VideosList = ({ videosListData, currentVideoId, handlePlayVideo }) => {
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
							handlePlayVideo={handlePlayVideo}
							currentVideoId={videoDetailsObj.id}
						/>
					);
				})}
		</div>
	);
};

export default VideosList;
