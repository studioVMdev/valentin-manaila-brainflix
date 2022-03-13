import React, { useState } from "react";
import "./CommentForm.scss";
import Button from "../Button/Button";
import addCommentLogo from "../../assets/icons/add_comment.svg";

const CommentForm = (props) => {
	const [userComment, setUserComment] = useState("");

	const isValid = (e) => {
		e.preventDefault();

		const commentInput = e.target.commentInput;
		if (!userComment) {
			commentInput.classList.add("input-field--error");
			return;
		}
		setUserComment("");
		commentInput.classList.remove("input-field--error");
		e.target.reset();
		props.postComment(userComment);
	};

	const handleOnChange = (e) => {
		const typedComment = e.target.value;
		typedComment ? setUserComment(typedComment) : setUserComment("");
	};

	return (
		<form onSubmit={isValid} className="comments__form">
			<div className="comment__input-wrapper">
				<label htmlFor="comment">
					<p className="comment__input-label">Join the conversation</p>
				</label>
				<textarea
					onChange={handleOnChange}
					name="commentInput"
					className={`comment__input input-field ${
						userComment && "input-field--error"
					}`}
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
