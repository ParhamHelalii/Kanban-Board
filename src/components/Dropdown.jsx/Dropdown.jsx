import React from "react";
import "./Dropdown.scss";
import CrossIcon from "../../assets/icon-cross.svg";

const Dropdown = ({ dropdown, toggleDropDown, children }) => {
  return (
    <div className={`dropdown ${dropdown ? "active-dropdown" : ""}`}>
      <div className="dropdown-box">
        <button
          onClick={() => {
            toggleDropDown(false);
          }}
          className="dropdown-close-btn"
        >
          <img src={CrossIcon} alt="" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
