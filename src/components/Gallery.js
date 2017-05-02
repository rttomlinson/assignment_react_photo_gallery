import React, { Component } from "react";
import "../Gallery.css";
import GalleryControls from "./GalleryControls";
import GalleryDisplay from "./GalleryDisplay";

import photoData from "../photos";
let photos = photoData.data;

class Gallery extends Component {
  constructor() {
    super();

    this.filters = [];
    this.filters.push("All");
    photos.forEach(photo => {
      if (!this.filters.includes(photo.filter)) {
        this.filters.push(photo.filter);
      }
    });

    this.allPhotos = photos;

    this.state = {
      photos: photos,
      filter: "All",
      page: 0
    };

    this._changeFilter = this._changeFilter.bind(this);
    this._changePage = this._changePage.bind(this);
  }

  _changePage(event) {
    let direction = event.target.value;
    this.setState({
      page: this.state.page + direction
    });
  }

  _changeFilter(event) {
    let filter = event.target.value;
    this.setState({ filter });
  }

  render() {
    let filteredPhotos = this.state.filter === "All" ?
      this.allPhotos :
      this.allPhotos.filter(photo => {
        return photo.filter === this.state.filter;
      });

    const offset = this.state.page * 12;
    let paginatedPhotos = filteredPhotos.slice(offset, offset + 12);

    return (
      <div className="container">
        <GalleryControls
          _changeFilter={this._changeFilter}
          _changePage={this._changePage}
          filters={this.filters}
        />
        <GalleryDisplay photos={paginatedPhotos} page />
      </div>
    );
  }
}

export default Gallery;
