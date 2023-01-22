import React, {useState} from 'react';
import { Link, useNavigate, redirect } from "react-router-dom"
import NavBar from './NavBar';

import handleSubmit from '../handlesubmit';
import { useRef } from 'react';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { collection, doc, setDoc } from "firebase/firestore";  
import setReviewInput from './PostReview';
import reviewInput from './PostReview';

const database = getDatabase();

function CompanyInfo(){

    var data_values;

    onValue(ref(database, '/Companies'), (snapshot) => {
        const data = snapshot.val();
        data_values = Object.values(data);
        //now this is [{},{},{},...]

        console.log(data_values[0].OrganizationName);//first company name
        //console.log(data_values[0]);

        //console.log(data_values);
        // console.log(companies);
    });

    //var data_filtered = data_values[0];
        
            
    


    return (
        <div className="page-wrapper">
            <div className='nav-wrapper'>
                <NavBar/>
            </div>
            <div className = 'description'>
            </div> 
            <div className = 'body-company'>     
                <div className = 'titlecompany'>
                    Here's some info on {data_values[0].OrganizationName}: 
                </div>
                <p className = 'companydescription'>
                    'Female Friendly' Ranking: {data_values[0].Rank}
                </p>
                <p className = 'companydescription'>
                    Country: {data_values[0].Country}
                </p>
                <p className ='companydescription'>
                    Number of Employees: {data_values[0].Employees}
                </p>
                <p className = 'companydescription'>
                    Industries: {data_values[0].Industries}
                    {console.log("Hi",data_values[0])}             
                </p>
            </div> 
        </div>
    )
}

export default CompanyInfo;