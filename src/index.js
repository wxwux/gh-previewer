import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ACCESS_TOKEN } from "../env.json";

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = ACCESS_TOKEN
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const cache = new InMemoryCache({
  typePolicies: {
    Organization: {
      keyFields: ["databaseId"]
    }
  }
})

const initialState = {
  organization: "impraise"
}


const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
})


ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
  , document.getElementById("root"));
