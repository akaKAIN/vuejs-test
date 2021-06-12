export const shortDateFilter = (dateTime) => {
  return new Date(dateTime)
    .toLocaleDateString()
    .split('/')
    .map((unit) => (unit < 10 ? `0${unit}` : unit))
    .join('.');
};
