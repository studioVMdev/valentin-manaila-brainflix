import "./App.scss";
import HomePage from "./components/Pages/HomePage/HomePage";
import UploadPage from "./components/Pages/UploadPage/UploadPage";
import Header from "./components/Header/Header";
import NotFound from "./components/Pages/NotFound/NotFound";
import { Route, Switch, Redirect } from "react-router-dom";

import React from "react";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Redirect from="/home" to="/" />
				<Route path="/" exact component={HomePage} />
				<Route
					path="/videos/:videoId"
					render={(routerProps) => {
						return <HomePage {...routerProps} />;
					}}
				/>
				<Route
					path="/upload"
					render={(renderProps) => {
						console.log("upload rendering");
						return <UploadPage {...renderProps} />;
					}}
				/>
				<Route component={NotFound} />
			</Switch>
		</div>
	);
};

export default App;
