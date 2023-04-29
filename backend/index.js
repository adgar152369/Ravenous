const express = require('express');
const cors = require('cors');
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();

const app = express();
// enable CORS
app.use(cors());


app.get('/:location/:terms/:sortByOption', async (req, res) => {
  const apiKey ="sRwtZHQjP9SouzLjUzVHCN0z5zkJDDEvWot0fPToIQlf64sy4nt2czfwSq6l0pABaN27nkyeOlx3APkSep_n9n1B0qDEhpBiSrtcSVxcFq4bBJ4OgP2vK6xcWSFLZHYx";
  const { location, terms, sortByOption } = req.params;
  const url = `https://api.yelp.com/v3/businesses/search?location=${location}&term=${terms}&sort_by=${sortByOption}&limit=20`;
  const response = await fetch(url, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const data = await response.json();
  console.log(data)
  res.send(data);
});




app.listen(8000, () => {
  console.log('listening on port 8000!');
})