import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>ladder7</p>
      </div>
      <div className="footer-center">
        <ul>
          <li><a href="#company">Company</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#contactus">Contact Us</a></li>
          <li><a href="#careers">Careers</a></li>
        </ul>
      </div>
      <div className="footer-right">
        <p>Kochin, Kerala 695585</p>
        <p>Contact with us</p>
      </div>
    </footer>
  );
};

export default Footer;
