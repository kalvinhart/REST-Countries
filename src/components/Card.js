import React from "react";
import {Link} from "react-router-dom";

const Card = ({data, id}) => {
    const style = {
        backgroundImage: `url("${data.flag}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    };

    return (
        <Link to={`/country/${data.name.toLowerCase()}`}>
           <div className="card" key={id}>
                <div className="card__flag" style={style} aria-label={`Flag of ${data.name}`}></div>
                <div className="card__content">
                    <h2 className="card__title">{data.name}</h2>
                    <p className="card__details"><span>Population:</span> {data.population}</p>
                    <p className="card__details"><span>Region:</span> {data.region}</p>
                    <p className="card__details"><span>Capital:</span> {data.capital}</p>
                </div>
            </div> 
        </Link>
    );
}

export default Card;