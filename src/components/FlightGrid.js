import React from 'react';
// import PropTypes from 'prop-types';

export default function FlightGrid({ flights, type }) {
  const { appendix, flightStatuses } = flights;
  const { airlines, airports, equipments } = appendix;
  return (
    <table className="flight-table">
      <thead>
        <tr className="flight-table__header">
          <th>Поиск</th>
          <th>Сегодня</th>
          <th>Время</th>
          <th>Терминалы</th>
        </tr>
      </thead>
      <tbody>
        {flightStatuses.map((flight, index) => {
          const {
            arrivalAirportFsCode,
            departureAirportFsCode,
            departureDate: {
              dateLocal: departureDateLocal,
            },
            arrivalDate: {
              dateLocal: arrivalDateLocal,
            },
            carrierFsCode,
            flightNumber,
            airportResources: {
              arrivalTerminal = '-',
              departureTerminal = '-',
            } = {},
          } = flight;
          return (

            <tr key={flightNumber} className="flight-row">
              <td className="flight-row__time">{(type === 'arr' ? arrivalDateLocal : departureDateLocal)}</td>
              <td className="flight-row__destination">{type === 'arr' ? arrivalAirportFsCode : departureAirportFsCode}</td>
              <td className="flight-row__airline">
                <span className="flight-row__airline-name">{carrierFsCode}</span>
                <span className="flight-row__airline-flight-number">{flightNumber}</span>
              </td>
              <td className="flight-row__terminal">{type === 'arr' ? arrivalTerminal : departureTerminal}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// FlightGrid.propTypes = {
//   flightStatuses: PropTypes.array.isRequired,
// };
