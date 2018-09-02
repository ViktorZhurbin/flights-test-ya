import React from 'react';
// import PropTypes from 'prop-types';

import { flightType } from '../constants';

export default function FlightGrid({ flights, type }) {
  const { ARRIVAL } = flightType;
  return (
    <div className="flight-table">
      <div className="flight-table__body">
        {flights.map((flight) => {
          const {
            arrivalCity,
            departureCity,
            carrierCode,
            flightNumber,
            arrivalTime,
            departureTime,
            arrivalTerminal,
            departureTerminal,
          } = flight;

          return (

            <div key={`${carrierCode}${flightNumber}`} className="flight-row">
              <div className="flight-row__block1">
                <div
                  className={
                    `flight-row__time-new
              ${
                    type === ARRIVAL
                      ? `${arrivalTime['old'] ? 'changed' : ''}`
                      : `${departureTime['old'] ? 'changed' : ''}`
                    }`
                  }
                >
                  {
                    type === ARRIVAL
                      ? arrivalTime['new']
                      : departureTime['new']
                  }
                  <div className="flight-row__time-old">
                    {
                      type === ARRIVAL
                        ? arrivalTime['old']
                        : departureTime['old']
                    }
                  </div>
                </div>
                <div className="flight-row__city">
                  {
                    type === ARRIVAL
                      ? departureCity
                      : arrivalCity
                  }
                </div>
              </div>
              <div className="flight-row__block2">
                <div className="flight-row__airline">
                  <span className="flight-row__airline-name">
                    {carrierCode}
                  </span>
                  <span className="flight-row__airline-flight-number">
                    {flightNumber}
                  </span>
                  <div className="flight-row__terminal">
                    {
                      type === ARRIVAL
                        ? (arrivalTerminal || '-')
                        : (departureTerminal || '-')
                    }
                  </div>
                </div>
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
