import React, { useState } from 'react';
// import logo from './logo.svg';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../utils/yelp_api';
import './App.css';


function App() {
  const [businesses, setBusinesses] = useState([]);

  // console.log(businesses)

  const searchYelp = async (term, location, sortBy) => {
    const businesses = await Yelp.search(term, location, sortBy);
    setBusinesses(businesses);
  };

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses ? businesses.businesses : 'uh oh, error.'} />
    </div>
  );
}

export default App;
