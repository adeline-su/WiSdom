import React from 'react';
import { Link, useNavigate, redirect } from "react-router-dom"
import NavBar from './NavBar';


const Home = () => {

    const navitage = useNavigate()

    return (
        <div className='body-wrapper'>
            <div className='nav-wrapper'>
            <NavBar/>
            </div>
            <p> where are you </p>
            <div className='page-wrapper'>
                <div className='container'>
                    <p>Hello, this is the home page</p>
                    <Link to='/results'>
                        <button className='body'>Show me the results</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home