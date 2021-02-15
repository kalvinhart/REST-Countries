import React from "react";
import "./SelectBox.css";

let dropDown;
let regions;

class SelectBox extends React.Component {
    componentDidMount() {
        dropDown = document.querySelector(".select-box");
        regions = document.querySelectorAll(".regions");
    }

    showDropdown(e) {
        const regionList = Array.from(regions);
        if (regionList.some(region => region === e.target)) return;
        dropDown.classList.add("open");

        window.addEventListener("click", (e) => {
            if (!dropDown.contains(e.target)) dropDown.classList.remove("open");
        });
    }

    hideDropDown() {
        dropDown.classList.remove("open");
    }

    render() {
        return (
            <div className="select-box" onClick={this.showDropdown}>
                <div className="select-box__trigger"><span>{this.props.text}</span><i className="fas fa-chevron-down"></i></div>
                <div className="select-box__options" onClick={(e) => {this.props.onClick(e); this.hideDropDown();}}>
                    <span className="regions">Africa</span>
                    <span className="regions">Americas</span>
                    <span className="regions">Asia</span>
                    <span className="regions">Europe</span>
                    <span className="regions">Oceania</span>
                </div>
            </div>
        );
    }
}

export default SelectBox;