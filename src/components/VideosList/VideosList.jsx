import React from "react";
import VideoItem from "../VideoItem/VideoItem";

const VideosList = ({
	videosListData,
	currentVideoIndex,
	currentVideoId,
	handlePlayVideo,
}) => {
	return (
		<div className="videos-list__container">
			<p className="videos-list__headline">Next Videos</p>
			{videosListData
				.filter((video) => video.id !== currentVideoId)
				.map((videoDetailsObj, i) => {
					return (
						<VideoItem
							key={videoDetailsObj.id}
							videoDetailsObj={videoDetailsObj}
							handlePlayVideo={handlePlayVideo}
							currentVideoIndex={i}
							currentVideoId={videoDetailsObj.id}
						/>
					);
				})}
		</div>
	);
};

export default VideosList;
