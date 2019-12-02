import React from 'react';
import './Banner.css';

const Banner = () => {
    return(
    <div className="banner text-center d-flex align-items-center justify-content-center">
        <h1>Clicky Game!</h1>
        <p className="m-0">Click on an image to earn points, but don't click on any more than once!</p>
    </div>
    );
};

export default Banner;