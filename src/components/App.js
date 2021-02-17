import React from "react";
import {Route, Switch} from "react-router-dom";

import Header from "./Header";
import SearchControls from "./SearchControls";
import CountryDetails from "./CountryDetails";
import RouteError from "./RouteError";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            countryData: {}
        };

        this.updateCountryData = this.updateCountryData.bind(this);
    }
    

    updateCountryData(data) {
        this.setState({countryData: data});
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                   <Route exact path="/" render={() => <SearchControls updateData={this.updateCountryData}/>} /> 
                   <Route exact path="/country/:name" render={(routeProps) => <CountryDetails data={this.state.countryData} {...routeProps}/>} />
                   <Route component={RouteError} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;