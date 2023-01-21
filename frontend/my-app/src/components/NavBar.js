import React from 'react'
import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <container className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/results'>Results</Link>
        <Link to='/company-profile'>Company Profile</Link>
        {/* <Link to='/profile'>Profile</Link> */}
    </container>
    
  )
}

export default NavBar