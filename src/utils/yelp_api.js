const Yelp = {
  async search(terms, location, sortByOption) {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&term=${terms}&sort_by=${sortByOption}&limit=20`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_YELP}`
      }
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      if (!data) return;
      else return data;
    } 
    catch (error) {
      console.error(error);
    }
  }
}


export default Yelp;