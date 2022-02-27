import React from "react";
import "./CommentList.scss";
import Comment from "../Comment/Comment";
import { v4 as uuidv4 } from "uuid";

const CommentList = ({ videoDetail }) => {
	return (
		<div className="comments__list">
			{videoDetail.comments.map((commentObj, i) => {
				return <Comment key={uuidv4()} commentObj={commentObj} />;
			})}
		</div>
	);
};

export default CommentList;
