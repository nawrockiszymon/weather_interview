import React from "react";
import Autocomplete from "./Autocomplete";
import Search from "./Search";

function SearchBar({ searchValue, setSearchValue, handleSearch }) {
  return (
    <div>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
      />
      <Autocomplete />
    </div>
  );
}

export default SearchBar;
