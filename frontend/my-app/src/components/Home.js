import React, {useState} from 'react';
import { Link, useNavigate, redirect } from "react-router-dom"
import NavBar from './NavBar';

import handleSubmit from '../handlesubmit';
import { useRef } from 'react';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { collection, doc, setDoc } from "firebase/firestore"; 

const database = getDatabase();

// function writeUserData(data) {
//     const db = getDatabase();
//     set(ref(db, 'testing3!!!'), {
//       test_key:data
//     });
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

    // const countries = [
    //     { "name": "Belgium", "continent": "Europe" },
    //     { "name": "India", "continent": "Asia" },
    //     { "name": "Bolivia", "continent": "South America" }]

    // const companies = [
    //     {
    //         "Country": "Colombia",
    //         "Employees": "13,000",
    //         "Industries": "Construction, Oil & Gas Operations, Mining and Chemicals",
    //         "OrganizationName": "Grupo Argos",
    //         "Rank": "1"
    //     },
    //     {
    //         "Country": "United States",
    //         "Employees": "9,000",
    //         "Industries": "Retail and Wholesale",
    //         "OrganizationName": "Clorox",
    //         "Rank": "2"
    //     },
    //     {
    //         "Country": "France",
    //         "Employees": "8,000",
    //         "Industries": "Insurance",
    //         "OrganizationName": "MAIF",
    //         "Rank": "3"
    //     },
    //     {
    //         "Country": "Canada",
    //         "Employees": "53,783",
    //         "Industries": "Banking and Financial Services",
    //         "OrganizationName": "Desjardins Group",
    //         "Rank": "4"
    //     }]
    
    var data_values;
    onValue(ref(database, '/Companies'), (snapshot) => {
        const data = snapshot.val();
        const data_keys = Object.keys(data);
        data_values = Object.values(data);

        console.log(data_values[0].OrganizationName);
        console.log(data_values[0]);

        console.log(data_values);
        // console.log(companies);
    });

    
    function searchResults() {
        if (searchInput.length > 0) {
            const data_filtered = data_values.filter((row) => row.OrganizationName.match(searchInput));
            return data_filtered;
        } else {
            return data_values;
        }
    }

    function searchResultsCountries() {
        if (searchInput.length > 0) {
            const data_filtered = countries.filter((country) => country.name.match(searchInput));
            return data_filtered;
        } else {
            return countries;
        }
    }

    // function searchResultsCountries2() {
    //     if (searchInput.length > 0) {
    //         const data_filtered = countries2.filter((country) => country.name.match(searchInput));
    //         return data_filtered;
    //     } else {
    //         return countries2;
    //     }
    // }

    // function searchResultsCompanies() {
    //     if (searchInput.length > 0) {
    //         const data_filtered = companies.filter((company) => company.OrganizationName.match(searchInput));
    //         return data_filtered;
    //     } else {
    //         return companies;
    //     }
    // }

    //posting to firebase:
    const dataRef = useRef()
    const submithandler = (e) => {
        e.preventDefault()
        handleSubmit(dataRef.current.value)
        dataRef.current.value = ""
    }

    return (
        <div className='page-wrapper'>
            <div className='body-wrapper'>
                <div className='nav-wrapper'>
                    <NavBar/>
                </div>
            </div>
                <div className='title'>
                    Welcome to WiSdom!
                </div>
                <div className='description'>
                    WiSdom is a space for women and non-binary individuals to connect, explore and further understand their career paths and futures within STEM industries. Begin gaining WiSdom today!  
            </div>
            <div className='body-wrapper'>
                <p>Find an Organization: </p>
                <div>
                    <input className = 'searchbar'
                        type="search"
                        placeholder="Search here"
                        onChange={(e) => setSearchInput(e.target.value)}
                        value={searchInput} />

                        <table>
                            <tr>
                                <th>Organization Name:</th>
                            </tr>                    

                            {/* one sample thingy */}
                            {searchResults().map((company) => (
                                <div>
                                <tr>
                                    <td>{company.OrganizationName}</td>
                                    {/* <td>{country.continent}</td> */}
                                </tr>
                                </div>
                            ))}                        
                        </table>
                </div>
            </div>
        </div>
    )
}

export default Home