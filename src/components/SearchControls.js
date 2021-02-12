import React from "react";

import SearchInput from "./SearchInput";
import SelectBox from "./SelectBox";
import SearchResults from "./SearchResults";

import "./SearchControls.css";

class SearchControls extends React.Component {
    state = {
        term: "",
        selected: "Filter by Region"
    }

    onSearchSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <section className="search-controls width">
                    <SearchInput onSubmit={this.props.onSearchSubmit}/>
                    <SelectBox text={this.state.selected}/>
                </section>
                <SearchResults />
            </React.Fragment>
        );
    }
}

export default SearchControls;