import React from 'react';
import NavBar from '../components/NavBar.js'
import { useLocation } from 'react-router-dom';

const Listing = () => {
    const location = useLocation();
    const { name, picture } = location.state || {};

    return (
        <div className='listing'>
            <NavBar />
            <div className='listing__grid container'>
                <div className='listing__grid-img'>
                    <img src={`${picture}`} alt={name} />
                </div>
                <div className='listing__grid-data'>
                    <div className='data__header'>
                        <h1>{name}</h1>
                        <span className='price'>$167</span>
                    </div>
                </div>
            </div>
         </div>
    );
};

export default Listing;
