import React, { Component } from "react";
import "./CommentForm.scss";
import Button from "../Button/Button";
import addCommentLogo from "../../assets/icons/add_comment.svg";

export default class CommentForm extends Component {
	state = {
		comment: null,
		isCommentValid: false,
	};

	handleOnChange = (e) => {
		const userComment = e.target.value;
		userComment
			? this.setState({ comment: userComment, isCommentValid: true })
			: this.setState({ comment: userComment, isCommentValid: false });
	};

	isValid = (e) => {
		e.preventDefault();
		const commentInput = e.target.commentInput;
		const userComment = this.state.comment;

		if (!userComment) {
			commentInput.classList.add("input-field--error");
			return;
		}
		this.setState({ comment: "", isCommentValid: false });
		commentInput.classList.remove("input-field--error");
		e.target.reset();

		this.props.postComment(userComment);
	};

	render() {
		return (
			<form onSubmit={this.isValid} className="comments__form">
				<div className="comment__input-wrapper">
					<label htmlFor="comment">
						<p className="comment__input-label">Join the conversation</p>
					</label>
					<textarea
						onChange={this.handleOnChange}
						name="commentInput"
						className={`comment__input input-field ${
							this.state.isCommentValid && "input-field--error"
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
	}
}
