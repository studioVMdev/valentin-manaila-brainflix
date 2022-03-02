import React, { Component } from "react";

import VideoPlayer from "../../VideoPlayer/VideoPlayer";
import VideosList from "../../VideosList/VideosList";
import VideoDetails from "../../VideoDetails/VideoDetails";
import CommentList from "../../CommentList/CommentList";
import CommentForm from "../../CommentForm/CommentForm";
import Avatar from "../../Avatar/Avatar";
import userAvatar from "../../../assets/images/Mohan-muruge.jpg";
import {
	GET_VIDEOS_LIST,
	GET_VIDEO_DETAILS,
	DELETE_COMMENT,
	POST_COMMENT,
} from "../../../utils/apiCalls.mjs";

export default class HomePage extends Component {
	state = {
		videosListData: null,
		currentVideoDetails: null,
		currentVideoId: null,
	};

	async getVideosList() {
		const videosListData = await GET_VIDEOS_LIST();
		this.setState({ videosListData: videosListData.data });
	}

	async getVideoDetails(videoId) {
		const videoDetailsObj = await GET_VIDEO_DETAILS(videoId);
		this.setState({ currentVideoDetails: videoDetailsObj.data });
	}

	handleDelete = (e) => {
		const videoId = this.state.currentVideoId;
		const commentId = e.target.parentElement.parentElement.id;
		DELETE_COMMENT(videoId, commentId).then((response) => {
			console.log(response.status);
			response.status === 200 && this.getVideoDetails(videoId);
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const formIsValid = (e) => {
			const inputEl = e.target.children[0].children[1];
			if (inputEl.value === "") {
				inputEl.classList.add("input-field--error");
				return false;
			} else {
				inputEl.classList.remove("input-field--error");
				inputEl.value = "";
				return true;
			}
		};
		const inputVal = e.target.children[0].children[1].value;
		formIsValid(e) &&
			POST_COMMENT(this.state.currentVideoId, inputVal)
				.then((res) => {
					console.log(res);
				})
				.then(() => this.getVideoDetails(this.state.currentVideoId));
	};

	setCurrentVideoId = (videoId) => {
		console.log("🥽 setting current video id");
		this.setState({ currentVideoId: videoId });
	};

	componentDidMount() {
		console.log("🎄 app mounted");
		console.log("👓 main page props", this.props);
		this.getVideosList()
			.then(() =>
				console.log("🧨 video list data fetched", this.state.videosListData)
			)
			.then(() => {
				const currentId = this.state.videosListData[0].id;
				this.setState({ currentVideoId: currentId });
				this.getVideoDetails(currentId).then(() => {
					console.log("🎀 state after update", this.state);
				});
			});
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("🦺 app updated");
		console.log("🥼 prevProps", prevProps);
		console.log("🥼 prevState", prevState);
		const defaultVideoId = this.state.videosListData[0].id;
		const videoId = this.props.match.params.videoId;

		if (!videoId) {
			console.log("🎏 videoId", videoId);
			if (prevState.currentVideoId === defaultVideoId) {
				return;
			} else {
				this.setCurrentVideoId(defaultVideoId);
				this.getVideoDetails(defaultVideoId);
			}
		} else if (prevProps.match.params.videoId !== videoId) {
			console.log("🎏 videoId", videoId);
			this.getVideoDetails(videoId);
			this.setState({ currentVideoId: videoId });
		}
	}

	render() {
		const { videosListData, currentVideoDetails } = this.state;
		console.log("🖼 from Home render");
		return (
			<>
				{currentVideoDetails && (
					<VideoPlayer videoObj={currentVideoDetails} />
				)}
				<main className="main">
					<div className="main__left">
						{currentVideoDetails && (
							<VideoDetails videosDetailsList={currentVideoDetails} />
						)}
						<section className="comments">
							<div className="comments__container">
								{/* <img src="" alt="user-icon" /> */}
								<div className="comments__form-wrapper">
									<Avatar
										src={userAvatar}
										className={"comments__avatar"}
									/>
									<CommentForm handleSubmit={this.handleSubmit} />
								</div>
								{currentVideoDetails && (
									<CommentList
										currentVideoDetails={currentVideoDetails}
										handleDelete={this.handleDelete}
									/>
								)}
							</div>
						</section>
					</div>
					<aside className="videos-list">
						{videosListData && (
							<VideosList
								videosListData={videosListData}
								currentVideoId={videosListData}
							/>
						)}
					</aside>
				</main>
			</>
		);
	}
}
