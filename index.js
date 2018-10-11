require('dotenv').load();
const runApiService = require('./api');
const algorithm = require('./algorithm/algorithm');

async function main() {
  // STEP 1: Get data from different APIs
  await Promise.all(runApiService());

  // STEP 2: Apply algorithm
  algorithm();

  // shut down Mongo connection.
  process.exit();
}

main();
