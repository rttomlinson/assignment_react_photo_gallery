import React, { Component } from 'react';
import '../App.css';
import GalleryControls from './GalleryControls';
import GalleryDisplay from './GalleryDisplay';

import photoData from "../photos";
let photos = photoData.data;


class Gallery extends Component {
  constructor() {
    super()

    this.state = { photos }
  }

  render() {
    return (
      <div className="Gallery">
        <GalleryControls />
        <GalleryDisplay photos={this.state.photos}/>
      </div>
    );
  }
}

export default Gallery;
