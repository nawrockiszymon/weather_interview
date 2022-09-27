import React from 'react'
import Autocomplete from './Autocomplete'
import Search from './Search'

function SearchBar() {
  return (
    <div>
        <Search/>
        <Autocomplete/>
    </div>
  )
}

export default SearchBar