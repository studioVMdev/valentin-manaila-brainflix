import React, { Component } from "react";
import Button from "../../Button/Button";
import publishLogo from "../../../assets/icons/publish.svg";
import uploadVideoImage from "../../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { POST_VIDEO } from "../../../utils/apiCalls.mjs";
export default class UploadPage extends Component {
	state = {
		title: "",
		description: "",
		isFormValid: false,
	};

	notify = () =>
		toast.info("Video uploaded successfully. 🙌 Redirecting to Homepage", {
			position: "bottom-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});

	//* POST VIDEO and UPDATE UI =========
	publishVideo = async (title, description) => {
		console.log(title, description);
		const newVideo = {
			title,
			description,
			image: "https://images.unsplash.com/photo-1459682687441-7761439a709d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=80",
		};
		const response = await POST_VIDEO(newVideo);
		if (response.status === 201) {
			this.notify();
			setTimeout(() => {
				this.props.history.push("/");
			}, 3000);
		}
	};

	//* HANDLE CHANGE ON TYPE  =========
	handleOnChange = (e) => {
		this.setState(
			{
				[e.target.name]: e.target.value,
			},
			() => {
				if (
					this.state.title &&
					this.state.description &&
					!this.state.isFormValid
				) {
					this.setState({
						isFormValid: true,
					});
				}
				if (
					(!this.state.title || !this.state.description) &&
					this.state.isFormValid
				) {
					this.setState({
						isFormValid: false,
					});
				}
			}
		);
	};

	componentDidUpdate() {
		console.log("🤶🤶🤶 component updated");
	}

	isFormValid = (e) => {
		e.preventDefault();
		console.log("checking if valid");

		const formEl = e.target;
		const titleInputEl = e.target.title;
		const descriptionInputEl = e.target.description;
		const title = titleInputEl.value;
		const description = descriptionInputEl.value;

		!title
			? titleInputEl.classList.add("input-field--error")
			: titleInputEl.classList.remove("input-field--error");

		!description
			? descriptionInputEl.classList.add("input-field--error")
			: descriptionInputEl.classList.remove("input-field--error");

		if (title && description) {
			console.log("form is valid, publishing");
			this.publishVideo(title, description);
			formEl.reset();
			return true;
		}
		return false;
	};

	render() {
		console.log("🎪 upload page rendered");
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
								<textarea
									onChange={this.handleOnChange}
									className="upload__input upload__input-description input-field "
									type="text"
									name="description"
									placeholder="Add a description to your video"
								></textarea>
							</div>
						</div>
						<div className="upload__buttons-wrapper">
							<Button image={publishLogo} message="publish" />;
							<button className="button upload__button ">CANCEL</button>
							<ToastContainer
								position="bottom-center"
								autoClose={3000}
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
