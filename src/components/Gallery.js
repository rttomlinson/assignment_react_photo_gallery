import React, { Component } from 'react';
import '../App.css';
import GalleryControls from './GalleryControls';
import GalleryDisplay from './GalleryDisplay';

import photoData from "../photos";
let photos = photoData.data;


class Gallery extends Component {
  constructor() {
    super()
    
    
    
    this.filters = [];
    photos.forEach((photo) => {
        if (!this.filters.includes(photo.filter)) {
            this.filters.push(photo.filter);
        }
    });
    this.state = { photos }
    this.filterPhotos = this.filterPhotos.bind(this);
  }
  
  filterPhotos(event) {
      
      //filter photos
      let filter = event.target.value;
      
      this.state.photos = this.state.photos.filter((photo) => {
          return photo.tags.includes(filter);
      });
  }

  render() {
    return (
      <div className="Gallery">
        <GalleryControls onChange={this.filterPhotos} filters={this.filters}/>
        <GalleryDisplay photos={this.state.photos}/>
      </div>
    );
  }
}

export default Gallery;
