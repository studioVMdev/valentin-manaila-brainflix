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

	handleDelete = (e) => {
		const videoId = this.state.currentVideoId;
		const commentId = e.target.parentElement.parentElement.id;
		DELETE_COMMENT(videoId, commentId).then((response) => {
			response.status === 200 && this.getSelectedVideoDetails(videoId);
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
				.then(() =>
					this.getSelectedVideoDetails(this.state.currentVideoId)
				);
	};

	//* GET INITIAL STATE==================
	async getInitialState() {
		const videosListData = await GET_VIDEOS_LIST();
		const currentVideoId = videosListData.data[0].id;
		const videoDetailsObj = await GET_VIDEO_DETAILS(currentVideoId);
		console.log("💚 setting initial state");
		this.setState({
			videosListData: videosListData.data,
			currentVideoId: currentVideoId,
			currentVideoDetails: videoDetailsObj.data,
		});
	}

	//* GET DEFAULT VIDEO DETAILS============

	async getDefaultVideoDetails(defaultVideoId) {
		const defaultVideoDetails = await GET_VIDEO_DETAILS(defaultVideoId);
		console.log("❣ setting initial state");
		this.setState({
			currentVideoId: defaultVideoId,
			currentVideoDetails: defaultVideoDetails.data,
		});
	}

	//* GET SELECTED VIDEO DETAILS============
	async getSelectedVideoDetails(videoId) {
		const selectedVideoDetails = await GET_VIDEO_DETAILS(videoId);
		console.log("☢ setting selected video");
		this.setState(
			{
				currentVideoId: videoId,
				currentVideoDetails: selectedVideoDetails.data,
			},
			console.log(this.state)
		);
	}

	componentDidMount() {
		console.log("🎄🎄🎄🎄 app mounted");
		this.getInitialState();
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("🦺🦺🦺🦺 app updated");
		// console.log("🥼 prevProps", prevProps);
		// console.log("🥼 prevState", prevState);
		const defaultVideoId = this.state.videosListData[0].id;
		const currVideoId = this.props.match.params.videoId;
		const prevVideoId = this.props.match.params.videoId;

		if (!currVideoId) {
			console.log("💔 NO videoId", currVideoId);

			if (prevState.currentVideoId === defaultVideoId) {
				console.log("💙 stop after getting default");
				return;
			} else {
				console.log("🧡 getting default video");
				this.getDefaultVideoDetails(defaultVideoId);
			}
		}

		if (currVideoId) {
			console.log("setting current video");

			if (this.state.currentVideoId === currVideoId) {
				return;
			} else {
				this.getSelectedVideoDetails(currVideoId);
			}

			if (prevProps.match.params.videoId === currVideoId) {
				console.log("already set");
				return;
			} else {
				return;
			}
		}
	}

	render() {
		const { videosListData, currentVideoDetails } = this.state;
		console.log("🖼 state from Home render", this.state);
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
						<VideosList
							videosListData={videosListData}
							currentVideoId={this.state.currentVideoId}
						/>
						{/* )} */}
					</aside>
				</main>
			</>
		);
	}
}
