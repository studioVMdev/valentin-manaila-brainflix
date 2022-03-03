import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import publishLogo from "../../../assets/icons/publish.svg";
import uploadVideoImage from "../../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";

const UploadPage = () => {
	console.log("🎪 upload page mounted");
	return (
		<main className="upload">
			<div className="upload__container">
				<h1 className="upload__title">Upload Video</h1>
				<form className="upload__form" action="submit">
					<div className="upload__form-wrapper">
						<div className="upload__form-wrapper-left">
							<p className="upload__input-label">VIDEO THUMBNAIL</p>
							<img
								className="upload__thumbnail"
								src={uploadVideoImage}
								alt="video thumbnail"
							/>
						</div>
						<div className="upload__form-wrapper-right">
							<label className="upload__input-label" htmlFor="title">
								Title your video
							</label>
							<input
								className="upload__input input-field"
								type="text"
								name="title"
								placeholder="Add a title to your video"
							/>
							<label
								className="upload__input-label"
								htmlFor="description"
							>
								Add a video description
							</label>
							<input
								className="upload__input upload__input-description input-field "
								type="text"
								name="description"
								placeholder="Add a description to your video"
							/>
						</div>
					</div>
					<div className="upload__buttons-wrapper">
						<Link to="/">
							<Button image={publishLogo} message="publish" />
						</Link>
						<button className="button upload__button ">CANCEL</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default UploadPage;
