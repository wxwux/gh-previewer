import { InMemoryCache, makeVar } from "@apollo/client";

const initialState = {
  organization: "impraise",
  searchQuery: {
    fork: true,
    sort: "updated-desc"
  }
}

export const organizationVar = makeVar(initialState.organization);
export const searchQuery = makeVar(initialState.searchQuery);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        _organizationName: {
          read() {
            return organizationVar();
          }
        }
      }
    },
    Organization: {
      keyFields: ["databaseId"]
    }
  }
});


export default cache;