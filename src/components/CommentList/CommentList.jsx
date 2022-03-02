import React from "react";
import "./CommentList.scss";
import Comment from "../Comment/Comment";
import { v4 as uuidv4 } from "uuid";
import { DELETE_COMMENT } from "../../utils/apiCalls.mjs";

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
							// interceptDelete={interceptDelete}
						/>
					);
				})}
		</div>
	);
};

export default CommentList;
