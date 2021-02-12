import React from "react";

import Header from "./Header";
import SearchControls from "./SearchControls";

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <SearchControls />
            </React.Fragment>
        );
    }
}

export default App;