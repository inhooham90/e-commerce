import React from 'react';

import './form-input.style.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input 
            onChange={handleChange} 
            className="form-input" 
            {...otherProps} />
        {
            label ? 
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label` }>
                    {label.toUpperCase()}
                </label>)
                :
                null
        }
    </div>
)

export default FormInput;