
import * as React from 'react';
import './user.css';

const Follower = ({
  name,
  email
}) => (
  <li>
    <h4 className="text-left followers"><i className="fa fa-user coral"></i> {name} ({email})</h4>
  </li>
);

export default Follower;