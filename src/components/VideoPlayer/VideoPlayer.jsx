import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = ({ videoObj }) => {
  console.log(videoObj);
	return (
		<section className="video-player">
			<div className="video-player__container">
				<video
					id={videoObj.id}
					poster={videoObj.image}
					type="video/mp4"
					src={videoObj.video}
					className="video-player__player"
					controls
				></video>
				<div className="video-player__controls"></div>
			</div>
		</section>
	);
};

export default VideoPlayer;
