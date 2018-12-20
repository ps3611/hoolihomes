const RawHome = require('../db/model/rawHome');

module.exports.loadRawData = async () => {
  try {
    return await RawHome.find({});
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
  return Math.round(100 * (realPrice - estimatePrice) / estimatePrice);
};
