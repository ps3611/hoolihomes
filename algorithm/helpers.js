const connection = require('../db/db');
const RawHome = require('../db/model/rawHome');
const Home = require('../db/model/home');

module.exports.loadRawData = async () => {
  try {
    return await RawHome.find({});
  }
  catch (e) {
    console.log(e);
  }
};

module.exports.saveFormattedData = async (homesList) => {
  try {
    const rawhomes = homesList;
    const rawhomesId = new Set(rawhomes.map(obj => obj.id));
    console.log(rawhomesId.size);
    await connection.collections.rawhomes.drop();

    const homes = await connection.collections.homes.find({}).toArray();
    const homesId = new Set(homes.map(obj => obj.id));
    console.log(homesId.size);

    // DELETE
    const toDelete = [...homesId].filter(x => !rawhomesId.has(x));
    console.log('toDelete', toDelete.length);
    await Home.deleteMany({ id: { $in: toDelete } });
    // UPDATE
    const toUpdate = [...homesId].filter(x => rawhomesId.has(x));
    console.log('toUpdate', toUpdate.length);
    // ADD
    const toAdd = [...rawhomesId].filter(x => !homesId.has(x));
    console.log('toAdd', toAdd.length);
  }
  catch (err) {
    console.log('Shutdown ERROR', err);
  }
};

module.exports.avgCalc = function avgCalc(homesArray) {
  const m2PriceArray = homesArray
    .map(obj => obj.priceByArea)
    .filter(el => Number.isFinite(el));
  return m2PriceArray.reduce((a, b) => a + b) / m2PriceArray.length;
};

module.exports.diffCalc = function diffCalc(realPrice, estimatePrice) {
  return Math.round(100 * (estimatePrice - realPrice) / realPrice);
};
