import "./VideoItem.scss";

const VideoItem = ({ videoDetailsObj, handlePlayVideo, currentVideoId }) => {
	return (
		<div
			id={videoDetailsObj.id}
			className="video-item"
			onClick={() => handlePlayVideo(currentVideoId)}
		>
			<img
				src={videoDetailsObj.image}
				alt={videoDetailsObj.title}
				className="video-item__thumbnail"
			/>
			<div className="video-item__info-wrapper">
				<p className="video-item__title">{videoDetailsObj.title}</p>
				<p className="video-item__author">{videoDetailsObj.channel}</p>
			</div>
		</div>
	);
};

export default VideoItem;
