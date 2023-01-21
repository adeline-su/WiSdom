import React from 'react';
import { Link, useNavigate, redirect } from "react-router-dom"


const Company = () => {

    const navitage = useNavigate()

    return (
        <div>
            <p>Hello, this is a Company Profile page</p>
            <Link to='/results'>
                <button className='back'>Bring me back to results</button>
            </Link>
        </div>
        
    )
}

export default Company