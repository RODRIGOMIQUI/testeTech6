/*
import * as React from 'react';
import { asyncComponent } from 'react-async-component';
import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com/',
});

interface SearchProps {
  username: string,
}

const SearchUsers = asyncComponent({
  name: 'AsyncProduct',
  serverMode: 'resolve',
  resolve: () => {
    return import('./Product').then(m=> m.default);
  },
});

const SearchUsers: React.SFC<SearchProps> = ({username}) => {
  return (
    github.get('https://api.github.com/users/' + username)
      .then(function(response) {
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200
      })
  );
}

export default SearchUsers;
*/
