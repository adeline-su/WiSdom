import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, redirect } from "react-router-dom";
//import { getDatabase, ref, set, onValue } from "firebase/database";
import handleSubmit from '../handlesubmit';
//import { database } from "../firebase";
import { getDatabase, ref, child, push, update } from "firebase/database";


//post to firebase

const database = getDatabase();

//name, a, b, b - rate out of five

// function writeUserData(data) {
// const db = getDatabase();
// set(ref(db, 'testing3!!!'), {
//     test_key:data
// })}


//const [description, setdescritpion] = useState('')





function PostReviewBox() {
     const [reviewInput, setReviewInput] = useState('')



     //Push Function
     const Push = () => {
          const db = getDatabase();
          const postData = {
               Name : "Placeholder name",
                Message : reviewInput
             };
          const newPostKey = push(child(ref(db), 'posts')).key;
          const updates = {}
          updates['/posts/' + newPostKey] = postData
          update(ref(db), updates)
     //      db.ref("/Reviews").set({
     //      Name : "Placeholder name",
     //      Message : reviewInput,
     // }).catch(alert);
     }

    //const navigate = useNavigate

    return ( 
     <div style={{marginTop : 250}}>

     {/* this is the tutorial
     <div className="App" style={{marginTop : 250}}>
      <center>
      <input placeholder="Enter your name" value={name} 
      onChange={(e) => setName(e.target.value)}/>
      <br/><br/>
      <input placeholder="Enter your age" value={age} 
      onChange={(e) => setAge(e.target.value)}/>
      <br/><br/> 
      <button onClick={Push}>PUSH</button>
      </center>
    </div> */}
          <p> Post your review! </p>

          {/* <form onSubmit={submithandler}> */}
               <input className = 'reviewbox'
                    type = "text"
                    placeholder="Share you experience at this company"
                    onChange={(e) => setReviewInput(e.target.value)}
                    value={reviewInput} />
                    {console.log("Log:",reviewInput)}

                    <br/><br/>

                    <button  onClick={Push}>Submit!</button>
                    
          {/* </form> */}
          
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
