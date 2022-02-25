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
import userAvatar from "./assets/images/Mohan-muruge.jpg";
import axios from "axios";

import React, { Component } from "react";

export default class App extends Component {
	state = {
		videosDetailsList: videosDetailsList,
		videosListData: videosListData,
		// videosDetailsList: [],
		// videosListData: [],
		currentVideoId: "84e96018-4022-434e-80bf-000ce4cd12b8",
		currentVideoObject: null,
	};

	playVideo = (id) => {
		this.setState({ currentVideoId: id }, () => {
			console.log(
				"object in state after click " +
					this.state.videosDetailsList.find(
						(videoDetailsObj) => videoDetailsObj.id === id
					).id
			);
		});
	};

	componentDidMount() {
		// axios("http://localhost:4000/videosList").then((response) => {
		// 	this.setState(
		// 		{ videosListData: response.data },
		// 		console.log(this.state)
		// 	);
		// });
		// axios("http://localhost:4000/videoDetails").then((response) => {
		// 	const currVid = response.data.find((videoDetailsObj) => {
		// 		return videoDetailsObj.id === this.state.currentVideoId;
		// 	});
		// 	this.setState(
		// 		{ videosDetailsList: response.data },
		// 		console.log(this.state)
		// 	);
		// 	this.setState({ currentVideoObject: currVid });
		// });
	}

	render() {
		const currentVideoObject = this.state.videosDetailsList.find(
			(videoDetailsObj) => {
				return videoDetailsObj.id === this.state.currentVideoId;
			}
		);

		// const currentVideoObject = this.state.currentVideoObject;

		return (
			<div className="App">
				<Header />
				<VideoPlayer videoObj={currentVideoObject} />
				<main className="main">
					<VideoDetails videosDetailsList={currentVideoObject} />
					<section className="comments">
						<div className="comments__container">
							<Avatar className={"comments__avatar"} src={userAvatar} />
							<CommentForm />
							<CommentList videoDetail={currentVideoObject} />
						</div>
					</section>

					<aside className="videos-list">
						<VideosList
							videosListData={this.state.videosListData}
							currentVideoId={this.state.currentVideoId}
							handlePlayVideo={this.playVideo}
						/>
					</aside>
				</main>
			</div>
		);
	}
}
