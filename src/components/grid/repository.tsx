import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from './loading';
import ErrorMessage from './errorMessage';
import RepositoryList from './repositoryList';

import './style.css';

const GET_REPOSITORIES_OF_CURRENT_USER = gql`
{
  viewer {
    repositories(
      first: 5
      orderBy: { direction: DESC, field: STARGAZERS }
    ) {
      edges {
        node {
          id
          name
          url
          descriptionHTML
          primaryLanguage {
            name
          }
          owner {
            login
            url
          }
          stargazers {
            totalCount
          }
          viewerHasStarred
          watchers {
            totalCount
          }
          viewerSubscription
        }
      }
    }
  }
}
`;

const Repository = () => (
  <Query query={GET_REPOSITORIES_OF_CURRENT_USER}>
    {({ data, loading, error }) => {
      if (error) {
        return <ErrorMessage error={error} />;
      }
      const { viewer } = data;
      if (loading || !viewer) {
        return <Loading />;
      }    
      if (!viewer) {
        return null;
      }
      return <RepositoryList repositories={viewer.repositories} />;
    }}
  </Query>
);  

export default Repository;