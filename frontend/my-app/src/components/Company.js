import React from 'react';
import { Link, useNavigate, redirect } from "react-router-dom"
import Review from './Review';


const Company = () => {

    const navitage = useNavigate()

    return (
        <div>
            <p>Hello, this is a Company Profile page</p>
            <Link to ='/review'>
                <button className='newReview'>
                    Create a New Review
                </button>
            </Link>
            <Link to='/results'>
                <button className='back'>Bring me back to results</button>
            </Link>
        </div>
        
    )
}

export default Company