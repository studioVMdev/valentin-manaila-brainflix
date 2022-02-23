import "./App.scss";
import Button from "./components/Button/Button";
import CommentList from "./components/CommentList/CommentList";
import VideosList from "./components/VideosList/VideosList";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import CommentForm from "./components/CommentForm/CommentForm";
import videosListData from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import Avatar from "./components/Avatar/Avatar";

import React, { Component } from "react";

export default class App extends Component {
	state = {
		videoDetails: videoDetails,
		videosListData: videosListData,
		currentVideoIndex: 0,
	};

	render() {
		return (
			<div className="App">
				<Header />
				<VideoPlayer
					videoDetails={
						this.state.videoDetails[this.state.currentVideoIndex]
					}
				/>
				<main className="main">
					<VideoDetails
						videoDetails={
							this.state.videoDetails[this.state.currentVideoIndex]
						}
					/>
					<section className="comments">
						<div className="comments__container">
							{/* <img src="" alt="user-icon" /> */}
							<Avatar className={"comments__avatar"} />
							<CommentForm />
							<CommentList
								videoDetail={
									this.state.videoDetails[this.state.currentVideoIndex]
								}
							/>
						</div>
					</section>

					<aside className="videos-list">
						<VideosList
							videosListData={this.state.videosListData}
							currentVideoIndex={this.state.currentVideoIndex}
						/>
					</aside>
				</main>
			</div>
		);
	}
}
