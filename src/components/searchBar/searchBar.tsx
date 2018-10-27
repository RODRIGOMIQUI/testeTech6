
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { onChangeloginSearch } from './searchBarActions';

import "./searchBar.css";

interface SearchBarProps {  
  onChangeloginSearch: any;
  placeholderName: string,
}

const SearchBar: React.SFC<SearchBarProps> = ({onChangeloginSearch, placeholderName}, props) => {
  
  const handleClick = (evt) => {
    evt.preventDefault();
    mapDispatchToProps.call(onChangeloginSearch);
  }
  
  return (
    <div className="input-group md-form form-sm form-2 pl-0 search-bar-space">
      <input className="form-control my-0 py-1 lime-border" name="loginSearch" type="text" placeholder={placeholderName} value={props.loginSearch} onChange={onChangeloginSearch} aria-label="Search" />
      <div className="input-group-append">
        <button type="button" onClick={handleClick} className="btn"><i className="fa fa-search text-grey" aria-hidden="true"></i></button>        
      </div>
    </div>
  );  
}

SearchBar.defaultProps = {
  placeholderName: "Search",
}

const mapStateToProps = state => ({ loginSearch: state.search.loginSearch })
const mapDispatchToProps = dispatch => bindActionCreators({ onChangeloginSearch: onChangeloginSearch }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
