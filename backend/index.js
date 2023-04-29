const express = require('express');
const cors = require('cors');
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();

const app = express();
// enable CORS
app.use(cors());


app.get('/:location/:terms/:sortByOption', async (req, res) => {
  const apiKey = process.env.YELP_API_KEY;
  const { location, terms, sortByOption } = req.params;
  const url = `https://api.yelp.com/v3/businesses/search?location=${location}&term=${terms}&sort_by=${sortByOption}&limit=20`;
  const response = await fetch(url, {
    headers: {
      origin: 'http://localhost:3000',
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