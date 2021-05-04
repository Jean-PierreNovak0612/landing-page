import React from 'react';
import { Link } from 'react-router-dom';

import '../css/CoverImage.css';

const CoverImage = ({ image, buttonText }) => {
    return (
        <div className="cover-container">
            <div className="img-cover mt-5 mt-lg-0" style={{ backgroundImage: `url(${image})`}}></div>
            <Link to="/landing-page/" className="GoToNextComponent">{buttonText}</Link>
        </div>
    )
}

export default CoverImage;