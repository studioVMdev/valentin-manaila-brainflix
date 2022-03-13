import React, { useEffect, useState } from "react";

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

const HomePage = (props) => {
	const [videosListData, setVideosListData] = useState(null);
	const [currentVideoDetails, setCurrentVideoDetails] = useState(null);
	const [currentVideoId, setCurrentVideoId] = useState(null);

	// * LIKE VIDEO  UI ===
	const handleVideoLike = async () => {
		console.log("liking");
		const response = await PATCH_VIDEO_LIKE(currentVideoId);
		response.status === 200 && getSameVideoDetails(currentVideoId);
	};

	//* POST - LIKE COMMENT AND UPDATE UI ===
	const handleLike = async (e) => {
		const commentId = e.target.parentElement.parentElement.parentElement.id;
		console.log("👍 liked: ", commentId);
		console.log("currentVideoId: ", currentVideoId);
		const response = await POST_LIKE(currentVideoId, commentId);
		console.log(response);
		response.status === 200 && getSameVideoDetails(currentVideoId);
	};

	//* DELETE COMMENT and UPDATE UI =========
	const handleDelete = async (e) => {
		console.log("deleting comment:", currentVideoId);
		const commentId = e.target.parentElement.parentElement.parentElement.id;
		const response = await DELETE_COMMENT(currentVideoId, commentId);
		console.log("🎨 Post deleted", response);
		response.status === 200 && getSelectedVideoDetails(currentVideoId);
	};

	//* POST COMMENT and UPDATE UI =========
	const postComment = async (comment) => {
		const response = await POST_COMMENT(currentVideoId, comment);
		console.log("🧵 Posting comment...");
		response.status === 201 && getSameVideoDetails(currentVideoId);
	};

	//* GET INITIAL STATE and UPDATE UI=====
	const getInitialState = async () => {
		const getVideosListData = await GET_VIDEOS_LIST();
		const getCurrentVideoId = getVideosListData.data[0].id;
		const getVideoDetailsObj = await GET_VIDEO_DETAILS(getCurrentVideoId);
		console.log("💚 getting default state");
		setVideosListData(getVideosListData.data);
		setCurrentVideoDetails(getVideoDetailsObj.data);
		setCurrentVideoId(getCurrentVideoId);
	};

	//* GET SAME VIDEO IF PAGE REFRESHES ===
	const getSameVideoDetails = async (currentVideoId) => {
		const getVideoDetailsObj = await GET_VIDEO_DETAILS(currentVideoId);
		setCurrentVideoDetails(getVideoDetailsObj.data);
	};

	//* GET SELECTED VIDEO DETAILS============
	const getSelectedVideoDetails = async (selectedVideoId) => {
		const getVideosListData = await GET_VIDEOS_LIST();

		const getSelectedVideoDetails = await GET_VIDEO_DETAILS(selectedVideoId);

		setCurrentVideoId(selectedVideoId);
		setVideosListData(getVideosListData.data);
		setCurrentVideoDetails(getSelectedVideoDetails.data);
		console.log("☢ setting selected video");
	};

  useEffect(() => {
		console.log("🔰🔰🔰 component did mount...");
  }, []);

  useEffect(() => {
		console.log("🦺🦺🦺 component did update...");
		const currParamVideoId = props.match.params.videoId;
		console.log("param changed: ", currParamVideoId);

		if (!currParamVideoId) {
			console.log("💔 param videoId", currParamVideoId);
			if (currParamVideoId === currentVideoId) {
				console.log("💙 updating complete...");
				return;
			} else if (currParamVideoId !== currentVideoId) {
				console.log("🧡 getting default video");
				getInitialState();
			}
		}
		if (currParamVideoId) {
			if (currentVideoId === currParamVideoId) {
				return;
			} else {
				getSelectedVideoDetails(currParamVideoId);
			}
		}
  }, [props.match.params.videoId]);

	return (
		<>
			{currentVideoDetails && <VideoPlayer videoObj={currentVideoDetails} />}
			<main className="main">
				<div className="main__left">
					{currentVideoDetails && (
						<VideoDetails
							handleVideoLike={handleVideoLike}
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
								<CommentForm postComment={postComment} />
							</div>
							{currentVideoDetails && (
								<CommentList
									currentVideoDetails={currentVideoDetails}
									handleDelete={handleDelete}
									handleLike={handleLike}
								/>
							)}
						</div>
					</section>
				</div>
				<aside className="videos-list">
					<VideosList
						videosListData={videosListData}
						currentVideoId={currentVideoId}
					/>
				</aside>
			</main>
		</>
	);
};

export default HomePage;
