
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onChangeDescription, searchBarActions } from './searchBarActions';

import "./searchBar.css";

interface SearchBarProps {
  onClick: any;
  onChangeDescription: any;
  name: string,
  description: string,
}

const SearchBar: React.SFC<SearchBarProps> = ({onClick, onChangeDescription, name, description}) => {
  return (
    <div className="input-group md-form form-sm form-2 pl-0 search-bar-space">
      <input className="form-control my-0 py-1 lime-border" name="description" type="text" placeholder={name} value={description} onChange={onChangeDescription} aria-label="Search" />
      <div className="input-group-append">
        <span className="input-group-text lime lighten-2" id="basic-text1" onClick={onClick}>
          <i className="fa fa-search text-grey" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );  
}

SearchBar.defaultProps = {
  name: "Search",
}

const mapStateToProps = state => ({ description: state.search.description })
const mapDispatchToProps = dispatch => bindActionCreators({ onClick: searchBarActions, onChangeDescription: onChangeDescription }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
