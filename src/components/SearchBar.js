import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ searchQuery, onSelect }) {
  return (
    <input
      type="search"
      value={searchQuery}
      className="search"
      placeholder="Search by flight no."
      onChange={onSelect}
    />
  );
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SearchBar;
