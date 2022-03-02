import "./Comment.scss";

import React from "react";
import Avatar from "../Avatar/Avatar";
import { timeSince, timestampToDate } from "../../utils/timestamp.mjs";

//todo add likes
const Comment = ({ commentObj, handleDelete, interceptDelete }) => {
	const { name, comment, id, timestamp } = commentObj;
	return (
		<div className="comment" id={id}>
			<Avatar className={"comment__user-avatar"} />
			<div className="comment__container">
				<div className="comment__info-wrapper">
					<p className="comment__author">{name}</p>
					<p className="comment__date">{timeSince(timestamp)}</p>
				</div>
				<p className="comment__body">{comment}</p>
				<button onClick={handleDelete}>Delete Comment</button>
			</div>
		</div>
	);
};
export default Comment;
