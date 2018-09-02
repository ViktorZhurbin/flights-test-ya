import React from 'react';
import PropTypes from 'prop-types';

import { flightTypeNamesRus } from '../constants';

function SelectFlightType({ selectedFlightType, onSelect }) {
  const flightTypes = Object.keys(flightTypeNamesRus);

  return (
    <ul className="flight-types">
      {flightTypes.map(type => (
        <li
          style={type === selectedFlightType ? { color: '#d0021b' } : null}
          onClick={() => onSelect(type)}
          key={type}
        >
          {flightTypeNamesRus[type]}
        </li>
      ))}
    </ul>
  );
}

SelectFlightType.propTypes = {
  selectedFlightType: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SelectFlightType;
