import React from "react";


const Button = ({ message, image }) => {
	return (
		<button
			className={
				message === "Comment"
					? "button comment__button"
					: "button upload__button"
			}
		>
			<img src={image} alt="" className="button__logo" />
			<p className="button__message">{message}</p>
		</button>
	);
};

export default Button;
