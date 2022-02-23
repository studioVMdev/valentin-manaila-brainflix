import React from "react";
import "./CommentList.scss";
import Comment from "../Comment/Comment";

const CommentList = ({ videoDetail }) => {
	return (
		<div className="comments__list">
			{videoDetail.comments.map((commentObj) => {
				<Comment key={commentObj.id} commentObj={commentObj} />;
			})}
		</div>
	);
};

export default CommentList;
