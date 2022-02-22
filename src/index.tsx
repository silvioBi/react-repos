import * as React from "react";
import ReactDOM from "react-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";
import { ChakraProvider } from "@chakra-ui/react";
import Pages from "./pages";

const authLink = setContext((_, { headers }) => {
  // [sb] I stored the API key in the `.env.local` file for brevity, in a real life application this page would
  // be protected by a login and the token would be served via an header
  const token = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GITHUB_API_ENDPOINT,
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        search: relayStylePagination(),
      },
    },
  },
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

// [sb] TODO when you will add more elements add a custom theme to ChakraProvider
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Pages />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
