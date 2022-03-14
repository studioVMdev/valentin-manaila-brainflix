import React from "react";
import "./VideoDetails.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import { timestampToDate } from "../../utils/timestamp.mjs";

const VideoDetails = ({ videosDetailsList, handleVideoLike }) => {
	const { title, channel, timestamp, views, likes, description } =
		videosDetailsList;

	return (
		<section className="info">
			<div className="info__container">
				<h2 className="info__title">{title}</h2>
				<div className="info__stats-container">
					<div className="info__left">
						<p className="info__author">By: {channel}</p>
						<p className="info__date">{timestampToDate(timestamp)}</p>
					</div>
					<div className="info__right">
						<div className="views__wrapper info__wrapper">
							<img
								src={viewsIcon}
								alt="views-icon"
								className="views__icon info__icon"
							/>
							<p className="views__count info__count">
								{views.toLocaleString("en")}
							</p>
						</div>
						<div className="likes__wrapper info__wrapper">
							<img
								src={likesIcon}
								alt="likes-icon"
								className="likes__icon info__icon"
							/>
							<p className="likes__count info__count">
								{likes.toLocaleString("en")}
							</p>
						</div>
					</div>
				</div>
				<div className="info__description">{description}</div>
				<div className="info__bottom">
					<p className="info__comments-count">
						{videosDetailsList.comments.length} Comments
					</p>
					<button className="info__like-btn" onClick={handleVideoLike}>
						💖 Like Video
					</button>
				</div>
			</div>
		</section>
	);
};

export default VideoDetails;
