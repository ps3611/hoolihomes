require('dotenv').load();
const getDataFromApi = require('./api');
const algorithm = require('./algorithm/algorithm');

async function main() {
  // const homesList = await getApiData();
  // await writeRawDataToDb(homesList);
  await getDataFromApi();
  // algorithm();
}

main();
