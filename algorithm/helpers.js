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
    await Home.insertMany(homesList);
  }
  catch (e) {
    console.log(e);
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
