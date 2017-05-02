import React, {
    Component
}
from "react";


class Pagination extends Component {
    render() {


        return (
            <div>
                <button onClick={this.props._changePage} value="-1" className="btn btn-primary"> &lt; </button>
                <button onClick={this.props._changePage} value="1" className="btn btn-primary"> &gt; </button>
            </div>
        );
    }



}

export default Pagination;
