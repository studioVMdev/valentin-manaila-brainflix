import "./Comment.scss";

import React from "react";
import Avatar from "../Avatar/Avatar";
import { timeSince } from "../../utils/timestamp.mjs";

//todo: add likes

import ContentLoader from "react-content-loader";

const CommentLoader = (props) => (
	<ContentLoader
		speed={2}
		width={600}
		height={150}
		viewBox="0 0 900 500"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="54" y="42" rx="3" ry="3" width="537" height="56" />
		<rect x="55" y="114" rx="3" ry="3" width="118" height="18" />
		<rect x="438" y="7" rx="3" ry="3" width="149" height="16" />
		<rect x="54" y="5" rx="3" ry="3" width="100" height="15" />
		<circle cx="20" cy="20" r="20" />
	</ContentLoader>
);

const Comment = ({ commentObj, handleDelete }) => {
	const { name, comment, id, timestamp } = commentObj;
	if (!commentObj) {
		return <CommentLoader />;
	} else {
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
	}
};
export default Comment;
