import React from "react";
import "./SelectBox.css";

let dropDown, regions, regionList;

class SelectBox extends React.Component {
    componentDidMount() {
        dropDown = document.querySelector(".select-box");
        regions = document.querySelectorAll(".regions");
        regionList = Array.from(regions);

        window.addEventListener("keypress", (e) => {
            if (e.keyCode === 13 || e.which === 13) {
                const hasFocus = dropDown === document.activeElement;
                if (hasFocus) this.showDropdown(e);
            }
        });

        this.showDropdown = this.showDropdown.bind(this);
    }

    showDropdown(e) {       
        if (regionList.some(region => region === e.target)) return;

        if (dropDown.classList.contains("open")) {
            this.hideDropDown();
            return;
        }

        dropDown.classList.add("open");

        window.addEventListener("keypress", (e) => {
            if (e.keyCode === 13 || e.which === 13) {
                if (regionList.some(region => region === e.target)) {
                    this.props.onClick(e);
                }
            }
        });

        window.addEventListener("click", (e) => {
            if (!dropDown.contains(e.target)) dropDown.classList.remove("open");
        });
    }

    hideDropDown() {
        dropDown.classList.remove("open");
    }

    render() {
        return (
            <div className="select-box" onClick={this.showDropdown} tabIndex="0">
                <div className="select-box__trigger"><span>{this.props.text}</span><i className="fas fa-chevron-down"></i></div>
                <div className="select-box__options" onClick={(e) => {this.props.onClick(e); this.hideDropDown();}}>
                    <span className="regions" tabIndex="0">Africa</span>
                    <span className="regions" tabIndex="0">Americas</span>
                    <span className="regions" tabIndex="0">Asia</span>
                    <span className="regions" tabIndex="0">Europe</span>    
                    <span className="regions" tabIndex="0">Oceania</span>
                </div>
            </div>
        );
    }
}

export default SelectBox;