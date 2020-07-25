export const buildSearchQuery = queryObj => {
  return Object.keys(queryObj).reduce((query, key) => {
    const value = queryObj[key];
    return `${query} ${key}:${value}`.trim();
  }, "");
}