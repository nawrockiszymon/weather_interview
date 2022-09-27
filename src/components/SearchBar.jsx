import React from "react";
import Autocomplete from "./Autocomplete";
import Search from "./Search";

function SearchBar({ searchValue, setSearchValue }) {
  return (
    <div>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <Autocomplete />
    </div>
  );
}

export default SearchBar;
