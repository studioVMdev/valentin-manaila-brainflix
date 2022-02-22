import "./App.css";
import Button from "./components/Button/Button";
import CommentList from "./components/CommentList/CommentList";
import VideosList from "./components/VideosList/VideosList";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Info from "./components/Info/Info";
import CommentForm from "./components/CommentForm/CommentForm";

function App() {
	return (
		<div className="App">
			<Header />
			<Video />

			<main className="main">
				<Info />

				<section className="comments">
					<div className="comments__container">
						<img src="" alt="user-icon" />
						<CommentForm />
						<CommentList />
					</div>
				</section>

				<aside className="videos-list">
					<VideosList />
				</aside>
			</main>
		</div>
	);
}

export default App;
