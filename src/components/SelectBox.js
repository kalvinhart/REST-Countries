import React from "react";
import "./SelectBox.css";

let dropDown;
let menuOptions;

class SelectBox extends React.Component {
    componentDidMount() {
        dropDown = document.querySelector(".select-box");
        menuOptions = document.querySelector(".select-box__options");
    }

    showDropdown() {
        dropDown.classList.add("open");

        // window.addEventListener("click", (e) => {
        //     console.log(e.target);
        //     if (e.target !== menuOptions) {
        //         dropDown.classList.remove("open");
        //     }
        // });
    }

    hideDropDown() {
        dropDown.classList.remove("open");
    }

    handleOptionClick(e) {
        console.log(e.target.textContent);
    }

    render() {
    return (
        <div className="select-box" onClick={this.showDropdown}>
            <div className="select-box__trigger"><span>{this.props.text}</span><i className="fas fa-chevron-down"></i></div>
            <div className="select-box__options" onClick={this.handleOptionClick}>
                <span>Africa</span>
                <span>America</span>
                <span>Asia</span>
                <span>Africa</span>
                <span>Oceania</span>
            </div>
        </div>
    );
    }
}

export default SelectBox;