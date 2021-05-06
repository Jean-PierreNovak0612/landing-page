import React from 'react';

import '../css/SectionSegment.css';

const SectionSegment = ({ image = "", imagePosition = "left" ,  header = "Header", text = "text"}) => {

    const renderContentWithImage = (img, imgPos, head, txt) => {
        if(imgPos === 'left' || imgPos === 'center'){
            return (
                <div className="image-text-container">
                    <div style={{ backgroundImage: `url(${img})`}} className="image-left" >
                    </div>
                    <div className="image-text-left">
                        <h2>{head}</h2>
                        <p>{txt}</p>
                    </div>
                </div>
            )
        }
        return (
            <div className="image-text-container">
                <div style={{ backgroundImage: `url(${img})`}} className="image-right"></div>
                <div className="image-text-right">
                    <h2>{head}</h2>
                    <p>{txt}</p>
                </div>
            </div>
        )
    }

    const renderContentWithNoImage = (head, txt) => {
        return (
            <div className="content-center">
                <div className="text-center">
                    <h3>{head}</h3>
                    <p>{txt}</p>
                </div>
            </div>
        )
    }

    const renderContent = (img, imgPos, head, txt) => {
        if(img) return renderContentWithImage(img, imgPos, head, text);
        return renderContentWithNoImage(head, txt)
    }

    return (
        <div>
            {renderContent(image, imagePosition, header, text)}
        </div>
    )
};

export default SectionSegment;