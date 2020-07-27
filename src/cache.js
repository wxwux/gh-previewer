import { InMemoryCache, makeVar } from "@apollo/client";

const initialState = {
  organization: "",
  searchQuery: {
    fork: true,
  },
};

export const organizationVar = makeVar(initialState.organization);
export const searchQueryVar = makeVar(initialState.searchQuery);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        _organizationName: {
          read: () => organizationVar(),
        },
        _query: {
          read: () => searchQueryVar(),
        },
      },
    },
    Organization: {
      keyFields: ["databaseId"],
    },
  },
});

export default cache;
