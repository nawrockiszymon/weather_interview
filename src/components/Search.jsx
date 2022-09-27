import React, { useRef } from "react";

function Search({ searchValue, setSearchValue, handleSearch }) {
  const searchRef = useRef(null);
  function handleInput(e) {
    setSearchValue(e.target.value);
  }
  function handleFocus(e) {
    searchRef.current.classList.add("focus");
  }
  function handleBlur(e) {
    if (searchValue === "") {
      searchRef.current.classList.remove("focus");
    }
  }
  return (
    <div className="search" ref={searchRef}>
      <label htmlFor="searchCity" className="search__lbl">
        Type city:
      </label>
      <input
        type="text"
        onChange={handleInput}
        value={searchValue}
        id="searchCity"
        className="search__input"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button className="search__btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;
