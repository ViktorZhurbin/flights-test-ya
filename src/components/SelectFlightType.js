import React from 'react';

import { flightTypeNamesRus } from '../constants';

export default function SelectFlightType({ selectedFlightType, onSelect }) {
  const flightTypes = Object.keys(flightTypeNamesRus);

  return (
    <ul className="flight-types">
      {flightTypes.map(type => {
        return (
          <li
            style={type === selectedFlightType ? { color: '#d0021b' } : null}
            onClick={() => onSelect(type)}
            key={type}
          >
            {flightTypeNamesRus[type]}
          </li>
        );
      })}
    </ul>
  );
}
