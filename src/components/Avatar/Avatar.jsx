import React from "react";
import "./Avatar.scss";

const Avatar = ({ src, className }) => {
  return (
		<div
			className={`${className} avatar`}
			style={{ backgroundImage: "url(" + src + ")" }}
		></div>
  );
};

export default Avatar;
