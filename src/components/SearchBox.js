import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className="pa3 ba mb4 b--gray bg-washed-yellow"
        type="search"
        placeholder="search your robot"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
