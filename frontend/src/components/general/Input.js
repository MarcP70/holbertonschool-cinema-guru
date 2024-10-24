import React from 'react';
import PropTypes from 'prop-types';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Input({
  label,
  type,
  className,
  value,
  setValue,
  icon = null,   // Default value if not passed
  inputAttributes = {},  // Default to an empty object if not passed
}) {
  // Handle the input change
  const handleInput = (event) => {
    setValue(event.target.value); // Update the state with the new input value
  };

  return (
    <div className={`input-container ${className}`}>
      {label && <label>{label}:</label>}
      <div className="input-wrapper">
        {icon && <FontAwesomeIcon icon={icon} className="input-icon" />}
        <input
          type={type}
          value={value}
          onChange={handleInput}
          className="input-field"
          {...inputAttributes}  // Spread other input attributes
        />
      </div>
    </div>
  );
}

// Prop types for validation
Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  icon: PropTypes.object,
  inputAttributes: PropTypes.object,
};

export default Input;
