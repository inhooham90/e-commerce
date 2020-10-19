import React from 'react';

import "./custom-button.style.scss";

const CustomButton = ({ inverted, children, isGoogleAuth, ...props }) => (
    <button 
        className={`
            ${inverted ? 'inverted' : ''}
            ${isGoogleAuth ? 
                'google-auth' : ''
            } 
            custom-button`} {...props} >
        {children}
    </button>
);

export default CustomButton;