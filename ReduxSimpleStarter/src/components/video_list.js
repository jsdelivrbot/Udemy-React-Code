//plain function as this doenst have a state. .just shows the data given it to it
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

//can put this within ul as well. Just enclose in jsx {}. but better this way
  const videoItems = props.videos.map((video) => {
    //props have a function passed to it from index. Passing same fn to VideoListItem
    //to trigger video click.
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag} video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
};

export default VideoList;
