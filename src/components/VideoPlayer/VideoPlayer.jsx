import React from "react";
import "./VideoPlayer.scss";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
	<ContentLoader
		speed={2}
		width={160}
		height={90}
		viewBox="0 0 160 90"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="0" y="0" rx="0" ry="0" width="160" height="90" />
	</ContentLoader>
);

const VideoPlayer = ({ videoObj }) => {
	if (!videoObj) {
		return <p className="loading">loading</p>;
  } else {
    
    
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
}
};

export default VideoPlayer;
