import React from "react";
import {Link} from "react-router-dom";

import "./RouteError.css";

const RouteError = () => {
    return (
        <div className="error width">
            <h2 className="error__text">Page not found.</h2>
            <Link to="/" className="btn">&larr; Back</Link>
        </div>
    );
}

export default RouteError;