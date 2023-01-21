import React, {useState} from 'react';
import { Link, useNavigate, redirect } from "react-router-dom"
import NavBar from './NavBar';

import SearchBar from './searchBar';


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

    // function handleChange(e) {
    //     e.preventDefault();
    //     setSearchInput(e.target.value);
    //     console.log("a change happened");
    // };
    
    function searchResults() {
        if (searchInput.length > 0) {
            const countries_filtered = countries.filter((country) => country.name.match(searchInput));
            return countries_filtered;
        } else {
            return countries;
        }
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
                


            </div>
        </div>
    )
}

export default Home