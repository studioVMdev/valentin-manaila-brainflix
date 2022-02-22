import React, { Component } from "react";
import AddCommentLogo from "../../assets/icons/add_comment.svg";
import UploadLogo from "../../assets/icons/upload.svg";

export class Button extends Component {
	render() {
		return (
			<button
				className={
					this.props.message === "Comment"
						? "button comment__button"
						: "button upload__button"
				}
			>
				<img
					src={
						this.props.message === "Comment" ? AddCommentLogo : UploadLogo
					}
					alt=""
					className="button__logo"
				/>
				<p className="button__message">{this.props.message}</p>
			</button>
		);
	}
}

export default Button;
