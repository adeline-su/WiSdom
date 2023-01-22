import React, {useState} from 'react';
import { Link, useNavigate, redirect } from "react-router-dom"
import NavBar from './NavBar';

import handleSubmit from '../handlesubmit';
import { useRef } from 'react';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { collection, doc, setDoc } from "firebase/firestore"; 

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
        <div className="App">
                
            <p>
                Here's some info: 
                Company: {data_values[0].OrganizationName}
                Ranking: {data_values[0].Rank}
                Country: {data_values[0].Country}
                Number of Employees: {data_values[0].Employees}
                Industries: {data_values[0].Industries}
                {console.log("Hi",data_values[0])}
                
                more real time data to add here
            </p>
               
        </div>
    )
}

export default CompanyInfo;