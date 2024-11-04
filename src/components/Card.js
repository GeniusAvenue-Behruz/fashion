import React from 'react';

const Card = ({ imgSrc, title, tags }) => {
    return (
        <div className="card">
            <img src={imgSrc} alt={title} className="card-image" />
            <div className="card-content">
                <h3>{title}</h3>
                {/* Conditionally render the tags section only if tags are provided */}
                {tags && tags.length > 0 && (
                    <div className="card-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="card-tag">{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
