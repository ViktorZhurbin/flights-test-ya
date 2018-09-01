import React from 'react';

export default function SelectFlightType({ selectedFlightType, onSelect }) {
  const flightTypes = ['arr', 'dep'];
  const flightTypesOptions = {
    'arr': 'Прилет',
    'dep': 'Вылет'
  }

  return (
    <ul className="flight-types">
      {flightTypes.map(type => {
        return (
          <li
            style={type === selectedFlightType ? { color: '#d0021b' } : null}
            onClick={() => onSelect(type)}
            key={type}
          >
            {flightTypesOptions[type]}
          </li>
        );
      })}
    </ul>
  );
}
