import React, {useState} from 'react';
import { Link, useNavigate, redirect } from "react-router-dom"
import NavBar from './NavBar';

import handleSubmit from '../handlesubmit';
import { useRef } from 'react';
import { getDatabase, ref, set, onValue } from "firebase/database";


function writeUserData(data) {
    const db = getDatabase();
    set(ref(db, 'testing2!!!'), {
      test_key: data
    });
  }

// const db = getDatabase();
// const companiesRef = ref(db, '/Companies/');
// onValue(companiesRef, (snapshot) => {
//     const data = snapshot.val();
// });

var ref1 = firebase.database().ref();

ref1.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});



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

    // const countries_upper = countries.map(x => {name: x.name.toUpperCase(), continent: x.continent});
    
    function searchResults() {
        if (searchInput.length > 0) {
            const countries_filtered = countries.filter((country) => country.name.match(searchInput));
            return countries_filtered;
        } else {
            return countries;
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
        <div className='body-wrapper'>
            <div className='nav-wrapper'>
            <NavBar/>
            </div>
            <div className='page-wrapper'>
                <div className='container'>
                    <p>Hello, this is the home page</p>
                    <Link to='/results'>
                        <button className='body'>Show me the results</button>
                    </Link>
                </div>

                <p>search bar: </p>
                <div>
                    <input
                    type="search"
                    placeholder="Search here"
                    onChange={(e) => setSearchInput(e.target.value)}
                    value={searchInput} />

                    <table>
                    <tr>
                        <th>Country</th>
                        <th>Continent</th>
                    </tr>
                    
                    {searchResults().map((country) => (
                        <div>
                        <tr>
                            <td>{country.name}</td>
                            <td>{country.continent}</td>
                        </tr>
                        </div>
                    ))}
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
                
                {data}
                
            </div>
        </div>
    )
}

export default Home