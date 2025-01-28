import React from 'react';
import './Marquee.css'; // We will define styles here later.

const Marquee = ({ children, speed = 50, direction = 'left' }) => {
    return (
        <div className="marquee-container">
            <div
                className="marquee"
                style={{
                    animationDuration: `${speed}s`,
                    animationDirection: direction,
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Marquee;