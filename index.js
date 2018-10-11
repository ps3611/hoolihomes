require('dotenv').load();
const runApiService = require('./api');
const algorithm = require('./algorithm');
const connection = require('./db/db');

async function main() {
  // STEP 1: Get data from different APIs
  await Promise.all(runApiService());

  // STEP 2: Apply algorithm
  await algorithm();

  // finalizing steps
  try {
    await connection.collections.rawhomes.drop();
    process.exit();
  }
  catch (err) {
    console.log('Shutdown ERROR', err);
  }
}

main();
