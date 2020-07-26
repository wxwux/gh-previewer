export default function setSearchQuery(searchQueryVar) {
  return (searchQuery) => {
    const commonFilters = {
      sort: "updated-desc"
    }
    searchQueryVar({
      ...commonFilters,
      ...searchQuery
    });
  };
}