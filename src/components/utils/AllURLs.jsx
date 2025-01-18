import React from 'react';
import { NavLink } from 'react-router' 

const AllURLs = () => {

    const navUrls = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/service", label: "Service" },
        { path: "/blog", label: "Blog" },
        { path: "/contact", label: "Contact" }
    ]

  return (
    <div className="urls">
                {
                    navUrls.map((urls) => (
                        <NavLink 
                            key={urls.path} 
                            to={urls.path} 
                            activeClassName="active"
                        >
                            {urls.label}
                        </NavLink>
                    ))
                }
            </div>
  )
}

export default AllURLs
