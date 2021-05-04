import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/Header.css';

const Header = ({ links, imageLogo = '', textLogo = '' }) => {

    const [showNavColor, setShowNavColor] = useState(window.innerWidth <= 700);

    const showNavBg = showNavColor ? 'bg-nav' : 'bg-light';

    useEffect(() => {
        window.addEventListener('resize', () => {
            return setShowNavColor(window.innerWidth <= 990)
        }, false);

        window.addEventListener('scroll', () =>{
            return setShowNavColor(window.scrollY >= 450 || window.innerWidth <=990)
        }, false)

        return () => {
            window.removeEventListener('resize', () => {
                return setShowNavColor(window.innerWidth <= 700)
            }, false);

            window.addEventListener('scroll', () =>{
                return setShowNavColor(window.scrollY >= 450 || window.innerWidth <=990)
            }, false)
        }
    }, [])

    const renderLinks = links.map(link => {
        return (
            <li className="nav-item" key={link.link}>
                <Link className="nav-link ms-5 my-2 my-lg-0" to={link.path}>{link.link}</Link>
            </li>
        )
    });

    const renderLogo = (imgLogo, txtLogo) =>{
        if(imgLogo && txtLogo) return (
            <>
                <img className="img-logo ms-5" src={imgLogo} alt="logo" />
                <small className="txt-logo">{txtLogo}</small>
            </>
        )
        if(imgLogo) return <img className="img-logo ms-5" src={imgLogo} alt="logo"/>
        return txtLogo;
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-light w-100 ${showNavBg}`}>
            <div className="container-fluid">
                <Link to="/landing-page/" className="navbar-brand">{renderLogo(imageLogo, textLogo)}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {renderLinks}
                </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;