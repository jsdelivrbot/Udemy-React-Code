import React from 'react';

//below small trick. .reading props that we need . not the entire props object
const VideoListItem = ({video, onVideoSelect}) => {
//Above curly brace declarion is same as thing. .ES6 syntax
//that initializes the variable video with video from props..
//  const video = props.video;
const imageUrl = video.snippet.thumbnails.default.url;
  return (
    //onlcik method trigger the passed method. .and hands it the clicked video.
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media=heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
