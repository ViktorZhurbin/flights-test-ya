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

export { getCurrentHour, getTimeFromIsoString, formatTodaysDate }
