const loadRawDataFromDb = require('../db/loadRawDataFromDb');

module.exports = async () => {
  console.log('---------algorithm---------');
  const rawData = await loadRawDataFromDb();
  console.log(rawData);
};
