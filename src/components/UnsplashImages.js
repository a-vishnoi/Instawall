import React from 'react';

const UnsplashImages = (props) => {
  const user = props.user;
  const url = props.urls.thumb;
  const name = user.first_name + " " +user.last_name;

  return (
    <div className="image">
      <img
        className="photo"
        src={url}
        id={props.id}
        onClick={() => props.openImage(props)}
        role="button"/>
      <h4>
        <div>{name}</div>
        <div className="likes">❤{props.likes}</div>
      </h4>
    </div>
  );
};

export default UnsplashImages;