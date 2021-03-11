import React from "react";
import "./SelectBox.css";

class SelectBox extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    componentDidMount() {
        this.dropDown = document.querySelector(".select-box");
        this.regions = document.querySelectorAll(".regions");
        this.regionList = Array.from(this.regions);

        window.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                const hasFocus = this.dropDown === document.activeElement;
                if (hasFocus) this.toggleDropdown(e);
            }
        });
    }

    hideDropDown() {
            this.dropDown.classList.remove("open");
        }

    toggleDropdown(e) {
        if (this.regionList.some(region => region === e.target)) return;

        if (this.dropDown.classList.contains("open")) {
            this.hideDropDown();
            return;
        }

        this.dropDown.classList.add("open");

        window.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                if (this.regionList.some(region => region === e.target)) {
                    this.props.onClick(e);
                }
            }
        });

        window.addEventListener("click", (e) => {
            if (!this.dropDown.contains(e.target)) this.dropDown.classList.remove("open");
        });
    }

    render() {
        return (
            <div className="select-box" onClick={this.toggleDropdown} tabIndex="0">
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