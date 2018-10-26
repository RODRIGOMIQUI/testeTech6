import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from './loading';
import ErrorMessage from './errorMessage';

const GET_CURRENT_USER = gql`
{
  viewer {
    login
    name
  }
}
`;

const Profile = () => (
  <Query query={GET_CURRENT_USER}>
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
      return (
        <div>
          {viewer.name} {viewer.login}
        </div>
      );
    }}
  </Query>
);

export default Profile;
