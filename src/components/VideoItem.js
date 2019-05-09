import React from 'react';
import './VideoItem.css';

// class VideoItem extends React.Component {
//   render() {
//     return (
//       <div>Video item</div>
//     )
//   }
// }

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.title} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem;
