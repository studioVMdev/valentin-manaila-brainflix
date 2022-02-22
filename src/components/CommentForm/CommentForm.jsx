import React from 'react';
import './CommentForm.scss';
import Button from '../Button/Button';

const CommentForm = () => {
  return (
    <form action="" className="comments__form">
      <label htmlFor="comment">
        Join the conversation
        <input
          type="text"
          name="comment"
          className="comment__input input-field"
          placeholder="Add a new comment"
        />
      </label>
      <Button message="Comment" className="comment__button" />
    </form>
  );
};

export default CommentForm;