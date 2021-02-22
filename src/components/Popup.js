import React from 'react';

const Popup = (props) => {
  let image = props.image;
  console.log(image);
  const url = image.urls;
  const user = image.user;
  let username="";
  if(user.first_name){
    username += user.first_name;
  }
  username += " ";
  if(user.last_name){
    username += user.last_name;
  }

  const instagram = user.instagram_username;
  const location = image.location.title;

  console.log(url);
  return (
    image && props.trigger &&
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={() => props.close()}>
              <i className="far fa-times-circle"></i>
            </button>
            <div className="popup-content">
              <img className="popup-image" src={url.regular} alt={image.alt}/>
              <div className="text-content">
                <h3>By:</h3>
                <h2>{username}</h2>
                <div className="instagram"><i className="fab fa-instagram"></i> {instagram}</div>
                <div className="location">{location}</div>
                <div className="like-popup"><i className="far fa-heart"></i> {image.likes}</div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Popup;