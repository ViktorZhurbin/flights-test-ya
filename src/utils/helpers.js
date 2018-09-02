const formatTodaysDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${month}/${day}`;
}

const getCurrentHour = () => new Date().getHours();

const getTimeFromIsoString = (isoDate) => {
  if (!isoDate) return null;
  const date = new Date(isoDate);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

const formatApiResponse = (res) => {
  const { flightStatuses } = res;

  const result = flightStatuses.map((flight) => {
    const {
      arrivalAirport: {
        city: arrivalCity
      },
      departureAirport: {
        city: departureCity
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

    let newFlight = {};
    newFlight['arrivalCity'] = arrivalCity;
    newFlight['departureCity'] = departureCity;
    newFlight['carrierCode'] = carrierCode;
    newFlight['flightNumber'] = flightNumber;
    newFlight['arrivalTerminal'] = arrivalTerminal;
    newFlight['departureTerminal'] = departureTerminal;

    newFlight.arrivalTime = {
      planned: getTimeFromIsoString(plannedArrivalDateLocal),
      actual: getTimeFromIsoString(actualArrivalDateLocal),
    }

    newFlight.departureTime = {
      planned: getTimeFromIsoString(plannedDepartureDateLocal),
      actual: getTimeFromIsoString(actualDepartureDateLocal),
    }

    return newFlight;
  })

  return result;
}

export { getCurrentHour, getTimeFromIsoString, formatTodaysDate, formatApiResponse }
