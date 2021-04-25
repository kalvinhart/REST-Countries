import React from "react";

const Button = (props) => {
    const searchInput = document.querySelector(".search-input");

    return (
        <button className={`btn ${props.className}`} onClick={() => {
            if (props.onClick) props.onClick();
            if (searchInput) searchInput.value = "";
        }}
        >{props.text}</button>
    );
}

export default Button;