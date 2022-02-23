import React from "react";
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

class App extends React.Component() {
	state = {
		videosData: videosData,
		videosListData: videosListData,
		currentVideoIndex: 0,
	};

	render() {
		const { videosData, videoDetails, currentVideoIndex } = state;
		console.log(videosData, videoDetails);

		return (
			<div className="App">
				<Header />
				<VideoPlayer videoDetails={videoDetails[currentVideoIndex]} />
				<main className="main">
					<VideoDetails videoDetails={videoDetails[currentVideoIndex]} />
					<section className="comments">
						<div className="comments__container">
							{/* <img src="" alt="user-icon" /> */}
							<Avatar className={"comments__avatar"} />
							<CommentForm />
							<CommentList
								videoDetails={videoDetails[currentVideoIndex]}
							/>
						</div>
					</section>

					<aside className="videos-list">
						<VideosList videosListData={videosListData} />
					</aside>
				</main>
			</div>
		);
	}
}

export default App;
