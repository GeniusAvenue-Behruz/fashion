import React from 'react';
import { useLocation } from 'react-router-dom';

const Listing = () => {
    const location = useLocation();
    const { name, picture } = location.state || {};

    return (
        <div>
            <h1>Listing Page</h1>
            <p>Name: {name}</p>
            <img src={`${picture}`} alt={name} />

        </div>
    );
};

export default Listing;
