import React from 'react';
import PropTypes from 'prop-types';
import './general.css';

const SelectInput = ({ label, options, className, value, setValue }) => {

  // Function to handle select input change
  const handleSelect = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`select-input ${className}`}>
      <label>{label}</label>
      <select value={value} onChange={handleSelect} className="select">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

// Default props to be used when no value is provided
SelectInput.defaultProps = {
  className: '',
  options: [],
  value: '',
};

// Prop types for type checking
SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

// Default export of the component
export default SelectInput;
