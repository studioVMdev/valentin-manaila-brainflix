import React from "react";
import "./Header.scss";
import Button from "../Button/Button";
import Logo from "../../assets/logo/BrainFlix-logo.svg";
import userAvatar from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets/icons/search.svg";
import Avatar from "../Avatar/Avatar";
import UploadLogo from "../../assets/icons/upload.svg";

const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<img src={Logo} className="header__logo" alt="logo"></img>
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
					<Button image={UploadLogo} message="Upload" />
				</div>
			</div>
		</header>
	);
};

export default Header;
