import React from "react";
import "./Header.scss";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/icons/search.svg";
import uploadLogo from "../../assets/icons/upload.svg";
import handleSubmit from "../../utils/handleSubmit.mjs";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<Link to="/">
					<img src={logo} className="header__logo" alt="logo"></img>
				</Link>
				<div className="header__right">
					<div className="header__search-wrapper">
						<img
							src={searchIcon}
							alt="search icon"
							className="header__search-icon"
						/>
						<input
							className="header__search-input input-field"
							placeholder="Search"
							name="search"
						/>
					</div>
					<Avatar src={userAvatar} className={"header__user-avatar"} />
					<Link to="/upload" style={{}}>
						<Button image={uploadLogo} message="Upload" />
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
