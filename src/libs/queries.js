export const buildSearchQuery = queryObj => {
  if (!(queryObj instanceof Object)) {
    console.warn("passed an incorrect value to buildSearchQuery function");
    return ""
  }

  return Object.keys(queryObj).reduce((query, key) => {
    const value = queryObj[key];
    return `${query} ${key}:${value}`.trim();
  }, "");
}