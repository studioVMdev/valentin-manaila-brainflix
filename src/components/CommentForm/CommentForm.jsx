import React from "react";
import "./CommentForm.scss";
import Button from "../Button/Button";
import AddCommentLogo from "../../assets/icons/add_comment.svg";

const CommentForm = () => {
	return (
		<form action="" className="comments__form">
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
				image={AddCommentLogo}
				className="comment__button"
			/>
		</form>
	);
};

export default CommentForm;
