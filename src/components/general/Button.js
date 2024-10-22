import React from 'react';
import PropTypes from 'prop-types';
import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ label, className, onClick, icon }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
      {label}
    </button>
  );
};

// Default props
Button.defaultProps = {
  className: '',
  icon: null,
};

// Prop types for validation
Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object,
};

export default Button;
