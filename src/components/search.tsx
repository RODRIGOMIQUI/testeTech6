import * as React from 'react';

import SearchBar from './searchBar/searchBar';
import Grid from './grid/grid';

const Search = (props) => {
  return (
    <div>
      <h2>GitHub Users List</h2>
      <SearchBar placeholderName="Search" />
      <Grid />
    </div>
  );  
}

export default Search;
