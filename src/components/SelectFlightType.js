import React from 'react';
import PropTypes from 'prop-types';

import { flightTypeNamesRus } from '../constants';

function SelectFlightType({ selectedFlightType, onSelect }) {
  const flightTypes = Object.keys(flightTypeNamesRus);

  return (
    <div className="flight-types">
      {flightTypes.map(type => (
        <span
          style={type === selectedFlightType ? { color: '#ffac02' } : null}
          onClick={() => onSelect(type)}
          key={type}
        >
          {flightTypeNamesRus[type]}
        </span>
      ))}
    </div>
  );
}

SelectFlightType.propTypes = {
  selectedFlightType: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SelectFlightType;
