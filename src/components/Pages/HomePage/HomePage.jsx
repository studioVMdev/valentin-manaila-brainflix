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
	POST_LIKE,
	PATCH_VIDEO_LIKE,
} from "../../../utils/apiCalls.mjs";

export default class HomePage extends Component {
	state = {
		videosListData: null,
		currentVideoDetails: null,
		currentVideoId: null,
	};
	//* LIKE VIDEO  UI ===

	handleVideoLike = async () => {
		console.log("liking");
		const currentVideoId = this.state.currentVideoId;
		const response = await PATCH_VIDEO_LIKE(currentVideoId);
		response.status === 200 && this.getSameVideoDetails(currentVideoId);
	};

	//* POST - LIKE COMMENT AND UPDATE UI ===
	handleLike = async (e) => {
		console.log("👍 liked");
		const videoId = this.state.currentVideoId;
		const commentId = e.target.parentElement.parentElement.parentElement.id;
		const response = await POST_LIKE(videoId, commentId);
		response.status === 200 && this.getSameVideoDetails(videoId);
	};

	//* DELETE COMMENT and UPDATE UI =========
	handleDelete = async (e) => {
		const currVideoId = this.state.currentVideoId;
		console.log("deleting comment:", currVideoId);
		const commentId = e.target.parentElement.parentElement.parentElement.id;
		const response = await DELETE_COMMENT(currVideoId, commentId);
		console.log("🎨 Post deleted", response);
		response.status === 200 && this.getSelectedVideoDetails(currVideoId);
	};

	//* POST COMMENT and UPDATE UI =========
	postComment = async (comment) => {
		const currVideoId = this.state.currentVideoId;
		const response = await POST_COMMENT(currVideoId, comment);

		console.log("🧵 Posting comment...");
		response.status === 201 && this.getSameVideoDetails(currVideoId);
	};

	//* GET INITIAL STATE and UPDATE UI=====
	getInitialState = async () => {
		const videosListData = await GET_VIDEOS_LIST();
		const currentVideoId = videosListData.data[0].id;
		const videoDetailsObj = await GET_VIDEO_DETAILS(currentVideoId);
		console.log("💚 getting default state");

		this.setState({
			videosListData: videosListData.data,
			currentVideoId: currentVideoId,
			currentVideoDetails: videoDetailsObj.data,
		});
	};

	//* GET SAME VIDEO IF PAGE REFRESHES ===
	getSameVideoDetails = async (paramVideoId) => {
		const currentVideoId = paramVideoId;
		const videoDetailsObj = await GET_VIDEO_DETAILS(paramVideoId);
		console.log(
			"💌 getting same video comments ",
			videoDetailsObj.data.comments
		);
		this.setState({
			currentVideoId: currentVideoId,
			currentVideoDetails: videoDetailsObj.data,
		});
	};

	//* GET DEFAULT VIDEO DETAILS============
	getDefaultVideoDetails = async (defaultVideoId) => {
		const defaultVideoDetails = await GET_VIDEO_DETAILS(defaultVideoId);
		console.log("❣ setting initial state");
		this.setState({
			currentVideoId: defaultVideoId,
			currentVideoDetails: defaultVideoDetails.data,
		});
	};

	//* GET SELECTED VIDEO DETAILS============
	getSelectedVideoDetails = async (selectedVideoId) => {
		const videosListData = await GET_VIDEOS_LIST();
		const selectedVideoDetails = await GET_VIDEO_DETAILS(selectedVideoId);
		this.setState(
			{
				videosListData: videosListData.data,
				currentVideoId: selectedVideoId,
				currentVideoDetails: selectedVideoDetails.data,
			},
			() => {
				console.log("☢ setting selected video");
			}
		);
	};

	componentDidMount() {
		console.log("🎄🎄🎄🎄 component mounted...");
		const currParamVideoId = this.props.match.params.videoId;
		if (!currParamVideoId) {
			//This triggers first home page load
			this.getInitialState();
		} else if (currParamVideoId && !this.state.currentVideoId) {
			//This deals with a refresh on same video page
			this.getSelectedVideoDetails(currParamVideoId);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("🦺🦺🦺 updating component...");
		// console.log("🥼 prevProps", prevProps);
		// console.log("🥼 prevState", prevState);
		const defaultVideoId = this.state.videosListData[0].id;
		const currParamVideoId = this.props.match.params.videoId;
		const currStateVideoId = this.state.currentVideoId;
		const prevVideoId = this.props.match.params.videoId;

		if (!currParamVideoId) {
			console.log("💔 param videoId", currParamVideoId);

			if (currStateVideoId === defaultVideoId) {
				console.log("💙 updating complete...");
				return;
			} else if (prevState.currentVideoId !== defaultVideoId) {
				console.log("🧡 getting default video");
				this.getDefaultVideoDetails(defaultVideoId);
			}
		}

		if (currParamVideoId) {
			if (this.state.currentVideoId === currParamVideoId) {
				return;
			} else {
				this.getSelectedVideoDetails(currParamVideoId);
			}
			if (prevProps.match.params.videoId === currParamVideoId) {
				console.log("current video already set");
				return;
			} else {
				return;
			}
		}
	}

	render() {
		const { videosListData, currentVideoDetails } = this.state;
		console.log("👔👔👔 rendering started...");
		return (
			<>
				{currentVideoDetails && (
					<VideoPlayer videoObj={currentVideoDetails} />
				)}
				<main className="main">
					<div className="main__left">
						{currentVideoDetails && (
							<VideoDetails
								handleVideoLike={this.handleVideoLike}
								videosDetailsList={currentVideoDetails}
							/>
						)}
						<section className="comments">
							<div className="comments__container">
								<div className="comments__form-wrapper">
									<Avatar
										src={userAvatar}
										className={"comments__avatar"}
									/>
									<CommentForm postComment={this.postComment} />
								</div>
								{currentVideoDetails && (
									<CommentList
										currentVideoDetails={currentVideoDetails}
										handleDelete={this.handleDelete}
										handleLike={this.handleLike}
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
					</aside>
				</main>
			</>
		);
	}
}
