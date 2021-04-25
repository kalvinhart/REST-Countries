import React from "react";

import "./Spinner.css";

const Spinner = () => {

    return (
        <section className="spinner">
            <div className="spinner__graphic" aria-label="Loading Information"></div>
            <h2 className="spinner__text">Loading...</h2>
        </section>
    );
}

export default Spinner;