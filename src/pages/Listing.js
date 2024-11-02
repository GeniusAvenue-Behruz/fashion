import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar.js';
import { useLocation } from 'react-router-dom';

const Listing = () => {
    const location = useLocation();
    const { name, picture, id } = location.state || {};

    const [images, setImages] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        if (id) {
            try {
                const imagesContext = require.context(`../imgs/listing/${id}/`, false, /\.(png|jpe?g|svg)$/);
                const loadedImages = imagesContext.keys().slice(0, 5).map(imagesContext); // Load up to 5 images from folder
                if (picture) {
                    setImages([picture, ...loadedImages]); // Add main picture first
                } else {
                    setImages(loadedImages);
                }
            } catch (err) {
                setError('Images could not be loaded for this listing.');
            }
        }
    }, [id, picture]);

    return (
        <div className='listing'>
            <NavBar />
            {error && <div className='error-message'>{error}</div>}
            <div className='listing__grid container'>
                <div className='listing__gallery'>
                    {images.map((imgSrc, index) => (
                        <img key={index} src={imgSrc} alt={`${name} ${index + 1}`} />
                    ))}
                </div>
                <div className='listing__grid-data'>
                    <div className='data__header'>
                        <h1>{id}{name}</h1>
                        <span className='price'>$167</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listing;
