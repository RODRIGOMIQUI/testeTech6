import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onChangeDescription, searchAction } from '../store/searchActions';

interface SearchProps {
  onClick: any;
  onChangeDescription: any;
  name: string,
  description: string,
}

const Search: React.SFC<SearchProps> = ({onClick, onChangeDescription, name, description}) => {
  return (
    <div className="input-group md-form form-sm form-2 pl-0">
      <input className="form-control my-0 py-1 lime-border" name="description" type="text" placeholder={name} value={description} onChange={onChangeDescription} aria-label="Search" />
      <div className="input-group-append">
        <span className="input-group-text lime lighten-2" id="basic-text1" onClick={onClick}>
          <i className="fa fa-search text-grey" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );  
}

Search.defaultProps = {
  name: "Search",
}

const mapStateToProps = state => ({ description: state.appRedux.description })
const mapDispatchToProps = dispatch => bindActionCreators({ onClick: searchAction, onChangeDescription: onChangeDescription }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search);
