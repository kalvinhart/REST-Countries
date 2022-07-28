import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Spinner from "./Spinner";
import SearchControls from "./SearchControls";
import CountryDetails from "./CountryDetails";
import RouteError from "./RouteError";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
    };

    this.getCountries = this.getCountries.bind(this);
  }

  componentDidMount() {
    if (this.state.data.length < 1) {
      this.setState({ loading: true }, this.getCountries);
    }
  }

  async getCountries() {
    const url = "https://restcountries.com/v2/all";
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data: data, loading: false });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.state.loading ? (
          <Spinner />
        ) : (
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <SearchControls data={this.state.data} getCountries={this.getCountries} />
              )}
            />
            <Route
              exact
              path="/country/:name"
              render={(routeProps) => (
                <CountryDetails
                  data={this.state.data}
                  getCountries={this.getCountries}
                  {...routeProps}
                />
              )}
            />
            <Route component={RouteError} />
          </Switch>
        )}
      </React.Fragment>
    );
  }
}

export default App;
