const NestoriaClient = require('./class/nestoria');
const IdealistaClient = require('./class/idealista');

const nestoria = new NestoriaClient();
const idealista = new IdealistaClient();

module.exports = async () => {
  [idealista, nestoria].forEach(async (api) => {
    const rawData = await api.fetchData();
    const processedData = api.processData(rawData);
    api.saveData(processedData);
  });
};
