import React from "react";
import "./CommentForm.scss";
import Button from "../Button/Button";
import addCommentLogo from "../../assets/icons/add_comment.svg";

import { POST_COMMENT } from "../../utils/apiCalls.mjs";

const CommentForm = ({ handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit} action="" className="comments__form">
			<div className="comment__input-wrapper">
				<label htmlFor="comment">
					<p className="comment__input-label">Join the conversation</p>
				</label>
				<textarea
					name="comment"
					className="comment__input input-field"
					placeholder="Add a new comment"
					rows={4}
				></textarea>
			</div>
			<Button
				message="Comment"
				image={addCommentLogo}
				className="comment__button"
			/>
		</form>
	);
};

export default CommentForm;
