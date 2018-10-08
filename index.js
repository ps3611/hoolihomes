require('dotenv').load();
const getApiData = require('./api/getApiData');
const writeRawDataToDb = require('./db/writeRawDataToDb');

async function main() {
  const homesList = await getApiData();
  writeRawDataToDb(homesList);
}

main();
