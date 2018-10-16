const NestoriaClient = require('./class/nestoria');
const IdealistaClient = require('./class/idealista');
const cities = require('./cities.json');

const nestoria = new NestoriaClient();
const idealista = new IdealistaClient();
const apiArray = [nestoria];

module.exports = () => (
  apiArray.map(async (api) => {
    try {
      const rawData = await api.fetchData();
      console.log(`${api.name} data successfully fetched!`);

      const processedData = api.processData(rawData);
      console.log(`${api.name} data successfully processed!`);

      await api.saveData(processedData);
      console.log(`${api.name} data successfully saved!`);
    }
    catch (err) {
      console.log(`${api.name} ERROR`);
      console.log(err);
    }
  })
);
