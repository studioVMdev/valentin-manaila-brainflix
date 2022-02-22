import React from 'react';
import "./CommentList.scss";
import Comment from "../Comment/Comment";

const CommentList = () => {
  return (
    <div className="comments__list">
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}

export default CommentList
