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

import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
	state = {
		videosDetailsList: videosDetailsList,
		videosListData: videosListData,
		// videosDetailsList2: [],
		// videosListData2: [],
		// videosDetailsList: [],
		// videosListData: [],
		currentVideoId: "84e96018-4022-434e-80bf-000ce4cd12b8",
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
		console.log("mounted");
		// axios
		// 	.get("http://localhost:5000/videosList")
		// 	.then((response) => {
		// 		console.log(response.data);
		// 		this.setState({ videosListData2: response.data });
		// 	})
		// 	.then(() => console.log(this.state.videosDetailsList2));

		// axios.get("http://localhost:5000/videoDetails").then((response) => {
		// 	console.log(response.data);
		// 	this.setState({ videosDetailsList2: response.data });
		// });
	}

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
					<div className="main__left">
						<VideoDetails videosDetailsList={currentVideoObject} />
						<section className="comments">
							<div className="comments__container">
								{/* <img src="" alt="user-icon" /> */}
								<div className="comments__form-wrapper">
									<Avatar
										src={userAvatar}
										className={"comments__avatar"}
									/>
									<CommentForm />
								</div>
								<CommentList videoDetail={currentVideoObject} />
							</div>
						</section>
					</div>
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
