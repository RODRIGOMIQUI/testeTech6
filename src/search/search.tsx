import * as React from 'react';

interface SearchProps {
  name: string,
}

const Search: React.SFC<SearchProps> = (props) => {
  return (
    <div className="input-group md-form form-sm form-2 pl-0">
      <input className="form-control my-0 py-1 lime-border" type="text" placeholder={props.name} aria-label="Search" />
      <div className="input-group-append">
        <span className="input-group-text lime lighten-2" id="basic-text1"><i className="fa fa-search text-grey" aria-hidden="true"></i></span>
      </div>
    </div>
  );  
}

Search.defaultProps = {
  name: "Search",
}

export default Search;
