import React, { useContext } from "react";
import "./Navbar.scss";
import IconLogo from "../../assets/icon/IconLogo";
import { BoardContext } from "../../context/BoardContext";

const Navbar = ({ toggleDropDown }) => {
  const { currentProject } = useContext(BoardContext);

  return (
    <div className="navbar">
      <div className="navbar-icon">
        <IconLogo />
        <h2>Kanban</h2>
      </div>
      <div className="navbar-board">
        <h2>{currentProject.title}</h2>
      </div>
      <div className="navbar-add-ticket">
        <button
          onClick={() => {
            toggleDropDown((prev) => !prev);
          }}
        >
          Add New Task
        </button>
      </div>
    </div>
  );
};

export default Navbar;