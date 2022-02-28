import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import uploadLogo from "../../../assets/icons/upload.svg";
{
	/* <button onClick={() => {}}>Upload</button> */
}
const UploadPage = () => {
	return (
		<>
			<h1>Upload Page</h1>
			<form action="submit">
				<input type="text" />
				<input type="text" name="" id="" />
				<Link to="/">
					<Button image={uploadLogo} message="Upload" />
				</Link>
			</form>
		</>
	);
};

export default UploadPage;
