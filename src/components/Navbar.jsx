import React from "react";
import "./Navbar.css";
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <h1
          style={{ color: "#fff", marginLeft: "0.5rem" }}
          className="hero-title"
        >
          SpendWise
        </h1>
      </div>
      <a style={{textAlign:"right" , marginLeft:"1rem" , color:"white" , fontSize:"large"}} href="https://github.com/YUG-1092005"><GitHubIcon /></a>
    </div>
  );
};

export default Navbar;
