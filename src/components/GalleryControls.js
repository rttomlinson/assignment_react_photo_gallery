import React, { Component } from "react";

class GalleryControls extends Component {
    
    render() {
        
        let options = this.props.tags.map(tag => (
            <option value={tag.name}>{tag.name}</option>
            ));
        
        
        return (
            <form>
                <select onChange={this.props.filterPhotos} name="tag">
                    {options}
                </select>
            </form>
        );
    }
    
    

}

export default GalleryControls;
