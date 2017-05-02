import React, { Component } from "react";
import Picture from './Picture';

import photoData from "../photos";
const photos = photoData.data;

class Gallery extends Component {
  render() {

    const pictures = photos.map(photo => (
      <Picture
        url={photo.images.low_resolution.url}
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
