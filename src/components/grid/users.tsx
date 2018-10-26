import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loading from './loading';
import ErrorMessage from './errorMessage';
import UserList from './userList';

import './style.css';

const GET_USERS = gql`
{
  search(query: "juliana", type: USER, first: 10) {
    userCount    
    edges {
      node {        
        ... on User {
          id
          name
          login
          avatarUrl
          repositories {
            totalCount
          }          
          followers {
            totalCount
          }
          following {
            totalCount
          }
        }
      }
    }
  }
}
`;

const Users = () => (
  <Query query={GET_USERS}>
    {({ data, loading, error }) => {
      if (error) {
        return <ErrorMessage error={error} />;
      }
      const { search } = data;
      if (loading || !search) {
        return <Loading />;
      }    
      if (!search) {
        return null;
      }
      return (
        <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
          <tr>
            <th></th>
            <th>Full Name</th>
            <th>Username</th>
            <th>Repositories</th>
            <th>Followers</th>
            <th>Following</th>
          </tr>
          </thead>
          <tbody>
            <UserList users={search} />
          </tbody>
        </table>
        </div>        
      );
    }}
  </Query>
);  

export default Users;

