import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3 col-md-2"
      placeholder="Search..."
      
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
