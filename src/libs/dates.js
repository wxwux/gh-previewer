export const convertDate = (dateISO8601) => {
  if (!dateISO8601) return null;

  const date = new Date(dateISO8601);
  const currentYear = new Date().getFullYear();

  const options = {
    day: "numeric",
    month: "short",
    year: currentYear === date.getFullYear() ? undefined : "numeric",
  };

  try {
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  } catch (e) {
    return null;
  }
};
