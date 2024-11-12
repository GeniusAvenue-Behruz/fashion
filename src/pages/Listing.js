import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import { useLocation } from 'react-router-dom';
import Rating from '../components/Rating.js';

const Listing = () => {
    const location = useLocation();
    const { name, picture, id } = location.state || {};

    const [images, setImages] = useState([]);
    const [productData, setProductData] = useState(null);
    const [error, setError] = useState('');
    const [notification, setNotification] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    useEffect(() => {
        const loadImages = async () => {
            if (id) {
                try {
                    const imagePaths = Array.from({ length: 5 }, (_, i) =>
                        `/imgs/listing/${id}/image${i + 1}.png`
                    );

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

                    const validImages = loadedImages.filter(Boolean);
                    setImages(picture ? [picture, ...validImages] : validImages);
                } catch (err) {
                    console.error(err);
                    setError('Images could not be loaded for this listing.');
                }
            }
        };

        const loadProductData = async () => {
            try {
                const response = await fetch('/productData.json');
                const data = await response.json();
                if (data[id]) {
                    setProductData(data[id]);
                } else {
                    setError('Product not found.');
                }
            } catch (err) {
                console.error(err);
                setError(`Could not load product data. ${err}`);
            }
        };

        loadProductData();
        loadImages();
    }, [id, picture]);

    if (!productData) {
        return <div>{error || <div class="loader"></div>}</div>;
    }

    const { price, rating, reviews, colors = [], description } = productData;

    const handleAddToBag = () => {
        if (!selectedColor || !selectedSize) {
            setNotification('Please select both color and size before adding to the bag.');
            setTimeout(() => setNotification(''), 3000);
            return;
        }

        const bagItem = {
            name: name,
            price: price,
            color: selectedColor,
            size: selectedSize,
            image: images[0],
        };

        const existingBag = JSON.parse(localStorage.getItem('bagItems')) || [];

        existingBag.push(bagItem);

        localStorage.setItem('bagItems', JSON.stringify(existingBag));

        setNotification('Item successfully added to bag!');
        setTimeout(() => setNotification(''), 3000); // Hide notification after 3 seconds

        console.log("Item added to bag:", bagItem);
    };

    return (
        <div className='listing-component'>
            <NavBar />
            <div className='listing'>
                {error && <div className='error-message'>{error}</div>}

                {/* Notification */}
                {notification && (
                    <div className="notification success">
                        {notification}
                    </div>
                )}

                <div className='listing__grid container'>
                    <div className='listing__gallery'>
                        {images.map((imgSrc, index) => (
                            <img key={index} src={imgSrc} alt={`${name} ${index + 1}`} />
                        ))}
                    </div>
                    <div className='listing__grid-data'>
                        <div className='data__header'>
                            <h1>{name}</h1>
                            <span className='price'>{price}</span>
                        </div>
                        <div className='listing__rating'>
                            <Rating rating={rating} /> {rating} ({reviews} reviews)
                        </div>
                        <div className='listing__color'>
                            <div className='listing__color-header'>
                                <b>Color</b>
                            </div>
                            <div className='listing__color-examples'>
                                {colors.map((color, index) => (
                                    <button
                                        key={index}
                                        className={`color-button ${color.toLowerCase()} ${selectedColor === color ? 'selected' : ''}`}
                                        onClick={() => setSelectedColor(color)}
                                        style={{ border: selectedColor === color ? '2px solid black' : 'none' }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='listing__size'>
                            <div className='listing__size-header'>
                                <span>Size</span>
                                <a href='/lhelp'>Size Guide</a>
                            </div>
                            <div className='listing__size-flex'>
                                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                                    <button
                                        key={index}
                                        className='size-button'
                                        onClick={() => setSelectedSize(size)}
                                        style={{ border: selectedSize === size ? '2px solid black' : 'none' }}
                                    >
                                        {size}
                                    </button>
                                ))}
                                <button className='size-button empty'></button>
                            </div>
                        </div>
                        <div className='listing__button'>
                            <button onClick={handleAddToBag}>Add to bag</button>
                        </div>

                        <div className='listing__details'>
                            <div className='listing__details-item'>
                                <img src="imgs/freeShipping.svg" alt="Listing details Imgs/Icon" />
                                <div className='listing__details-itemText'>
                                    <h3>Free Shipping</h3>
                                    <p>On all U.S. orders over $100 <a href="#!">Learn More.</a></p>
                                </div>
                            </div>
                            <div className='listing__details-item'>
                                <img src="imgs/easyReturn.svg" alt="Listing details Imgs/Icon" />
                                <div className='listing__details-itemText'>
                                    <h3>Easy Returns</h3>
                                    <p>Extended returns through January 31. <a href="#!">Returns Details.</a></p>
                                </div>
                            </div>
                            <div className='listing__details-item'>
                                <img src="imgs/gift.svg" alt="Listing details Imgs/Icon" />
                                <div className='listing__details-itemText'>
                                    <h3>Send it As a gift</h3>
                                    <p>Add a free personalized note during checkout. <a href="#!">Learn More.</a></p>
                                </div>
                            </div>
                            <div className='listing__description'>
                                <h3>Part shirt, part jacket, all style</h3>
                                <p>{description}</p>
                                <div className='listing__description-detail'>
                                    <div className=''>
                                        <h3>Model</h3>
                                        <p>Model is 6′2″, wearing a size M</p>
                                    </div>
                                    <div className=''>
                                        <h3>Fit</h3>
                                        <p>Regular fit</p>
                                    </div>
                                    <div className=''>
                                        <h3>Materials</h3>
                                        <p>100% Cotton</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Listing;
