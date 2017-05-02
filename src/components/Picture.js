import React, { Component } from "react";

class Picture extends Component {
  render() {
    return (
      <div className="col-xs-4">
        <div className="panel">
          <div className="panel-header">
          </div>
          <div className="panel-body">
            <img src={this.props.url} />
          </div>
        </div>
      </div>
    );
  }
}

export default Picture;
