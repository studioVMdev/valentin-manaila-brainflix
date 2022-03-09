import axios from "axios";

const GET_VIDEOS_LIST = () => {
	return axios.get(`${process.env.REACT_APP_BASE_URL}/videos`);
};

const GET_VIDEO_DETAILS = (videoId) => {
	return axios.get(`${process.env.REACT_APP_BASE_URL}/videos/${videoId}`);
};

const DELETE_COMMENT = (videoId, commentId) => {
	return axios.delete(
		`${process.env.REACT_APP_BASE_URL}/videos/${videoId}/comments/${commentId}`
	);
};

const POST_COMMENT = (videoId, comment) => {
	return axios.post(
		`${process.env.REACT_APP_BASE_URL}/videos/${videoId}/comments`,
		{
			name: "Mohan Muruge",
			comment: comment,
		}
	);
};

const POST_LIKE = (videoId, commentId) => {
	return axios.patch(
		`${process.env.REACT_APP_BASE_URL}/videos/${videoId}/comments/${commentId}`
	);
};

const POST_VIDEO = ({ title, description, image }) => {
	return axios.post(`${process.env.REACT_APP_BASE_URL}/upload`, {
		title,
		description,
		image,
	});
};

export {
	GET_VIDEOS_LIST,
	GET_VIDEO_DETAILS,
	DELETE_COMMENT,
	POST_COMMENT,
	POST_VIDEO,
	POST_LIKE,
};
