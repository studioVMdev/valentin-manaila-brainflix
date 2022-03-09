import React from "react";
import "./CommentList.scss";
import Comment from "../Comment/Comment";

const CommentList = ({ currentVideoDetails, handleDelete, handleLike }) => {
	return (
		<div className="comments__list">
			{[...currentVideoDetails.comments]
				.sort((b, a) => a.timestamp - b.timestamp)
				.map((commentObj) => {
					return (
						<Comment
							key={commentObj.id}
							commentObj={commentObj}
							handleDelete={handleDelete}
							handleLike={handleLike}
						/>
					);
				})}
		</div>
	);
};

export default CommentList;
