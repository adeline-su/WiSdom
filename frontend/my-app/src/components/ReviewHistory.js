import React, {useState} from 'react';
import { Link, useNavigate, redirect } from "react-router-dom"
import NavBar from './NavBar';

import handleSubmit from '../handlesubmit';
import { useRef } from 'react';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { collection, doc, setDoc } from "firebase/firestore"; 



const database = getDatabase();

var data_values;

    onValue(ref(database, '/UserReviews'), (snapshot) => {
        const data = snapshot.val();
        data_values = Object.values(data);
        //now this is [{},{},{},...]

        console.log(data_values[0]);//first review
        //console.log(data_values[0]);

        //console.log(data_values);
        // console.log(companies);
    });



const ReviewHistory = () => {

    return ( 
     <div className="page-wrapper">
        User Reviews:
        {data_values.map((val, index) => (
            <div key={index}>{val}</div>
        ))}
     </div>
     );
}

export default ReviewHistory