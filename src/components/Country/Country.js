import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country'>
            <h1>Country Name: {props.name}</h1>
            <p>Population: {props.population}</p>
            <p>Population: {props.area}</p>
            <img src={props.flags} alt="" />
        </div>
    );
};

export default Country;