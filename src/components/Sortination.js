import React, { Component } from "react";

class Sortination extends Component {
  render() {
    return (
      <button onClick={this.props._sortByDate} className="btn btn-primary">
        Sort by Date
      </button>
    );
  }
}

export default Sortination;
