import React from "react";

import "./SearchResults.css";

const SearchResults = (props) => {    
    return (
        <main className="main width">
            <div className="search-results">
                {props.error && props.searchResult.length === 0 ? props.errorText : 
                    props.searching ? props.showCountries(props.searchResult, true) : props.showCountries()
                }
            </div> 
        </main>
    );
}

export default SearchResults;