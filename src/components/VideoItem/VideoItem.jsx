import "./VideoItem.scss";

const VideoItem = ({
	videoDetailsObj,
	handlePlayVideo,
	currentVideoIndex,
	currentVideoId,
}) => {
	return (
		<div
			id={videoDetailsObj.id}
			className="video-item"
			onClick={() => handlePlayVideo(currentVideoId)}
			// onclick={() => {
			// 	console.log("clicked");
			// }}
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
