import React from 'react';

import '../css/CoverImage.css';

const CoverImage = ({ image, buttonText }) => {
    return (
        <div className="cover-container">
            <div className="img-cover mt-5 mt-lg-0" style={{ backgroundImage: `url(${image})`}}></div>
            <a href="/" className="GoToNextComponent">{buttonText}</a>
        </div>
    )
}

export default CoverImage;