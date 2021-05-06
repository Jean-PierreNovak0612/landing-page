import React from 'react';

import '../css/CoverImage.css';

const CoverImage = ({ image, text }) => {
    return (
        <div className="cover-container">
            <div className="img-cover mt-5 mt-lg-0" style={{ backgroundImage: `url(${image})`}}></div>
            <div className="cover-text">
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default CoverImage;