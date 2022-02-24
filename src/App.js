import "./App.scss";
import CommentList from "./components/CommentList/CommentList";
import VideosList from "./components/VideosList/VideosList";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import CommentForm from "./components/CommentForm/CommentForm";
import videosListData from "./data/videos.json";
import videosDetailsList from "./data/video-details.json";
import Avatar from "./components/Avatar/Avatar";

import React, { Component } from "react";

export default class App extends Component {
	state = {
		videosDetailsList: videosDetailsList,
		videosListData: videosListData,

		currentVideoId: "84e96018-4022-434e-80bf-000ce4cd12b8",
	};

	playVideo = (id) => {
		// console.log("clicked");
		// console.log("current id in state " + this.state.currentVideoId);
		// console.log("clicked on " + id);

		this.setState({ currentVideoId: id }, () => {
			console.log(
				"object in state after click " +
					this.state.videosDetailsList.find(
						(videoDetailsObj) => videoDetailsObj.id === id
					).id
			);
		});

		// console.log("id in state after click " + id);
	};

	render() {
		const currentVideoObject = this.state.videosDetailsList.find(
			(videoDetailsObj) => {
				return videoDetailsObj.id === this.state.currentVideoId;
			}
		);

		return (
			<div className="App">
				<Header />
				<VideoPlayer videoObj={currentVideoObject} />
				<main className="main">
					<VideoDetails
						videosDetailsList={
							// this.state.videosDetailsList[this.state.currentVideoIndex]
							currentVideoObject
						}
					/>
					<section className="comments">
						<div className="comments__container">
							{/* <img src="" alt="user-icon" /> */}
							<Avatar className={"comments__avatar"} />
							<CommentForm />
							<CommentList
								videoDetail={
									// this.state.videosDetailsList[
									// 	this.state.currentVideoIndex
									// ]
									currentVideoObject
								}
							/>
						</div>
					</section>

					<aside className="videos-list">
						<VideosList
							videosListData={this.state.videosListData}
							currentVideoIndex={this.state.currentVideoIndex}
							handlePlayVideo={this.playVideo}
						/>
					</aside>
				</main>
			</div>
		);
	}
}
