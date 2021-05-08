import React, { useState, useEffect } from 'react';

const LanguageSelectionComponent = ({ items }) => {

    // manage state
    const [currentTime, setCurrentTime] = useState('')

    // prepare dropdown list
    const options = items.map((item, index) => {
        return <option key={index}>{item}</option>
    })

    // when user selects language from dropdown
    const handleChange = ev => {

        // get selected value
        const { value } = ev.target

        // if selected value is null
        // empty the state
        if (value === '') {
            setCurrentTime('')
            return
        }

        // else calculate the time and store the same in state
        setCurrentTime(getTimeByLang(value))
    }

    // calculate time
    const getTimeByLang = lang => {
        return new Intl.DateTimeFormat(lang, {
            hour: 'numeric', minute: 'numeric', second: 'numeric'
        }).format(Date.now()).toString()
    }

    // bind update state property
    useEffect(() => {
        currentTime && console.log(`Current time ${currentTime}`)
    }, [currentTime])

    return (
        <>
            <select onChange={handleChange}>
                <option value=''>Select Date</option>
                {options}
            </select>
            {currentTime && <h1>Current Time: {currentTime}</h1>}
        </>
    );
};

export default LanguageSelectionComponent;