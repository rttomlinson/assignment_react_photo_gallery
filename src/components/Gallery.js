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
      page: 0,
      sort: -1
    };

    this._changeFilter = this._changeFilter.bind(this);
    this._changePage = this._changePage.bind(this);
    this._sortByDate = this._sortByDate.bind(this);
  }

  _changePage(event) {
    let direction = event.target.value;
    let newPage = this.state.page + +direction;
    if (newPage < 0) newPage = 0;


    if (newPage * 12 > this.state.photos.length) {
        newPage = Math.floor(this.state.photos.length / 12);
        if (!this.state.photos.length % 12) newPage += 1;
    }

    this.setState({
      page: newPage
    });
  }

  _changeFilter(event) {
    let filter = event.target.value;
    this.setState({ filter: filter, page: 0 });
  }

  _sortByDate() {

  }

  render() {
    console.log("Page state:", this.state);
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
          _sortByDate={this._sortByDate}
        />
        <GalleryDisplay photos={paginatedPhotos} page />
      </div>
    );
  }
}

export default Gallery;
