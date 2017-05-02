import React, { Component } from "react";

class Picture extends Component {
  render() {
    return (
      <div className="col-xs-4">
        <div className="panel panel-default">
          <div className="panel-heading">
            <div>
              <strong>Posted by: </strong>
              <a href={this.props.userUrl}>{this.props.username}</a>
            </div>
            <div>
              <strong>on:</strong> {this.props.date}
            </div>
            <div>
            <strong>Likes:</strong> {this.props.likes}
            </div>
            <div>
            <strong>Comments:</strong> {this.props.comments}
            </div>
            <div>
            <strong>Tags:</strong> {this.props.tags.length ? this.props.tags : 'None'}
            </div>
            <div>
            <strong>Filter:</strong> {this.props.filter}
            </div>
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
