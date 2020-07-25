export const buildSearchQuery = queryObj => {
  return Object.keys(queryObj).reduce((query, key) => {
    const value = queryObj[key];
    console.log('qery', queryObj);
    return `${query} ${key}:${value}`.trim();
  }, "");
}