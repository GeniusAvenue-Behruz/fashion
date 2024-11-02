import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar.js';
import { useLocation } from 'react-router-dom';
import Rating from '../components/Rating.js'
const Listing = () => {
    const location = useLocation();
    const { name, picture, id } = location.state || {};

    const [images, setImages] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadImages = async () => {
            if (id) {
                try {
                    // Load up to 5 images from public/imgs/listing/[id] named image1, image2, etc.
                    const imagePaths = Array.from({ length: 5 }, (_, i) =>
                        `/imgs/listing/${id}/image${i + 1}.png`
                    );

                    // Preload images
                    const loadedImages = await Promise.all(
                        imagePaths.map(async (path) => {
                            try {
                                const img = new Image();
                                img.src = path;
                                await img.decode();
                                return path;
                            } catch {
                                return null;
                            }
                        })
                    );

                    const validImages = loadedImages.filter(Boolean); // Remove any failed images
                    setImages(picture ? [picture, ...validImages] : validImages);
                } catch (err) {
                    console.error(err);
                    setError('Images could not be loaded for this listing.');
                }
            }
        };

        loadImages();
    }, [id, picture]);

    return (
        <div className='listing-component'>
            <NavBar />
            <div className='listing'>

                {error && <div className='error-message'>{error}</div>}
                <div className='listing__grid container'>
                    <div className='listing__gallery'>
                        {images.map((imgSrc, index) => (
                            <img key={index} src={imgSrc} alt={`${name} ${index + 1}`} />
                        ))}
                    </div>
                    <div className='listing__grid-data'>
                        <div className='data__header'>
                            <h1>{name}</h1>
                            <span className='price'>$167</span>
                        </div>
                        <div className='listing__rating'>
                            <Rating rating={4.5} />  4.5 (2 reviews)
                        </div>
                        <div className='listing__size'>
                            <div className='listing__size-header'>
                                <span>Size</span>
                                <a href='/lhelp'>Size Guide</a>
                            </div>
                            <ul className='listing__size-flex'>
                                <li>XS</li>
                                <li>S</li>
                                <li>M</li>
                                <li>L</li>
                                <li>XL</li>
                                <li>XXL</li>
                                <li className='empty'></li>
                            </ul>
                        </div>
                        <div className='listing__button'>
                            <button>Add to bag</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listing;
