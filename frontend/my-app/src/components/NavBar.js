import React from 'react'
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <div className='nav-links'>
         <p>WiSdom</p>
        <Link to='/'>Home</Link>
        <Link to='/results'>Results</Link>
        <Link to='/company-profile'>Company Profile</Link>
        {/* <Link to='/profile'>Profile</Link> */}
    </div>
    
  )
}

export default NavBar