import React from 'react'
import "./Navbar.css"
import AllURLs from '../utils/AllURLs';

const Navbar = () => {
   

    return (
        <nav>
            <h1>React<span style={{ color: "green" }}>ify.</span></h1>
            <AllURLs />
        </nav>
    )
}

export default Navbar;
