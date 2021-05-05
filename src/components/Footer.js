import React from 'react';

import '../css/Footer.css';

const Footer = ({ social = [] }) => {
    
    const currentYear = new Date().getFullYear();

    const renderSocialMedia = social.map(media => {
        return(
            <a className="mx-3 d-block d-lg-inline-block mt-5" key={media.title} target="_blank" href={media.link}><i className={`bi bi-${media.title}`}></i></a>
        )
    })

    return (
        <div className="footer bg-light">
            <div className="info">
                {renderSocialMedia}
                <a href="mailto:udrugamerida@gmail.com" className="mx-3 d-block d-lg-inline-block mt-5"><i className="bi bi-envelope-open-fill"></i></a>
            </div>
            <p className="copy">Copyright &copy; 2021 - {currentYear}</p>
        </div>
    )
};

export default Footer;