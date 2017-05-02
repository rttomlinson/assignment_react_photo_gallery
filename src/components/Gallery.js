import React, {
    Component
}
from "react";
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
            page: 0
        };

        this._filterPhotos = this._filterPhotos.bind(this);
        this._changePage = this._changePage.bind(this);

    }

    _changePage(event) {
        let direction = event.target.value;
        this.setState({
            page: this.state.page + direction
        });
    }

    _filterPhotos(event) {
        let filter = event.target.value;

        let newPhotos =
            (filter === 'All') ?
            this.allPhotos :
            this.allPhotos.filter(photo => {
                return photo.filter === filter;
            });

        this.setState({
            photos: newPhotos
        });
    }

    render() {
        return (
            <div className="container">
        <GalleryControls
          _filterPhotos={this._filterPhotos}
          _changePage={this._changePage}
          filters={this.filters}
        />
        <GalleryDisplay photos={this.state.photos} page/>
      </div>
        );
    }
}

export default Gallery;
