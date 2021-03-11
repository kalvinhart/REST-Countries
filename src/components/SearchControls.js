import React from "react";

import SearchInput from "./SearchInput";
import SelectBox from "./SelectBox";
import SearchResults from "./SearchResults";
import Card from "./Card";

import "./SearchControls.css";

class SearchControls extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: "",
            selected: "Filter by Region",
            searching: false,
            searchResult: [],
            error: false,
            errorContent: ""
        }

        this.renderCountries = this.renderCountries.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.onDropdownChange = this.onDropdownChange.bind(this);
    }

    renderCountries(data, isFromSearch = false) {
        if (!this.props.data) return;
        let results, displayedResults;
        
        if (isFromSearch) {
            displayedResults = data;
        } else {
            results = this.props.data;
            displayedResults = results.slice(0, 20);
        }
        
        let jsx = displayedResults.map(country => <Card key={country.name} data={country} formatNumbers={this.props.formatNumbers} />);
        return jsx;
    }

    search(term) {
        const results = this.props.data.filter(result => (result.name.toLowerCase().includes(term.toLowerCase())) || (result.region.toLowerCase() === term.toLowerCase()));
        if (results.length === 0) {
            this.setState({error: true, errorText: <h2 className="error-text">No results found.</h2>});
        }
        this.setState({searching: true, searchResult: results});
    }

    onSearchSubmit(value) {
        if (!value) return;

        this.search(value);
    }

    onDropdownChange(e) {
        this.setState({selected: e.target.textContent}, this.search(e.target.textContent));
    }

    clearSearch() {
        this.setState({
            searching: false,
            searchResult: [],
            selected: "Filter by Region",
            error: false,
            errorText: ""
        });
    }

    render() {
        const {searching, selected, searchResult, error, errorText} = this.state;

        return (
            <React.Fragment>
                <section className="search-controls width">
                    <SearchInput 
                        onSubmit={this.onSearchSubmit}
                        searching={searching}
                        clearSearchClick={this.clearSearch}
                    />
                    <SelectBox text={selected} onClick={this.onDropdownChange}/>
                </section>
                <SearchResults 
                    showCountries={this.renderCountries}
                    searching={searching}
                    searchResult={searchResult}  
                    error={error}
                    errorText={errorText}
                />
            </React.Fragment>
        );
    }
}

export default SearchControls;