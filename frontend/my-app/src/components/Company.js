import React from 'react';
import { Link, useNavigate, redirect } from "react-router-dom"
import PostReviewBox from './PostReview';
// import ReviewHistory from 'ReviewHistory';


const Company = () => {

    const navitage = useNavigate()

    return (
        <div>
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

            
            <div> {/* review section */}
                <PostReviewBox/>

                review history
            </div>

            
                
        </div>
        
    )
}

export default Company
