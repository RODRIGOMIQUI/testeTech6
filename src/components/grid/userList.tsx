import * as React from 'react';
import UserItem from './userItem';
import './style.css';

const UserList = ({ users }) =>
  users.edges.map(({ node }) => (
    <UserItem {...node} />
  ));

export default UserList;
