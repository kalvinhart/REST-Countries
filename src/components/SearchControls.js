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
            data: [],
            searching: false,
            searchResult: []
        }

        this.renderCountries = this.renderCountries.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.onDropdownChange = this.onDropdownChange.bind(this);
        this.getCountries();
    }

    async getCountries() {
        if (this.state.data.length > 0) return;

        const url = "https://restcountries.eu/rest/v2/all";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({data: data});
        console.log(this.state.data);
        this.props.updateData(this.state.data);
    }

    renderCountries(data, isFromSearch = false) {
        if (!this.state.data) return;
        let results, displayedResults;
        
        if (isFromSearch) {
            displayedResults = data;
        } else {
            results = this.state.data;
            displayedResults = results.slice(0, 20);
        }
        
        let html = displayedResults.map((country, i) => <Card id={i} data={country} />);
        return html;
    }

    search(term) {
        const results = this.state.data.filter(result => (result.name.toLowerCase().includes(term.toLowerCase())) || (result.region.toLowerCase() === term.toLowerCase()));
        this.setState({searching: true, searchResult: results});
    }

    onSearchSubmit(e) {
        e.preventDefault();
        this.search(e.target[0].value);
    }

    onDropdownChange(e) {
        this.search(e.target.textContent);
        this.setState({selected: e.target.textContent});
    }

    clearSearch() {
        this.setState({
            searching: false,
            selected: "Filter by Region"
        });
    }

    render() {
        return (
            <React.Fragment>
                <section className="search-controls width">
                    <SearchInput 
                        onSubmit={this.onSearchSubmit}
                        searching={this.state.searching}
                        clearSearchClick={this.clearSearch}
                    />
                    <SelectBox text={this.state.selected} onClick={this.onDropdownChange}/>
                </section>
                <SearchResults 
                    showCountries={this.renderCountries}
                    searching={this.state.searching}
                    searchResult={this.state.searchResult}  
                />
            </React.Fragment>
        );
    }
}

export default SearchControls;