import React from 'react';

import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleAuth, ...props }) => (
    <button className={`${isGoogleAuth ? 'google-auth' : ''} custom-button`} {...props} >
        {children}
    </button>
);

export default CustomButton;