import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../Button/Button";
import "./NotFound.scss";

const NotFound = () => {
	return (
		<>
			<main className="not-found">
				<div className="not-found__container">
					<h1 className="not-found__title"> 😕 Page cannot be found.</h1>
					<NavLink to="/" className="not-found__button">
						<Button message="back" />
					</NavLink>
				</div>
			</main>
		</>
	);
};

export default NotFound;
