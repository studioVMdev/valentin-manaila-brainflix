import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = ({ videoObj }) => {
	return (
		<section className="video-player">
			<div className="video-player__container">
				<video
					id={videoObj.id}
					poster={videoObj.image}
					type="video/mp4"
					src={videoObj.video}
					className="video-player__player"
					// controls
				></video>
				<div className="player">
					<div className="player__left-wrapper player-wrapper">
						<div className="player__play-button"></div>
					</div>

					<div className="player__scrubbing player-wrapper">
						<div className="timeline">
							<div className="timeline__scrubbing-icon"></div>
							<div className="timeline__duration"></div>
							<div className="timeline__buffering"></div>
							<div className="timeline__current"></div>
						</div>
						<div className="time">
							<div className="time__current-time">1:20/</div>
							<div className="time__time-remaining"> 4:01</div>
						</div>
					</div>

					<div className="player__right-wrapper player-wrapper">
						<div className="player__fullscreen-button"></div>
						<div className="player__volume-button"></div>
					</div>
				</div>
			</div>
			{/* <div className="video-player__controls"></div> */}
		</section>
	);
};

export default VideoPlayer;
