import React, {
    Component
}
from "react";
import Pagination from "./Pagination";
import Sortination from "./Sortination";

class GalleryControls extends Component {

    shouldComponentUpdate() {
        return false;
    }

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
                    <select onChange={this.props._changeFilter} name="tag">
                      {options}
                    </select>
                  </form>
                  <Pagination _changePage={this.props._changePage}/>
                  <Sortination _sortByDate={this.props._sortByDate}/>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default GalleryControls;
