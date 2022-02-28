import "./App.scss";
// import CommentList from "./components/CommentList/CommentList";
// import VideosList from "./components/VideosList/VideosList";
// import Header from "./components/Header/Header";
// import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
// import VideoDetails from "./components/VideoDetails/VideoDetails";
// import CommentForm from "./components/CommentForm/CommentForm";
// import Avatar from "./components/Avatar/Avatar";
// import videosListData from "./data/videos.json";
// import userAvatar from "./assets/images/Mohan-muruge.jpg";
import videosDetailsList from "./data/video-details.json";
import HomePage from "./components/Pages/HomePage/HomePage";
import UploadPage from "./components/Pages/UploadPage/UploadPage";
import NotFound from "./components/Pages/NotFound/NotFound";
import { API_KEY, BASE_URL } from "./utils/apiCalls.mjs";
import { Route, Switch, Redirect } from "react-router-dom";

import React, { Component } from "react";

import axios from "axios";

export default class App extends Component {
	state = {
		videosDetailsList: videosDetailsList,
		// videosDetailsList: [],
		// videosListData: videosListData,
		videosListData: [],
		currentVideoDetails: null,
		currentVideoId: "84e96018-4022-434e-80bf-000ce4cd12b8",
		// currentVideoId: ""
	};

	playVideo = (id) => {
		// this.setState({ currentVideoId: id });

		axios
			.get(`${BASE_URL}/videos/${id}?api_key=${API_KEY}`)
			.then((response) => {
				console.log(response.data);
				this.setState({
					currentVideoId: id,
					currentVideoDetails: response.data,
				});
			});
	};

	componentDidMount() {
		console.log("mounted");
		axios
			.get(`${BASE_URL}/videos?api_key=${API_KEY}`)
			.then((response) => {
				console.log(response.data, "from API");
				// this.setState({ videosListData: response.data });
				this.setState({
					videosListData: response.data,
					currentVideoId: response.data[0].id,
				}, console.log(this.state, "state after fetch"));
				console.log(response.data[0].id, "first id is loaded");
				// this.setState({currentVideoId: response.data[0].id,})
			})
			.then(() => console.log(this.state.videosListData));
	}

	render() {
		console.log(this.state);
		return (
			<div className="App">
				<Switch>
					<Redirect from="/home" to="/" />
					<Route
						path="/"
						exact
						component={(routeProps) => {
							return (
								<HomePage
									handlePlayVideo={this.playVideo}
									stateObj={this.state}
									{...routeProps}
								/>
							);
						}}
					/>
					<Route path="/upload" component={UploadPage} />
					<Route
						path="/:videoId"
						exact
						render={(routerProps) => {
							return (
								<HomePage
									handlePlayVideo={this.playVideo}
									stateObj={this.state}
									{...routerProps}
								/>
							);
						}}
					/>
					<Route component={NotFound} />
				</Switch>
			</div>
		);
	}
}
