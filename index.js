// THIS IS EXECUTED PERIODICALLY BY CRON
require('dotenv').load();
const getApiData = require('./api/getApiData');
const func2 = require('./algorithm/algorithm');
const func3 = require('./db/db');

async function main() {
  // STEP 1: Fetch API Data
  const listings = await getApiData();
  // STEP 2: Apply Algorythm
  const x2 = func2(listings);
  // STEP 3: Write to Database
  const x3 = func3(x2);
}


main();
