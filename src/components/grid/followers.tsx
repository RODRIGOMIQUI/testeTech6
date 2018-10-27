
import * as React from 'react';
import Follower from './follower';
import './user.css';

const Followers = ({ followers }) => 
  followers.edges.map(({ node }) => (
    <Follower {...node} />
  ));

export default Followers;