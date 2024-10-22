// src/components/general/Input.js
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './general.css'; // Make sure you have this CSS file created in the same directory
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
    // Handle the input change
    const handleInput = (event) => {
        setValue(event.target.value); // Update the state with the new input value
    };

    return (
        <div className={`input-container ${className}`}>
            {label && <label>{label}</label>}
            <div className="input-wrapper">
                {icon && <FontAwesomeIcon icon={icon} className="input-icon" />}
                <input
                    type={type}
                    value={value}
                    onChange={handleInput}
                    {...inputAttributes} // Spread other input attributes
                    className="input-field"
                />
            </div>
        </div>
    );
};

// Default props
Input.defaultProps = {
    type: 'text', // Default input type
    className: '', // Default empty className
    icon: null, // Default icon to null
    inputAttributes: {}, // Default to an empty object
};

// Prop types
Input.propTypes = {
    label: PropTypes.string.isRequired, // label is required
    type: PropTypes.string, // type is a string
    className: PropTypes.string, // className is a string
    value: PropTypes.any.isRequired, // value is required
    setValue: PropTypes.func.isRequired, // setValue is a required function
    icon: PropTypes.object, // icon can be a FontAwesomeIcon object or null
    inputAttributes: PropTypes.object, // inputAttributes can be an object
};

export default Input;
