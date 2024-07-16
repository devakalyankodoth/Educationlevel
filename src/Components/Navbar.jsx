import React from 'react';
import '../css/Navbar.css';
import logo from '../Images/laddertrimmed-removebg-preview_480.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      {/* <ul className="navbar-menu">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#about">About Us</a></li>
        <li className="navbar-item"><a href="#top-products">Top Products</a></li>
        <li className="navbar-item"><a href="#careers">Careers</a></li>
        <li className="navbar-item"><a href="#testimonials">Testimonials</a></li>
        <li className="navbar-item"><a href="#contact">Contact Us</a></li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
