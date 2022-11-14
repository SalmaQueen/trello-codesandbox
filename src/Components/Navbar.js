import React from "react";
import "./navbar.css";
import logo from "../Images/trello.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
          <h1>Trello</h1>
        </div>
        {/*  NAVIGATION MENU */}
        <ul className="nav-links">
          {/*  USING CHECKBOX HACK */}
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" className="hamburger">
            &#9776;
          </label>
          {/*  NAVIGATION MENUS */}
          <div className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li className="services">
              <a href="/">Services</a>
              {/*  DROPDOWN MENU */}
              <ul className="dropdown">
                <li>
                  <a href="/">Dropdown 1 </a>
                </li>
                <li>
                  <a href="/">Dropdown 2</a>
                </li>
                <li>
                  <a href="/">Dropdown 2</a>
                </li>
                <li>
                  <a href="/">Dropdown 3</a>
                </li>
                <li>
                  <a href="/">Dropdown 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
