import axios from "axios";

const GET_VIDEOS_LIST = () => {
	return axios.get(
		`${process.env.REACT_APP_BASE_URL}/videos?api_key=${process.env.REACT_APP_API_KEY}`
	);
};

const GET_VIDEO_DETAILS = (videoId) => {
	return axios.get(
		`${process.env.REACT_APP_BASE_URL}/videos/${videoId}?api_key=${process.env.REACT_APP_API_KEY}`
	);
};

const DELETE_COMMENT = (videoId, commentId) => {
	return axios.delete(
		`${process.env.REACT_APP_BASE_URL}/videos/${videoId}/comments/${commentId}?api_key=${process.env.REACT_APP_API_KEY}`
	);
};

const POST_COMMENT = (videoId, comment) => {
	return axios.post(
		`${process.env.REACT_APP_BASE_URL}/videos/${videoId}/comments?api_key=${process.env.REACT_APP_API_KEY}`,
		{
			name: "Valentin Manaila",
			comment: comment,
		}
	);
};

export { GET_VIDEOS_LIST, GET_VIDEO_DETAILS, DELETE_COMMENT, POST_COMMENT };

// https://project-2-api.herokuapp.com/register
// GET /videos
// GET /videos/:id
// POST /videos/:id/comments
// DELETE /videos/:videoId/comments/:commentId
