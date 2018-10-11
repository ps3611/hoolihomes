require('dotenv').load();
const runApiService = require('./api');
const algorithm = require('./algorithm/algorithm');

async function main() {
  // STEP 1: Get data from different APIs
  await runApiService();
  // STEP 2: Apply algorithm
  // algorithm();
}

main();
