import React from 'react';

import CoverImage from './CoverImage';
import SectionSegment from './SectionSegment'
import { TEXT1, TEXT2 } from '../data'

const MainPage = () => {

    const COVER_IMG_URL = `${process.env.PUBLIC_URL}/images/dogo.jpg`;
    const COVER_TEXT = "I njima je potrebna briga";
    const IMG_URL_SECTION1 = `${process.env.PUBLIC_URL}/images/catsection.jpg`;
    const IMG_URL_SECTION2 = `${process.env.PUBLIC_URL}/images/dogsection.jpg`;
    const HEADER1 = "Tko smo mi?";
    const HEADER2 = "Što smo postigli?"
    const HEADER3 = "Pridružite nam se!";

    return (
        <div>
            <CoverImage image={COVER_IMG_URL} text={COVER_TEXT} />
            <SectionSegment id="start" image={IMG_URL_SECTION1} imagePosition="left" header={HEADER1} text={TEXT1} />
            <SectionSegment image={IMG_URL_SECTION2} imagePosition="right" header={HEADER2} text={TEXT2} />
        </div>
    )
}

export default MainPage;