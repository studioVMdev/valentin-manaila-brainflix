import React from "react";
import Header from "../../Header/Header";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";
import VideosList from "../../VideosList/VideosList";
import VideoDetails from "../../VideoDetails/VideoDetails";
import CommentList from "../../CommentList/CommentList";
import CommentForm from "../../CommentForm/CommentForm";
import Avatar from "../../Avatar/Avatar";
import userAvatar from "../../../assets/images/Mohan-muruge.jpg";

const HomePage = ({ stateObj, handlePlayVideo }) => {
	console.log(stateObj);

	const currentVideoObject = stateObj.videosDetailsList.find(
		(videoDetailsObj) => {
			return videoDetailsObj.id === stateObj.currentVideoId;
		}
	);

	return (
		<>
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
						videosListData={stateObj.videosListData}
						currentVideoId={stateObj.currentVideoId}
						handlePlayVideo={handlePlayVideo}
					/>
				</aside>
			</main>
		</>
	);
};

export default HomePage;
