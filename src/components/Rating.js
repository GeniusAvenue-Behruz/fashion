import React from 'react'

const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="rating">
            {[...Array(fullStars)].map((_, index) => (
                <div key={index} className="rating__star"></div>
            ))}
            {hasHalfStar && <div className="rating__star half"></div>}
        </div>
    );
};

export default Rating