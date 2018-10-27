import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loading from './loading';
import ErrorMessage from './errorMessage';
import UserList from './userList';
import { onChangeloginSearch } from '../searchBar/searchBarActions';

import './style.css';

const GET_USERS = gql`
  query getUsers($loginSearch: String!) {
    search(query: $loginSearch, type: USER, first: 10) {
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

const Users = ({ loginSearch }) => (  
  <Query query={GET_USERS} variables={{ loginSearch }}>
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

const mapStateToProps = state => ({ loginSearch: state.search.loginSearch })
const mapDispatchToProps = dispatch => bindActionCreators({ onChangeloginSearch: onChangeloginSearch }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Users);

