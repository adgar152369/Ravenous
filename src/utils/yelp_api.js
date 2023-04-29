const apiKey = "";

const Yelp = {
  async search(terms, location, sortByOption) {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&term=${terms}&sort_by=${sortByOption}&limit=20`;
    const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer sRwtZHQjP9SouzLjUzVHCN0z5zkJDDEvWot0fPToIQlf64sy4nt2czfwSq6l0pABaN27nkyeOlx3APkSep_n9n1B0qDEhpBiSrtcSVxcFq4bBJ4OgP2vK6xcWSFLZHYx`,
      }
    }
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data)
      return data;
    } 
    catch (error) {
      console.log(error);
    }
  }
}


export default Yelp;