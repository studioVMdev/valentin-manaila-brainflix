import React, { Component } from "react";
import VideoItem from "../VideoItem/VideoItem";

export class VideosList extends Component {
	render() {
		return (
			<div className="videos-list__container">
				<p className="videos-list__headline">Next Videos</p>
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
			</div>
		);
	}
}

export default VideosList;
