import React from 'react'
import "./Navbar.css";
import KonnectLogo from "../assets/Konnect-header.png";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo"> <img src={KonnectLogo} alt="Konnet Logo" /> </div>

        <ul className="nav-links"> 
            <li>Home</li>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Help Center</li>
        
        </ul>
        <button className="signup-btn">Sign Up</button>
      
    </nav>
  );
};

export default Navbar;
