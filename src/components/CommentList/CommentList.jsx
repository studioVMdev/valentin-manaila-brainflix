import React from "react";
import "./CommentList.scss";
import Comment from "../Comment/Comment";

const CommentList = ({ videoDetail }) => {
  return (
		<div className="comments__list">
			{videoDetail.comments.map((commentObj, i) => {
				return <Comment key={videoDetail.id} commentObj={commentObj} />;
			})}
		</div>
  );
};

export default CommentList;
