import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../../Button/Button";
import publishLogo from "../../../assets/icons/publish.svg";
import uploadVideoImage from "../../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { ToastContainer, toast } from "react-toastify";
export default class UploadPage extends Component {
	state = {
		title: "",
		description: "",
		isFormValid: false,
	};

	notify = () =>
		toast("🦄 Wow so easy!", {
			position: "bottom-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

	publishVideo = (title, description) => {
		console.log(title, description);
	};

	handleOnChange = (e) => {
		this.setState(
			{
				[e.target.name]: e.target.value,
				[e.target.name]: e.target.value,
			},
			() => {
				if (this.state.title && this.state.description) {
					this.setState({
						isFormValid: !this.state.isFormValid,
					});
				} else {
					this.setState({
						isFormValid: false,
					});
				}
			}
		);
	};

	isFormValid = (e) => {
		this.notify();
		e.preventDefault();
		console.log("checking if valid");
		const formEl = e.target;
		const titleInputEl = e.target.title;
		const descriptionInputEl = e.target.description;
		const title = this.state.title;
		const description = this.state.description;
		const isFormValid = this.state.isFormValid;

		!title
			? titleInputEl.classList.add("input-field--error")
			: titleInputEl.classList.remove("input-field--error");
		!description
			? descriptionInputEl.classList.add("input-field--error")
			: descriptionInputEl.classList.remove("input-field--error");

		if (isFormValid) {
			console.log("form is valid, publishing");
			// this.publishVideo(title, description);

			formEl.reset();
		}
	};

	render() {
		console.log("🎪 upload page rendered");

		const button = <Button image={publishLogo} message="publish" />;
		const linkButton = (
			<Link to="/">
				<Button image={publishLogo} message="publish" />
			</Link>
		);

		return (
			<main className="upload">
				<div className="upload__container">
					<h1 className="upload__title">Upload Video</h1>
					<form onSubmit={this.isFormValid} className="upload__form">
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
									onChange={this.handleOnChange}
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
									onChange={this.handleOnChange}
									className="upload__input upload__input-description input-field "
									type="text"
									name="description"
									placeholder="Add a description to your video"
								/>
							</div>
						</div>
						<div className="upload__buttons-wrapper">
							{this.state.isFormValid ? linkButton : button}
							<button className="button upload__button ">CANCEL</button>
							<ToastContainer
								position="bottom-center"
								autoClose={5000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
							/>
						</div>
					</form>
				</div>
			</main>
		);
	}
}
