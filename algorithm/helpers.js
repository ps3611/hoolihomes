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

module.exports.saveFormattedData = async (formattedHomesList) => {
  try {
    const rawhomes = await connection.collections.rawhomes.find({}).toArray();
    const rawhomesId = new Set(rawhomes.map(obj => obj.id));
    await connection.collections.rawhomes.drop();

    const homes = formattedHomesList;
    const homesId = new Set(homes.map(obj => obj.id));

    // DELETE
    const toDeleteHomeIds = [...homesId].filter(x => !rawhomesId.has(x));
    await Home.deleteMany({ id: { $in: toDeleteHomeIds } });
    // UPDATE
    const toUpdateHomeIds = [...homesId].filter(x => rawhomesId.has(x));
    // ADD
    const toAddHomeIds = [...rawhomesId].filter(x => !homesId.has(x));
    // await Home.insertMany(homesList);
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
