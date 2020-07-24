export const convertDate = dateISO8601 => {
  const date = new Date(dateISO8601);
  const currentYear = new Date().getFullYear();

  const options = {
    day: "2-digit",
    month: "short",
    year: currentYear === date.getFullYear() ? undefined : "numeric"
  }

  return new Intl.DateTimeFormat("en-GB", options).format(date);
}