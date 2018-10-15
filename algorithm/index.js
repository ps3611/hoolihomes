const algorithm = require('./algorithm');
const saveFormattedData = require('./saveFormattedData');
const { loadRawData } = require('./helpers');

module.exports = async () => {
  const rawData = await loadRawData();
  const algorithmResult = algorithm(rawData);
  await saveFormattedData(algorithmResult);
};
