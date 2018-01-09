import React from 'react';

const VideoList = (props) => {
  return (
    <ul className= "col-med-4 list-group">
    {props.videos.length}
    </ul>
  );
};

export default VideoList
