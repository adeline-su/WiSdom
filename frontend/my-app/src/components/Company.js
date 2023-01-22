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

            <div className='body-wrapper'>
                <div className='nav-wrapper'>
                    <NavBar/>
                </div>
            </div>
            <p>Hello, this is a Company Profile page</p>
            {/* <Link to ='/review'>
                <button className='newReview'>
                    Create a New Review
                </button>
            </Link> */}
            <Link to ='/'>
                <button className='backhome'> 
                    Take me back home
                </button>
            </Link>

            <div>
            <CompanyInfo/>
            display company profile here
            </div>
                 
            
            <div> {/* review section */}
                <PostReviewBox/>

                review history
            </div>

            
                
        </div>
        
    )
}

export default Company
