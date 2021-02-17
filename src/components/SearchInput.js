import React from "react";

import Button from "./Button";

import "./SearchInput.css";

class SearchInput extends React.Component {
    
    state = {
        term: ""
    }

    render() {
        return (
            <form className="search-input__form" onSubmit={this.props.onSubmit}>
                <input className="search-input" type="text" value={this.props.term} onChange={(e) => {this.setState({term: e.target.value})}} placeholder="Search for a country..."></input>
                {this.props.searching ? <Button text="Clear Search" onClick={this.props.clearSearchClick} /> : ""}
            </form>
        );
    }    
}

export default SearchInput;