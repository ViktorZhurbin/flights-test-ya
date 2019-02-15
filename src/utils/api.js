import axios from 'axios';

import mockArrivals from './mockArrivals';
import mockDepartures from './mockDepartures';
import { flightType } from '../constants';
import { getCurrentHour, formatApiResponse, formatTodaysDate } from './helpers';

const ID = 'a649e1cf';
const KEY = 'c23b5427e41493f54c7f151a0e10e0b2';
const baseUrl = 'https://api.flightstats.com/flex/flightstatus/rest/v2/json';
const corsAnywhere = 'https://cors-anywhere.herokuapp.com';

const commonParams = `?appId=${ID}&appKey=${KEY}`;
const airportParams = '&utc=false&numHours=2&maxFlights=';

const handleError = (error) => {
  console.warn(error);
  return null;
};

const fetchFlightsByAirport = async (
  queryType = flightType.ARRIVAL,
  numFlights = '40',
  airportCode = 'SVO',
  date = formatTodaysDate(),
  startHour = getCurrentHour(),
) => {
  const mockData = (queryType === flightType.ARRIVAL
    ? mockArrivals
    : mockDepartures);
  const encodedURI = window.encodeURI(
    `${corsAnywhere}/${baseUrl}/airport/status/${airportCode}/${queryType}/${date}/${startHour}${commonParams}${airportParams}${numFlights}&extendedOptions=useInlinedReferences`,
  );
  const { data } = await axios.get(encodedURI).catch(handleError);
  const responseOK = data && data.flightStatuses.length > 0;
  const flights = responseOK ? data : mockData;

  return formatApiResponse(flights);
};

export { fetchFlightsByAirport };
