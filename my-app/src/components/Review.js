import React, {useState } from 'react'


const Review = () => {

    const [companyTitle, setcompanyTitle] = useState('')
    const [country, setcountry] = useState('')
    const [companySize, setcompanySize] = useState('')
    const [industry, setindustry] = useState('')

    const [overallExperience, setoverallExperience] = useState('')
    const [comfort, setComfort] = useState('')
    const [leadership, setleadership] = useState('')


    return (
        <div className='body-wrapper'>
            {
            <h1>{companyTitle}</h1>

            }
        </div>
    )
}

export default Review