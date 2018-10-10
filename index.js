require('dotenv').load();
const runApiService = require('./api');
// const algorithm = require('./algorithm/algorithm');

async function main() {
  // const homesList = await getApiData();
  // await writeRawDataToDb(homesList);
  await runApiService();
  // algorithm();
}

main();
