const formatTodaysDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${month}/${day}`;
};

const getCurrentHour = () => new Date().getHours();

const getTimeFromIsoString = (isoDate) => {
  if (!isoDate) return null;
  const date = new Date(isoDate);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const addLeadingZero = num => (num < 10 ? `0${num}` : num);

  return `${addLeadingZero(hours)}:${addLeadingZero(minutes)}`;
};

const formatApiResponse = (res) => {
  const { flightStatuses } = res;

  const result = flightStatuses.map((flight) => {
    const {
      arrivalAirport: {
        city: arrivalCity,
      },
      departureAirport: {
        city: departureCity,
      },
      carrier: {
        iata: carrierCode,
      },
      flightNumber,
      airportResources: {
        arrivalTerminal,
        departureTerminal,
      } = {},
      departureDate: {
        dateLocal: plannedDepartureDateLocal,
      },
      arrivalDate: {
        dateLocal: plannedArrivalDateLocal,
      },
      operationalTimes: {
        actualRunwayArrival: {
          dateLocal: actualArrivalDateLocal,
        } = {},
        actualRunwayDeparture: {
          dateLocal: actualDepartureDateLocal,
        } = {},
      } = {},
    } = flight;

    const newFlight = {};
    newFlight.arrivalCity = arrivalCity;
    newFlight.departureCity = departureCity;
    newFlight.carrierCode = carrierCode;
    newFlight.flightNumber = flightNumber;
    newFlight.arrivalTerminal = arrivalTerminal;
    newFlight.departureTerminal = departureTerminal;

    const plannedArrivalTime = getTimeFromIsoString(plannedArrivalDateLocal);
    const actualArrivalTime = getTimeFromIsoString(actualArrivalDateLocal);
    newFlight.arrivalTime = {
      old: (actualArrivalTime ? plannedArrivalTime : actualArrivalTime),
      new: (actualArrivalTime || plannedArrivalTime),
    };

    const plannedDepartureTime = getTimeFromIsoString(plannedDepartureDateLocal);
    const actualDepartureTime = getTimeFromIsoString(actualDepartureDateLocal);
    newFlight.departureTime = {
      old: (actualDepartureTime ? plannedDepartureTime : actualDepartureTime),
      new: (actualDepartureTime || plannedDepartureTime),
    };

    return newFlight;
  });

  return result;
};

export {
  getCurrentHour, getTimeFromIsoString, formatTodaysDate, formatApiResponse,
};
