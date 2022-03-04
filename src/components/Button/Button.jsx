import React from "react";
import "./Button.scss";

const Button = ({ message, image }) => {
	return (
		<button type="click" className={`${message}__button button`}>
			<img src={image} alt={`${message} button`} className="button__logo" />
			<p className="button__message">{message}</p>
		</button>
	);
};

export default Button;
