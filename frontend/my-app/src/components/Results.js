import React from 'react';
import { Link, useNavigate, redirect } from "react-router-dom";


const Results = () => {

    const navitage = useNavigate()

    return (
        <div>
        <p>Hello, this is the results page</p>
            <Link to='/'>
                <button className='back'>Bring me back home</button>
            </Link>
            <Link to='/company-profile'>
                <button className='next'>Bring me to a company profile</button>
            </Link>
        </div>
        
    )
}

export default Results