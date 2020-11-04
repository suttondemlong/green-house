import React from 'react'
import './Search.css'

const Search = (props) => {
  return (
    <>
        <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
            <input
                className="search-input"
                value={props.searchValue}
                onChange={(e) => props.onChange(e)}
                name="Search"
                placeholder="Search"
                type="search"
                results={5}
                autoFocus
            />
      </form>
    </>
    )
}

export default Search