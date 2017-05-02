import React, { Component } from "react";

class GalleryControls extends Component {
  render() {
    let options = this.props.filters.map(filter => (
      <option value={filter}>{filter}</option>
    ));

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              Filter Results
            </div>
            <div className="panel-body">
              <form>
                <select onChange={this.props.filterPhotos} name="tag">
                  {options}
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GalleryControls;
