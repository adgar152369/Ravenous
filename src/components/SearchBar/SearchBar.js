import React, { useState } from "react";
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

function SearchBar() {
  // reflect changes in state when user interacts
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortOption, setSortOption] = useState('best_match');

  function getSortOption(sortValue) {
    if (sortOption === sortValue) {
      return 'active';
    } else return;
  }

  function handleSortByOption(sortValue) {
    setSortOption(sortValue);
  }

  function handleSearchGo(e) {
    e.preventDefault();
    console.log(term, location, sortOption)
  }

  function renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li
        key={sortByOptionValue}
        className={getSortOption(sortByOptionValue)}
        onClick={() => handleSortByOption(sortByOptionValue)}>{sortByOption}</li>;
    })
  }

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input onChange={({ target }) => setTerm(target.value)} placeholder="Search Businesses" />
        <input onChange={({ target }) => setLocation(target.value)} placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a onClick={handleSearchGo}>Let's Go</a>
      </div>
    </div>
  );
}

export default SearchBar;