import "./VideoItem.scss";
import { Link } from "react-router-dom";

const VideoItem = ({ videoDetailsObj }) => {
	const { id, image, title, channel } = videoDetailsObj;
	return (
		<Link
			to={`/video/${id}`}
			onClick={() => {
				window.scrollTo(0, 0);
			}}
		>
			<div id={id} className="video-item">
				<img src={image} alt={title} className="video-item__thumbnail" />
				<div className="video-item__info-wrapper">
					<p className="video-item__title">{title}</p>
					<p className="video-item__author">{channel}</p>
				</div>
			</div>
		</Link>
	);
};

export default VideoItem;
