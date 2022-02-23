import "./Comment.scss";

import React from "react";
import Avatar from "../Avatar/Avatar";

//todo add likes
const Comment = ({ commentObj }) => {
	return (
		<div className="comment">
			<Avatar className={"comment__user-avatar"} />
			<div className="comment__info">
				<p className="comment__author">{commentObj.name}</p>
				<p className="comment__date">{commentObj.timestamp}</p>
			</div>
			<p className="comment__body">{commentObj.comment}</p>
		</div>
	);
};
export default Comment;
