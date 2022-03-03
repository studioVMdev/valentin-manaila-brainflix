import "./Comment.scss";

import React from "react";
import Avatar from "../Avatar/Avatar";
import { timeSince } from "../../utils/timestamp.mjs";

//todo add likes
const Comment = ({ commentObj, handleDelete }) => {
	const { name, comment, id, timestamp } = commentObj;
	return (
		<div className="comment" id={id}>
			<Avatar className={"comment__user-avatar"} src="" />
			<div className="comment__container">
				<div className="comment__info-wrapper">
					<p className="comment__author">{name}</p>
					<p className="comment__date">{timeSince(timestamp)}</p>
				</div>
				<p className="comment__body">{comment}</p>
				<button className="comment__delete-btn" onClick={handleDelete}>
					{" "}
					❌ Delete Comment
				</button>
			</div>
		</div>
	);
};
export default Comment;
