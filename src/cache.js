import { InMemoryCache, makeVar } from "@apollo/client";

const organizationVar = makeVar("impraise");

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        _organization: {
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
})

const initialState = {
  organization: "impraise"
}

export default cache;