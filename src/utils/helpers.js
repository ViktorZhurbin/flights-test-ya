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

const getFlightTime = (date) => {
  const re = /(?<=T)[\w+.-][^:]*:[^:]*/;
  return re.exec(date)[0]
}

export { getCurrentHour, getTimeFromIsoString, formatTodaysDate }
