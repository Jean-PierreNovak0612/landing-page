import React from 'react';

import CoverImage from './CoverImage';

const MainPage = () => {

    const IMG_URL = `${process.env.PUBLIC_URL}/images/dogo.jpg`
    const BUTTON_TEXT = "Let's go ->"

    return (
        <div>
            <CoverImage image={IMG_URL} buttonText={BUTTON_TEXT}  />
        </div>
    )
}

export default MainPage;