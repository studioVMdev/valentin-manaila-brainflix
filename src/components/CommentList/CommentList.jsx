import React, { Component } from "react";
import "./CommentList.scss";
import Comment from "../Comment/Comment";

export class CommentList extends Component {
	render() {
		return (
			<div className="comments__list">
				<Comment />
				<Comment />
				<Comment />
			</div>
		);
	}
}

export default CommentList;
