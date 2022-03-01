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

export { GET_VIDEOS_LIST, GET_VIDEO_DETAILS };

// GET /videos
// GET /videos/:id
// POST /videos/:id/comments
// DELETE /videos/:videoId/comments/:commentId
