import React, { Component } from "react";

class Picture extends Component {
  render() {
    return (
      <div className="col-xs-4">
        <div className="panel">
          <div className="panel-header">
            <a href={this.props.userUrl}>
                Posted by: {this.props.username}
            </a>
            <p>
            Likes: {this.props.likes}
            </p>
            <p>
            Comments: {this.props.comments}
            </p>
            <p>
            Tags: {this.props.tags}
            </p>
            <p>
            Filter: {this.props.filter}
            </p>
          </div>
          <div className="panel-body">
            <a href={this.props.instaImageUrl}>
                <img className="img-responsive" src={this.props.imageUrl} alt={this.props.altText}/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Picture;
