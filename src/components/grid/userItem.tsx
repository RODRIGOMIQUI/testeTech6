import * as React from 'react';
import UserLink from './userLink';
import './style.css';

const UserItem = ({
  id,
  name,
  login,
  avatarUrl,
  repositories,
  followers,
  following,
}) => (
  <tr key={id}>
      <td><UserLink href={"/user/" + login} target='_top'><img src={avatarUrl} height="40" width="40"></img></UserLink></td>
      <td>{name}</td>
      <td>{login}</td>
      <td>{repositories.totalCount}</td>
      <td>{followers.totalCount}</td>
      <td>{following.totalCount}</td>
  </tr> 
);

export default UserItem;
