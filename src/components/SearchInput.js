import React from "react";

import "./SearchInput.css";

class SearchInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ""
        }
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <input className="search-input" type="text" value={this.props.term} onChange={(e) => {this.setState({term: e.target.value})}} placeholder="Search for a country..."></input>
            </form>
        );
    }    
}

export default SearchInput;