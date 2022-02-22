import "./App.css";
import Button from "./components/Button/Button";
import CommentList from "./components/CommentList/CommentList";
import VideosList from "./components/VideosList/VideosList";

function App() {
	return (
		<div className="App">
			<header className="header">
				<div className="header__container">
					<img className="header__logo" alt="logo"></img>
					<div className="header__wrapper">
						<input
							className="header__search input-field"
							placeholder="Search"
							name="search"
						></input>
						<Button message="Upload" />
						<img className="header__user-avatar" alt="userimage"></img>
					</div>
				</div>
			</header>

			<section className="video">
				<div className="video__wrapper">
					<video src="" className="video__player"></video>
					<div className="video__player-controls"></div>
				</div>
			</section>

			<main className="main">
				<section className="info">
					<div className="info__container">
						<h2 className="info__title">VideoTitle</h2>
						<div className="info__left">
							<p className="info__author">By: XXX</p>
							<p className="info__date">01/02/03</p>
						</div>
						<div className="info__right">
							<div className="views__wrapper">
								<img src="" alt="eye-icon" className="views__icon" />
								<p className="views__count">543345343</p>
							</div>
							<div className="likes__wrapper">
								<img src="" alt="heart-icon" className="likes__icon" />
								<p className="likes__count">12345567</p>
							</div>
						</div>
						<div className="info__description">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Veniam qui asperiores a quas eaque deserunt illum culpa
							quaerat possimus itaque.
						</div>
						<p className="info__comments-count"></p>
					</div>
				</section>

				<section className="comments">
					<div className="comments__container">
						<img src="" alt="user-icon" />
						<form action="" className="comments__form">
							<label htmlFor="comment">
								Join the conversation
								<input
									type="text"
									name="comment"
									className="comment__input input-field"
									placeholder="Add a new comment"
								/>
							</label>
							<Button message="Comment" className="comment__button" />
						</form>
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
