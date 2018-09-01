const ID = 'a649e1cf';
const KEY = 'c23b5427e41493f54c7f151a0e10e0b2';
const baseUrl = 'https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status'
const params = `?appId=${ID}&appKey=${KEY}&utc=false&numHours=2&maxFlights=5`;

const getArrivals = async (airport, date, startHour) => {
  const response = await fetch(
    `${baseUrl}/${airport}/arr/${date}/${startHour}${params}`,
  );

  return response.json();
}

const formatDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${month}/${day}`;
}

const getStartHour = () => {
  const date = new Date();

  return date.getHours();
}

export { getArrivals, formatDate, getStartHour }
