export const buildSearchQuery = (queryObj) => {
  if (!(queryObj instanceof Object)) {
    return "";
  }

  return Object.keys(queryObj).reduce((query, key) => {
    const value = queryObj[key];
    return `${query} ${key}:${value}`.trim();
  }, "");
};
