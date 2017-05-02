import React, { Component } from 'react';


class Picture extends Component {
    
    render() {
        return (
            <div className="panel">
                <div className="panel-header"></div>
                <div className="panel-body">
                    <img src={this.props.src} />
                </div>
            </div>
        );
    }
}

export default Picture 