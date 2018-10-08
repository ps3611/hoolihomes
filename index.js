require('dotenv').load();
const getApiData = require('./api/getApiData');
const db = require('./db/db');

async function main() {
  const listings = await getApiData();
  console.log(listings);
  console.log(db);
}

main();
