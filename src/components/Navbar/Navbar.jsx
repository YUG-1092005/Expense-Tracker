import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="title">
        <img src="/logo.png" alt="Logo" />
      </div>

      <div className={`navlinks ${isMenuOpen ? "open" : ""}`}>
        <Link to="/about">About</Link>
        <Link to="/calculate/expense">Calculate</Link>
        <Link to="/budgets">Budgets</Link>
        <Link to="/spendwise/signup">SignUp</Link>
        <Link to="/spendwise/user/dashboard">Dashboard</Link>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </div>
  );
};

export default Navbar;




