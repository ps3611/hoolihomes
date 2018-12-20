require('dotenv').load();
const apiService = require('./api');
const algorithmService = require('./algorithm');

async function main() {
  // STEP 1: Get data from different APIs
  await Promise.all(apiService());

  // STEP 2: Apply algorithm
  await algorithmService();

  process.exit();
}

main();
