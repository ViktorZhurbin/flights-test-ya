import axios from 'axios';

import mockArrivals from "./mockArrivals";
import mockDepartures from "./mockDepartures";
import { flightType } from '../constants';
import { getCurrentHour, formatApiResponse, formatTodaysDate } from './helpers';

const ID = 'a649e1cf';
const KEY = 'c23b5427e41493f54c7f151a0e10e0b2';
const baseUrl = 'https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/SVO'
const params = `?appId=${ID}&appKey=${KEY}&utc=false&numHours=2&maxFlights=40&extendedOptions=useInlinedReferences`;

const handleError = error => {
  console.warn(error);
  return null;
};

const fetchData = async (
  type = flightType.ARRIVAL,
  date = formatTodaysDate(),
  startHour = getCurrentHour()
) => {
  const mockData =
    (type === flightType.ARRIVAL
      ? mockArrivals
      : mockDepartures);
  const encodedURI = window.encodeURI(
    `https://cors-anywhere.herokuapp.com/${baseUrl}/${type}/${date}/${startHour}${params}`
  );
  const response = await axios.get(encodedURI).catch(handleError);
  const flights = response ? response.data : mockData;

  return formatApiResponse(flights);
}

export { fetchData }
