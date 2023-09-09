import React, { useState } from "react";
import "./Header.css"; // Create a CSS file for styling
import down from "../angle-down-solid.svg";
import filter from "../filter.png";

function Header({ setgroup, setorder }) {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState(false);
  const [isNestedDropdownOpen2, setIsNestedDropdownOpen2] = useState(false);
  const [gr, setgr] = useState("userId");
  const [or, setor] = useState("title");
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNestedDropdown = () => {
    setIsNestedDropdownOpen(!isNestedDropdownOpen);
    setIsNestedDropdownOpen2(false);
  };
  const toggleNestedDropdown2 = () => {
    setIsNestedDropdownOpen2(!isNestedDropdownOpen2);
    setIsNestedDropdownOpen(false);
  };
  let setgroupby = (e) => {
    let value = e.target.value;
    setgroup(value);
    setgr(value);
  };
  let setorderby = (e) => {
    let value = e.target.value;
    setorder(value);
    setor(value);
  };
  return (
    <div className="header">
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropbtn">
          <img src={filter} alt="" className="filter" />
          Display <img src={down} alt="" />
        </button>
        <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
          <div className="nested-dropdown">
            <button onClick={toggleNestedDropdown} className="nested-dropbtn">
              Grouping
            </button>
            <select value={gr} onChange={setgroupby}>
              <option name="user" value="userId">
                User
              </option>
              <option name="status" value="status">
                Status
              </option>
              <option name="priority" value="priority">
                Priority
              </option>
            </select>
          </div>
          <div className="nested-dropdown">
            <button onClick={toggleNestedDropdown2} className="nested-dropbtn">
              Ordering
            </button>
            <select value={or} onChange={setorderby}>
              <option value="title">Title</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </div>
      </div>
      {/* Add more header items as needed */}
    </div>
  );
}

export default Header;
