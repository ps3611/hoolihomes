const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();
const port = 3001;

app
  .use(cors())
  .use(router)
  .listen(port, () => console.log(`Express app listinging on port ${port}`));

// EXAMPLE REQUEST
// http://127.0.0.1:3001/homes?city=barcelona&centerLatitude=41.385063&centerLongitude=2.173404&radius=50000&page=2&country=es&size=[50,250]&price=[50000,5000000]&estimatedPricePercentageDifference=[-50,50]
