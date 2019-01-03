import React from 'react';

const Song = (props) => (
  <React.Fragment>
    <div className="artist">{props.song}</div>
  </React.Fragment>
);

export default Song;
