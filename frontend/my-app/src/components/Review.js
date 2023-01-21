import React, { useEffect, useRef, useState } from 'react';
import NavBar from './NavBar';
import { Link, useNavigate, redirect } from "react-router-dom";


//const [description, setdescritpion] = useState('')

const Review = () => {

    const navigate = useNavigate

    return ( 
       <div>
        <p> Hello this is the New Review page</p>
            <Link to='/'>
                 <button className='back'>Bring me back home</button>
            </Link>
            <Link to='/company-profile'>
                 <button className='next'>Bring me to a company profile</button>
            </Link>
       </div> 
     );
}
 
export default Review;
