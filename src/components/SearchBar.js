import React from 'react';

const SearchBar = (props) => {
  return (
    <div className="search-component">
      <input onChange={props.handleChange} className="search-bar" name="search" type="text" placeholder="Search" autoComplete="off"/>
    </div>
  );
};

export default SearchBar;