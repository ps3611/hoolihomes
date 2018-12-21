const NestoriaClient = require('./class/nestoria');
const IdealistaClient = require('./class/idealista');
/* eslint-disable no-restricted-syntax, no-await-in-loop */

const nestoria = new NestoriaClient();
const idealista = new IdealistaClient();
const apiArray = [nestoria];

module.exports = () => (
  apiArray.map(async (api) => {
    try {
      for (const paramObj of api.params) {
        const rawData = await api.fetchData(paramObj);
        console.log(`${api.name} data for ${JSON.stringify(paramObj)} successfully fetched!`);

        const processedData = api.processData(rawData, paramObj);
        console.log(`${api.name} data for ${JSON.stringify(paramObj)} successfully processed!`);

        await api.saveData(processedData);
        console.log(`${api.name} data for ${JSON.stringify(paramObj)} successfully saved!`);
      }
    }
    catch (err) {
      console.log(`${api.name} ERROR`);
      console.log(err);
    }
  })
);
