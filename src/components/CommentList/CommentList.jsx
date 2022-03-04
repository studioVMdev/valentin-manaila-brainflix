import React from "react";
import "./CommentList.scss";
import Comment from "../Comment/Comment";


const CommentList = ({ currentVideoDetails, handleDelete }) => {
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
						/>
					);
				})}
		</div>
	);
};

export default CommentList;
