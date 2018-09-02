import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ searchQuery, onSelect }) {
  return (
    <input
      type="search"
      value={searchQuery}
      className="search"
      placeholder="Поиск по номеру рейса"
      onChange={onSelect}
    />
  );
}

SearchBar.propTypes = {
  searchQuery: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

export default SearchBar;
