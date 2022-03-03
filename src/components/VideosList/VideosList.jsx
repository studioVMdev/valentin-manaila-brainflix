import React from "react";
import "./VideoList.scss";
import VideoItem from "../VideoItem/VideoItem";
import "../VideoItem/VideoItem.scss";

import ContentLoader from "react-content-loader";

const VideoItemLoader = (props) => (
	<ContentLoader
		speed={2}
		width={280}
		height={66}
		viewBox="0 0 280 66"
		backgroundColor="#e1e0e0"
		foregroundColor="#f8f7f7"
		{...props}
	>
		<rect x="9" y="6" rx="3" ry="3" width="100" height="56" />
		<rect x="124" y="9" rx="3" ry="3" width="140" height="11" />
		<rect x="125" y="31" rx="3" ry="3" width="140" height="11" />
		<rect x="125" y="51" rx="3" ry="3" width="140" height="11" />
	</ContentLoader>
);

const LoaderList = () => {
	return (
		<>
			<VideoItemLoader />
			<VideoItemLoader />
			<VideoItemLoader />
			<VideoItemLoader />
			<VideoItemLoader />
			<VideoItemLoader />
			<VideoItemLoader />
			<VideoItemLoader />
		</>
	);
};

const VideosList = ({ videosListData, currentVideoId }) => {
	return (
		<div className="videos-list__container">
			<p className="videos-list__headline">Next Videos</p>
			{!videosListData ? (
				<LoaderList />
			) : (
				videosListData
					.filter((video) => video.id !== currentVideoId)
					.map((videoDetailsObj) => {
						return (
							<VideoItem
								key={videoDetailsObj.id}
								videoDetailsObj={videoDetailsObj}
							/>
						);
					})
			)}
		</div>
	);
};

export default VideosList;
