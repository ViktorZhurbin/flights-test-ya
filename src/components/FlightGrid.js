import React from 'react';
// import PropTypes from 'prop-types';

import { getTimeFromIsoString } from '../utils/helpers';

export default function FlightGrid({ flights, type }) {
  const { flightStatuses } = flights;
  return (
    <div className="flight-table">
      <div className="flight-table__header">
        <span>Поиск</span>
        <span>Сегодня</span>
        <span>Время</span>
        <span>Терминалы</span>
      </div>
      <div className="flight-table__body">
        {flightStatuses.map((flight) => {
          const {
            arrivalAirport,
            departureAirport,
            carrier,
            flightNumber,
            departureDate: {
              dateLocal: departureDateLocal,
            },
            arrivalDate: {
              dateLocal: arrivalDateLocal,
            },
            operationalTimes: {
              actualRunwayArrival: {
                dateLocal: actualArrivalDateLocal = '',
              } = {},
              actualRunwayDeparture: {
                dateLocal: actualDepartureDateLocal = '',
              } = {},
            } = {},
            airportResources: {
              arrivalTerminal = '-',
              departureTerminal = '-',
            } = {},
          } = flight;

          return (

            <div key={flightNumber} className="flight-row">
              <div className="flight-row__time">
                {
                  type === 'arr'
                    ? getTimeFromIsoString(actualArrivalDateLocal)
                    : getTimeFromIsoString(actualDepartureDateLocal)
                }
              </div>
              <div className="flight-row__time">
                {
                  type === 'arr'
                    ? getTimeFromIsoString(arrivalDateLocal)
                    : getTimeFromIsoString(departureDateLocal)
                }
              </div>
              <div className="flight-row__city">
                {
                  type === 'arr'
                    ? departureAirport['city']
                    : arrivalAirport['city']
                }
              </div>
              <div className="flight-row__airline">
                <span className="flight-row__airline-name">
                  {carrier['iata']}
                </span>
                <span className="flight-row__airline-flight-number">
                  {flightNumber}
                </span>
              </div>
              <div className="flight-row__terminal">
                {
                  type === 'arr'
                    ? arrivalTerminal
                    : departureTerminal
                }
              </div>
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
