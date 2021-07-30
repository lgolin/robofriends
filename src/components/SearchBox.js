import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        className="pa3 ma2 ba b--purple bg-lightest-purple"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
