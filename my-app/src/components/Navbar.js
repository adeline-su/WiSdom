import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (  
        <header>
            <container classname='nav-links'>
                <Link to="/">Home</Link>
            </container>
        </header>
    );
}
 
export default Navbar;