
const Yelp = {
  async search(terms, location, sortByOption) {
    // const url = `http://localhost:8000/${location}/${terms}/${sortByOption}`;
  
    try {
      const response = await fetch(`http://localhost:8000/${location}/${terms}/${sortByOption}`);
      const data = await response.json();
      console.log(data)
      return data;
    } 
    catch (error) {
      console.log('blah');
    }
  }
}


export default Yelp;