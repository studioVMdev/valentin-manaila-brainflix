import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../Button/Button";
import publishLogo from "../../../assets/icons/publish.svg";
import uploadVideoImage from "../../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { POST_VIDEO } from "../../../utils/apiCalls.mjs";

const notify = () =>
	toast.info("Video uploaded successfully. 🙌 Redirecting to Homepage", {
		position: "bottom-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const UploadPage = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [isFormValid, setIsFormValid] = useState(false);
	const history = useHistory();

	useEffect(() => {
		console.log("🤶🤶🤶 component mounted");
	}, []);

	//* Validate form  =========
	const validateForm = (e) => {
		e.preventDefault();

		const formEl = e.target;
		const titleInputEl = e.target.title;
		const descriptionInputEl = e.target.description;
		const title = titleInputEl.value;
		const description = descriptionInputEl.value;

		// console.log("checking if valid");

		!title
			? titleInputEl.classList.add("input-field--error")
			: titleInputEl.classList.remove("input-field--error");

		!description
			? descriptionInputEl.classList.add("input-field--error")
			: descriptionInputEl.classList.remove("input-field--error");

		if (title && description) {
			console.log("form is valid, publishing");
			publishVideo(title, description);
			formEl.reset();
			return true;
		}
		return false;
	};

	//* POST VIDEO and UPDATE UI =========
	const publishVideo = async (title, description) => {
		console.log(title, description);
		const newVideo = {
			title,
			description,
			image: "https://images.unsplash.com/photo-1459682687441-7761439a709d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1540&q=80",
		};
		const response = await POST_VIDEO(newVideo);
		if (response.status === 201) {
			notify();
			setTimeout(() => {
				history.push("/");
			}, 3000);
		}
	};

	//* HANDLE CHANGE ON TYPE  =========
	const handleOnChange = (e) => {
		e.target.name === "title" && setTitle(e.target.value);
		e.target.name === "description" && setDescription(e.target.value);

		if (title && description && !isFormValid) {
			setIsFormValid(true);
		}

		if ((!title || !description) && isFormValid) {
			setIsFormValid(false);
		}
	};

	return (
		<main className="upload">
			<div className="upload__container">
				<h1 className="upload__title">Upload Video</h1>
				<form onSubmit={validateForm} className="upload__form">
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
								onChange={handleOnChange}
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
								onChange={handleOnChange}
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
};

export default UploadPage;
