import React from "react";
import "./VideoDetails.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

const VideoDetails = ({ videoDetails }) => {
	return (
		<section className="info">
			<div className="info__container">
				<h2 className="info__title">{videoDetails.title}</h2>
				<div className="info__left">
					<p className="info__author">By: {videoDetails.channel}</p>
					<p className="info__date">{videoDetails.timestamp}</p>
				</div>
				<div className="info__right">
					<div className="views__wrapper">
						<img
							src={viewsIcon}
							alt="views-icon"
							className="views__icon"
						/>
						<p className="views__count">{videoDetails.views}</p>
					</div>
					<div className="likes__wrapper">
						<img
							src={likesIcon}
							alt="likes-icon"
							className="likes__icon"
						/>
						<p className="likes__count">{videoDetails.likes}</p>
					</div>
				</div>
				<div className="info__description">{videoDetails.description}</div>
				<p className="info__comments-count">
					{videoDetails.comments.length} Comments
				</p>
			</div>
		</section>
	);
};

export default VideoDetails;
