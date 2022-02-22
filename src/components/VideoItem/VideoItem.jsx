
import "./VideoItem.scss";
const VideoItem = () => {
  return (
    <div className="video-item">
    <img
      src=""
      alt="video thumbnail"
      className="video-item__thumbnail"
    />
    <div className="video-item__info-wrapper">
      <p className="video-item__title">
        Lorem, ipsum dolor sit amet consectetur adipisicing.
      </p>
      <p className="video-item__author">John Doe</p>
    </div>
  </div>
  )
}

export default VideoItem
