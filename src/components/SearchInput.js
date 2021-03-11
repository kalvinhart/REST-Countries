import React from "react";

import Button from "./Button";

import "./SearchInput.css";

class SearchInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const {term} = this.state;
        if (!term) return;
        this.props.onSubmit(term);
    }

    render() {
        return (
            <div className="search-input">
                <form className="search-input__form" onSubmit={this.handleSubmit}>
                    <label htmlFor="search">Search</label>
                    <input className="search-input__input" type="text" id="search" value={this.props.term} onChange={(e) => {this.setState({term: e.target.value})}} placeholder="Search for a country..."></input>
                </form>
                {this.props.searching ? <Button text="Clear Search" onClick={this.props.clearSearchClick} className="btn-clear" /> : ""}
            </div>
        );
    }    
}

export default SearchInput;