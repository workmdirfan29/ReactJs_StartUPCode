import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const navUrls = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/service", label: "Services" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>React<span className="green-text">ify</span></h2>
          <p>Building modern web experiences with React.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            {navUrls.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: support@reactify.com</p>
          <p>Location: San Francisco, CA</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <strong>Reactify</strong>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
