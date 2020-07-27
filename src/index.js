import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, createHttpLink, ApolloProvider } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ACCESS_TOKEN } from "../env.json";
import cache from "./cache";
import App from "./App.jsx";

// cypress(e2e) can't handle fetch requests,
if (process.env.NODE_ENV === "development") {
  require("unfetch/polyfill");
}

const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = ACCESS_TOKEN;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("root"),
);
