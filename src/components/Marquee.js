import React from 'react';

const Marquee = ({ text }) => {
    // Duplicate the text to create a seamless effect
    const duplicatedText = [...text, ...text];

    return (
        <div className="marquee-container container">
            <div className="marquee-text">
                {duplicatedText.map((item, index) => (
                    <React.Fragment key={index}>
                        {item} <span className="symbol">⚡</span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
