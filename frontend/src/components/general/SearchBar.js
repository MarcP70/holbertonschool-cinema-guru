import React from 'react';
import PropTypes from 'prop-types';
import './general.css';

function SearchBar ({ title, setTitle }) {
  // Handle input change
  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  return (
    <input
      type="text"
      value={title}
      onChange={handleInput}
      className="search-bar"
      placeholder="Search Movies"
    />
  );
};

// Prop types for validation
SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default SearchBar;
