import React, { Component } from "react";
import Picture from './Picture';

import photoData from "../photos";
const photos = photoData.data;

class Gallery extends Component {
  render() {

    const pictures = photos.map(photo => (
      <Picture
        imageUrl={photo.images.low_resolution.url}
        instaImageUrl={photo.link}
        username={photo.user.username}
        userUrl={`https://www.instagram.com/${photo.user.username}`}
        time={new Date(photo.create_time).toDateString()}
        likes={photo.likes.count}
        comments={photo.comments.count}
        altText={photo.caption ? photo.caption.text : "No caption provided"}
        tags={photo.tags}
        filter={photo.filter}
        key={photo.link}/>
    ));

    return (
      <div className="container">
        <div className="row">
          {pictures}
        </div>
      </div>
    );
  }
}

export default Gallery;
