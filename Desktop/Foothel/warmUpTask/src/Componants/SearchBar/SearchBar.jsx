import React from 'react'
import {TfiSearch} from 'react-icons/tfi'
import './searchBar.css'
function SearchBar() {
  return (
    <div className='search-bar' id='search'>
        <label className='search-bar-box'>
        <TfiSearch className='search-icon'/> <input htmlFor="search" type='search'className='search-input' placeholder="Find member"/>
        </label>
    </div>
  )
}

export default SearchBar