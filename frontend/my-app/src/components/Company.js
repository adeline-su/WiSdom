import React from 'react';
import { Link, useNavigate, redirect } from "react-router-dom"
import PostReviewBox from './PostReview';
import NavBar from './NavBar';
import CompanyInfo from './CompanyInfo';

// import ReviewHistory from 'ReviewHistory';


const Company = () => {

    const navitage = useNavigate()

    return (
        
        <div className='page-wrapper'>
            <div>
            <CompanyInfo/>
            </div>
                 
            
            <div> {/* review section */}
                <PostReviewBox/>

                User Reviews:
            </div>

            
                
        </div>
        
    )
}

export default Company
