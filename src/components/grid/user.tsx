import * as React from 'react';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import * as dotenv from "dotenv";


import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from './loading';
import ErrorMessage from './errorMessage';
import Followers from './followers';

import './user.css';

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

//ronal2do
const GET_USER_PROFILE = gql`
  query getUserProfile {
    user(login:"thiagofa") {
      id
      name
      login
      avatarUrl
      followers(first: 5) {
        totalCount
        edges {
          node {
            avatarUrl
            name
            email
          }
        }
      }
      following {
        totalCount
      }
      gists {
        totalCount
      }
      organizations(first: 1) {
        totalCount
        edges {
          node {
            name
          }
        }
      }
      repositories(first: 20) {
        totalCount
        edges {
          node {
            name
          }
        }
      }
    }
  }
`;

/*
const User = ({match}) => {
    return (
      <div>
        <h2>{match.params.userLogin}</h2>
      </div>
    );
}
export default User;
*/

const User = () => (
  <ApolloProvider client={client}>
    <Query query={GET_USER_PROFILE}>
      {({ data, loading, error }) => {
        if (error) {
          return <ErrorMessage error={error} />;
        }
        const { user } = data;
        if (loading || !user) {
          return <Loading />;
        }
        if (!user) {
          return null;
        }
        return (
          <UserProfile user={user} />
        );
      }}
    </Query>
  </ApolloProvider>
);  

const UserProfile = ({ user }) => (
  <div className="container">
    <div className="row user-menu-container square">
      <div className="col-md-12 user-details">
        <div className="row coralbg white">
          <div className="col-md-6 no-pad">
            <div className="user-pad">
              <h3>{user.name}</h3>
              <h4 className="white"><i className="fa fa-check-circle-o"></i> {user.organizations.edges[0].node.name}</h4>
              <h4 className="white"><i className="fa fa-twitter"></i> {user.login}</h4>
            </div>
          </div>
          <div className="col-md-6 no-pad">
            <div className="user-image">
              <img src={user.avatarUrl} className="img-responsive thumbnail" />
            </div>
          </div>
        </div>
        <div className="row overview">
          <div className="col-md-3 user-pad text-center">
            <h3>FOLLOWERS</h3>
            <h4>{user.followers.totalCount}</h4>
          </div>
          <div className="col-md-3 user-pad text-center">
            <h3>FOLLOWING</h3>
            <h4>{user.following.totalCount}</h4>
          </div>
          <div className="col-md-3 user-pad text-center">
            <h3>GISTS</h3>
            <h4>{user.gists.totalCount}</h4>
          </div>
          <div className="col-md-3 user-pad text-center">
            <h3>REPOSITORIES</h3>
            <h4>{user.repositories.totalCount}</h4>
          </div>
        </div>
      </div>
      <div className="col-md-6 user-menu user-pad">
        <div className="user-menu-content active">
          <h3 className="text-center">First 5 followers</h3>
          <ul className="user-menu-list">
            <Followers followers={user.followers} />
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default User;


