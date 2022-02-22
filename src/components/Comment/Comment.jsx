import React, { Component } from "react";
import "./Comment.scss";

export class Comment extends Component {
	render() {
		return (
			<div className="comment">
				<img src="" alt="user-avatar" className="comment__user-abat" />
				<div className="comment__info">
					<p className="comment__author">John Doe</p>
					<p className="comment__date">01/02/03</p>
				</div>
				<p className="comment__body">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
					ullam odit unde dolor commodi totam laboriosam, ea eaque
					perferendis qui a consequuntur aspernatur, repellendus optio
					ipsam numquam! Quae, et ipsa?
				</p>
			</div>
		);
	}
}

export default Comment;
