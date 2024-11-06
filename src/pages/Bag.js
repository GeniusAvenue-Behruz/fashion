import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar.js';
import "../Bag.css"

const Bag = () => {
    const [bagItems, setBagItems] = useState([]);

    // Load the bag items from localStorage when the component mounts
    useEffect(() => {
        const storedBagItems = JSON.parse(localStorage.getItem('bagItems')) || [];
        setBagItems(storedBagItems);
    }, []);

    // Function to delete an item from the bag
    const handleDeleteItem = (index) => {
        const updatedItems = [...bagItems];
        updatedItems[index].deleted = true; // Mark the item as deleted
        setBagItems(updatedItems);

        // Wait for the animation to complete before removing the item from localStorage
        setTimeout(() => {
            const remainingItems = updatedItems.filter((item, i) => i !== index);
            setBagItems(remainingItems);
            localStorage.setItem('bagItems', JSON.stringify(remainingItems));
        }, 500); // Matches the duration of the fadeOut animation
    };

    // Function to clear the entire bag
    const handleClearBag = () => {
        setBagItems([]);
        localStorage.removeItem('bagItems');
    };

    return (
        <div className="bag-page">
            <NavBar />
            <div className="bag-component container">
                <h1>Your Bag</h1>

                {/* Check if there are items in the bag */}
                {bagItems.length > 0 ? (
                    <div className="bag-items">
                        {bagItems.map((item, index) => (
                            <div
                                key={index}
                                className={`bag-item ${item.deleted ? 'deleted' : ''}`}
                            >
                                <img src={item.image} alt={item.name} />
                                <h2>{item.name}</h2>
                                <p>Price: {item.price}</p>
                                <p>Color: {item.color}</p>
                                <p>Size: {item.size}</p>

                                {/* Delete button for each item */}
                                <button
                                    onClick={() => handleDeleteItem(index)}
                                    className="delete-button"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Your bag is empty.</p>
                )}

                {/* Clear bag button */}
                {bagItems.length > 0 && (
                    <div className="clear-bag-button-container">
                        <button onClick={handleClearBag} className="clear-bag-button">
                            Clear Bag
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Bag;
