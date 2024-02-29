import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../stylesheets/Navbar/Navbar.scss";

// import { NavLink } from "react-router-dom";
import logo from "../../assests/Navbar/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="nav-links">
          <img src={logo} className="" alt="logo"></img>
        </a>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/about" className="nav-links">
              About Lexmark
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links">
              Product
            </a>
          </li>
          <li className="nav-item">
            <a href="/ " className="nav-links">
              Membership
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-links">
              Legal
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-links">
              Contact
            </a>
          </li>

          <div className="signinup-btns">
            <ul>
              <li className="nav-item">
                <a href="/" className="nav-links">
                  <button className="signin-btn">SIGN IN</button>
                </a>
              </li>

              <li className="nav-item">
                <a href="/" className="nav-links">
                  <button className="signup-btn">SIGN UP</button>
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
