import React from 'react'
import AddCommentLogo from "../../assets/icons/add_comment.svg";
import UploadLogo from "../../assets/icons/upload.svg";


const Button = ({ message }) => {
  return (
    <button
      className={
        message === "Comment"
          ? "button comment__button"
          : "button upload__button"
      }
    >
      <img
        src={
          message === "Comment" ? AddCommentLogo : UploadLogo
        }
        alt=""
        className="button__logo"
      />
      <p className="button__message">{message}</p>
    </button>
  )
}

export default Button