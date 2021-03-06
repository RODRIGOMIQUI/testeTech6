import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import * as dotenv from "dotenv";

//import Profile from './profile';
//import Repository from './repository';
import Users from './users';

dotenv.load();

const GITHUB_BASE_URL = 'https://api.github.com/graphql';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log(`[graphQL error]: ${graphQLErrors}`);
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});

const link = ApolloLink.from([errorLink, httpLink]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

const Grid = () => {
  return (
    <ApolloProvider client={client}>
      <Users />
    </ApolloProvider>        
  );
  //<Profile />
  //<Repository />
}

export default Grid;