import React from "react";
import "./Avatar.scss";

const Avatar = ({ src, className }) => {
	return <img className={className} src={src} alt="userimage" />;
};

export default Avatar;
