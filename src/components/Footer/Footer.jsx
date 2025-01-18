import React from 'react'
import "./Footer.css"
import AllURLs from '../utils/AllURLs'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h1>React<span style={{ color: "green" }}>ify.</span></h1>
      </div>

      <div className="footer-right">
        <AllURLs />
      </div>

      <div className="footer-bottom">
        <p>All rights reserved. <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a></p>
      </div>
    </footer>
  )
}

export default Footer
