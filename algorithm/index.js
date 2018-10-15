const algorithm = require('./algorithm');
const { loadRawData, saveFormattedData } = require('./helpers');

module.exports = async () => {
  const rawData = await loadRawData();
  const algorithmResult = algorithm(rawData);
  await saveFormattedData(algorithmResult);
};
