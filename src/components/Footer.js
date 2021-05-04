import React from 'react';

import '../css/Footer.css';

const Footer = ({ social = [] }) => {
    
    const currentYear = new Date().getFullYear();

    const renderSocialMedia = social.map(media => {
        return(
            <a className="mx-auto d-block" key={media.title} target="_blank" href={media.link}><i className={`bi bi-${media.title}`}></i> {media.title}</a>
        )
    })

    return (
        <div className="footer">
            <div className="info">
                {renderSocialMedia}
                <span className="mx-auto d-block"><i className="bi bi-envelope-open-fill"></i> udrugamerida@gmail.com</span>
                <span className="mx-auto d-block"><i className="bi bi-telephone-fill"></i> +385 91 646 8238</span>
            </div>
            <p className="copy">Copyright &copy; 2021 - {currentYear}</p>
        </div>
    )
};

export default Footer;