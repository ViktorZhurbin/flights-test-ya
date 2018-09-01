import React from 'react';

export default function SelectFlightType({ selectedFlightType, onSelect }) {
  const flightTypes = ['arr', 'dep'];

  return (
    <ul className="flightTypes">
      {flightTypes.map(type => {
        return (
          <li
            style={type === selectedFlightType ? { color: '#d0021b' } : null}
            onClick={() => onSelect(type)}
            key={type}
          >
            {type}
          </li>
        );
      })}
    </ul>
  );
}
