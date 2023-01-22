import React, {useState} from 'react';
import { Link, useNavigate, redirect } from "react-router-dom"
import NavBar from './NavBar';

import handleSubmit from '../handlesubmit';
import { useRef } from 'react';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { collection, doc, setDoc } from "firebase/firestore"; 

const database = getDatabase();

function writeUserData(data) {
    const db = getDatabase();
    set(ref(db, 'testing3!!!'), {
      test_key:data
    });
  }



// var ref1 = firebase.database().ref();

// ref1.on("value", function(snapshot) {
//    console.log(snapshot.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });



// function writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }

const Home = () => {

    const navigate = useNavigate()

    const [searchInput, setSearchInput] = useState("")

    const countries = [
        { name: "Belgium", continent: "Europe" },
        { name: "India", continent: "Asia" },
        { name: "Bolivia", continent: "South America" },
        { name: "Ghana", continent: "Africa" },
        { name: "Japan", continent: "Asia" },
        { name: "Canada", continent: "North America" },
        { name: "New Zealand", continent: "Australasia" },
        { name: "Italy", continent: "Europe" },
        { name: "South Africa", continent: "Africa" },
        { name: "China", continent: "Asia" },
        { name: "Paraguay", continent: "South America" },
        { name: "Usa", continent: "North America" },
        { name: "France", continent: "Europe" },
        { name: "Botswana", continent: "Africa" },
        { name: "Spain", continent: "Europe" },
        { name: "Senegal", continent: "Africa" },
        { name: "Brazil", continent: "South America" },
        { name: "Denmark", continent: "Europe" },
        { name: "Mexico", continent: "South America" },
        { name: "Australia", continent: "Australasia" },
        { name: "Tanzania", continent: "Africa" },
        { name: "Bangladesh", continent: "Asia" },
        { name: "Portugal", continent: "Europe" },
        { name: "Pakistan", continent: "Asia" }
    ];

    // const [data, setData] = useState([]);
   
    // function readUserData() {
    //     onValue(ref(database, '/Companies'), (snapshot) => {
    //         setData(snapshot.val());
    //         console.log(snapshot.val());
    //     });
    //     return data;
    // }
    // var data;
    var data_companyinfo;
    // var data_companyinfo2;
    // var data_keys = "";
    var data_array = [];
    var data_json = [];
    var data_values;
    const readData = () => {
        onValue(ref(database, '/Companies'), (snapshot) => {
            const data = snapshot.val();
            const data_keys = Object.keys(data);
            data_values = Object.values(data);

            console.log(data_values[0].OrganizationName);
            // for (let i = 0; i < data_keys.length; i++) {
            //     // data_json.push(JSON.stringify(data[data_keys[i]]));
            //     data_json.push(data[data_keys[i]]); 
            // }

            console.log(data_values);
            
        });
        return data_values;
    }

    const createRowDictionary = (data_array) => {


    }

    // const countries_upper = countries.map(x => {name: x.name.toUpperCase(), continent: x.continent});
    
    function searchResults() {
        if (searchInput.length > 0) {
            const data_filtered = data_values.filter((company) => company.Country.name.match(searchInput));
            return data_filtered.Country;
        } else {
            return data_json.Country;
        }
    }

    //posting to firebase:
    const dataRef = useRef()
    const submithandler = (e) => {
        e.preventDefault()
        handleSubmit(dataRef.current.value)
        dataRef.current.value = ""
    }

    return (
        <div className='page-wrapper'>
            <div className='nav-wrapper'>
                <NavBar/>
            </div>
            <div className='body-wrapper'>
                    <div className='title'>
                        WiSdom
                    </div>
                    <div className='description'>
                        WiSdom is a space for women and non-binary individuals to connect, explore and further understand their career paths and futures within STEM industries. Begin gaining WiSdom today!  
                    </div>

                <p>Find an Organization: </p>
                <div>
                    <input className = 'searchbox'
                        type="search"
                        placeholder="Search here"
                        onChange={(e) => setSearchInput(e.target.value)}
                        value={searchInput} />
            </div>
            <div className='block-wrapper'>
                    <table>
                    <tr>
                        <th>Country</th>
                        <th>Continent</th>
                    </tr>
                    <div>
                    <tr>
                        <td>hi</td>
                        {/* <td>{company.name}</td>
                        <td>{country.continent}</td> */}
                    </tr>
                    </div>                        
                    
                    
                    
                    </table>
                </div>

                <div className="App">
                    <form onSubmit={submithandler}>
                        <input type= "text" ref={dataRef} />
                        <button type = "submit">Save</button>
                    </form>
                </div>

                <button onClick={writeUserData("hello")}>this is a button to submit "hello"</button>
                <p>companies, read from firebase: </p>
                
                <p>{readData()}</p>
            </div>
        </div>
    )
}

export default Home