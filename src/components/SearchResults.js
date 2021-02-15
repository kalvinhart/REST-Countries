import React from "react";

import "./SearchResults.css";

const SearchResults = (props) => {
    
    if (props.searching) { 
        return (
            <main className="main width">
                <div className="search-results">
                    {props.showCountries(props.searchResult, true)}
                </div> 
            </main>
        );
    }
    
    return (
        <main className="main width">
            <div className="search-results">
                {props.showCountries()}
            </div> 
        </main>
    );
}

export default SearchResults;