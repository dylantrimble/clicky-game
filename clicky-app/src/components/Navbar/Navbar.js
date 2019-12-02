import React from 'react';
import '.Navbar.css';

const Navbar = props => {
    return (
        <div className="navbar">
            <div>Clicky Game!</div>
            <div className={props.navMsgColor}>{props.navMsgColor}</div>
            <div>
                score: {props.score} <span className='pipe'>|</span> High Score: {props.highScore}
            </div>
        </div>
    );
};

export default Navbar;