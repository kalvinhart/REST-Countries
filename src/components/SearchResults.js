import React from "react";

import Card from "./Card";

import "./SearchResults.css";

class SearchResults extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: []
        }

        this.getCountries();
    }

    async getCountries() {
        if (this.state.results.length > 0) return;

        const url = "https://restcountries.eu/rest/v2/all";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({results: data});
        console.log(this.state.results);
    }

    renderCountries() {
        if (!this.state.results) return;
        let displayedResults = this.state.results.splice(0, 20);
        let html;
        html = displayedResults.map((country, i) => {
            return (<Card id={i} data={country}/>);
        });
        return html;
    }

    render() {
        return (
            <main className="main width">
                <div className="search-results">
                    {this.renderCountries()}
                </div> 
            </main>
        );
    }
}

export default SearchResults;