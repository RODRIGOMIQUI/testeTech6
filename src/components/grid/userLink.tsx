import * as React from 'react';

const UserLink = ({ children, ...props }) => (
  <a {...props} target="_blank">
    {children}
  </a>
);

export default UserLink;