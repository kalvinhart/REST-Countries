import React from "react";
import {Link} from "react-router-dom";

import "./CountryDetails.css";

class CountryDetails extends React.Component {
    state = {
        countryData: [],
    }

    componentDidMount() {
        this.findCountry(this.props.match.params.name);
    }

    componentDidUpdate(prevProps, _) {
        if (prevProps.match.params.name !== this.props.match.params.name || this.state.countryData.length === 0) {
            this.findCountry(this.props.match.params.name);
        }
    }

    findCountry(country) {
            const data = this.props.data.find(result => result.name.toLowerCase() === country);
            if (!data) return;

            this.setState({countryData: data});
    }

    renderArray(arr) {
        if (!arr) return;

        let result = [];
        arr.forEach(item => result.push(item.name));
        return result.join(", ");
    }

    renderBorderCountries(arr) {
        if (!arr) return;

        let borderCountries = [];
        arr.forEach(border => {
            borderCountries.push(this.props.data.find(result => result.alpha3Code === border).name);
        });

        let countries = [];
        let countryName;
        borderCountries.forEach(country => {
            countryName = country.split("(")[0];
            countries.push(<Link key={countryName} to={`/country/${country.toLowerCase()}`} className="btn">{countryName}</Link>) ;
        });
        return countries;
    }

    render() {
        const {name, nativeName, population, region, flag, subregion, capital, topLevelDomain, currencies, languages, borders} = this.state.countryData;
        console.log(this.state.countryData);
        
        if (Object.keys(this.state.countryData).length > 0) {
            return (
                <section key={name} className="country-details width">
                    <Link to="/" className="btn">&larr; Back</Link>
                    <div className="country-details__content">
                        <div className="country-details__flag">
                            <img className="country-details__flag-image" src={flag} alt={`Flag of ${name}`} />
                        </div>
                        <div className="country-details__text">
                            <h1 className="country-details__title">{name}</h1>
                            <div className="country-details__text--half">
                                <p><span>Native Name:</span> {nativeName}</p>
                                <p><span>Population:</span> {population.toLocaleString()}</p>
                                <p><span>Region:</span> {region}</p>
                                <p><span>Sub Region:</span> {subregion}</p>
                                <p><span>Capital:</span> {capital}</p>
                            </div>
                            <div className="country-details__text--half">
                                <p><span>Top Level Domain:</span> {topLevelDomain}</p>
                                <p><span>Currencies:</span> {this.renderArray(currencies)}</p>
                                <p><span>Languages:</span> {this.renderArray(languages)}</p>
                            </div>
                            
                                {this.state.countryData?.borders?.length > 0 ?  (
                                    <div className="country-details__borders">
                                        <p><span>Border Countries:</span></p> 
                                        <div className="country-details__borders-links">
                                            {this.renderBorderCountries(borders)}
                                        </div>
                                    </div>
                                ) : ""}
                            
                        </div>
                    </div>
                </section>
            ) 
        } else {
            return "";
        }
    }
}

export default CountryDetails;