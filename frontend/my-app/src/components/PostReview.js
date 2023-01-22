import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, redirect } from "react-router-dom";
import { getDatabase, ref, set, onValue } from "firebase/database";
import handleSubmit from '../handlesubmit';

//post to firebase



function writeUserData(data) {
const db = getDatabase();
set(ref(db, 'testing3!!!'), {
    test_key:data
});}


//const [description, setdescritpion] = useState('')

const PostReviewBox = () => {
     const [reviewInput, setReviewInput] = useState("")
     const dataRef = useRef()

     const submithandler = (e) => {
          e.preventDefault()
          handleSubmit(dataRef.current.value)
          dataRef.current.value = ""
     }

    const navigate = useNavigate

    return ( 
     <div>
          <p> Post your review! </p>

          <form onSubmit={submithandler}>
               <input className = 'reviewbox'
                    type = "text"
                    placeholder="Share you experience at this company"
                    onChange={(e) => setReviewInput(e.target.value)}
                    value={reviewInput} />
                    {console.log("Log:",reviewInput)}
                    <button  onClick={writeUserData(reviewInput)}>Submit</button>
          </form>
          
          {/* <div className="App">
               <form onSubmit={submithandler}>
                    <input type= "text" ref={dataRef} />
                    <button type = "Submit">Submit</button>
               </form>
          </div> */}

          {/* <button onClick={writeUserData(reviewInput)}>this is a button to submit "hello"</button> */}
     </div>
     );
}

{/* <div>
        <p> Hello this is the New Review page</p>
            <Link to='/'>
                 <button className='back'>Bring me back home</button>
            </Link>
            <Link to='/company-profile'>
                 <button className='next'>Bring me to a company profile</button>
            </Link>
       </div>  */}


 
export default PostReviewBox;
