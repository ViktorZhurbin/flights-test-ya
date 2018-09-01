import React from 'react';
// import PropTypes from 'prop-types';

import { getFlightTime } from '../utils/api';

export default function FlightGrid({ flights, type }) {
  const { appendix, flightStatuses } = flights;
  const { airlines, airports, equipments } = appendix;
  return (
    <div className="flight-table">
      <div className="flight-table__header">
        <span>Поиск</span>
        <span>Сегодня</span>
        <span>Время</span>
        <span>Терминалы</span>
      </div>
      <div className="flight-table__body">
        {flightStatuses.map((flight, index) => {
          const {
            arrivalAirportFsCode,
            departureAirportFsCode,
            operationalTimes: {
              publishedDeparture: {
                dateLocal: departureDateLocal,
              },
              publishedArrival: {
                dateLocal: arrivalDateLocal,
              },
              actualRunwayArrival: {
                dateLocal: actualArrivalDateLocal = '',
              } = {},
              actualRunwayDeparture: {
                dateLocal: actualDepartureDateLocal = '',
              } = {},
            } = {},
            carrierFsCode,
            flightNumber,
            airportResources: {
              arrivalTerminal = '-',
              departureTerminal = '-',
            } = {},
          } = flight;

          return (

            <div key={flightNumber} className="flight-row">
              <div className="flight-row__time">{(type === 'arr' ? actualArrivalDateLocal : actualDepartureDateLocal)}</div>
              <div className="flight-row__time">{(type === 'arr' ? arrivalDateLocal : departureDateLocal)}</div>
              <div className="flight-row__destination">{type === 'arr' ? arrivalAirportFsCode : departureAirportFsCode}</div>
              <div className="flight-row__airline">
                <span className="flight-row__airline-name">{carrierFsCode}</span>
                <span className="flight-row__airline-flight-number">{flightNumber}</span>
              </div>
              <div className="flight-row__terminal">{type === 'arr' ? arrivalTerminal : departureTerminal}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// FlightGrid.propTypes = {
//   flightStatuses: PropTypes.array.isRequired,
// };
