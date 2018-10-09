require('dotenv').load();
const getApiData = require('./api/getApiData');
const writeRawDataToDb = require('./db/writeRawDataToDb');
const algorithm = require('./algorithm/algorithm');

async function main() {
  const homesList = await getApiData();
  await writeRawDataToDb(homesList);
  algorithm();
}

main();
