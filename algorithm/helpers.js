module.exports.avgCalc = function avgCalc(homesArray) {
  const m2PriceArray = homesArray
    .map(obj => obj.priceByArea)
    .filter(el => Number.isFinite(el));
  return m2PriceArray.reduce((a, b) => a + b) / m2PriceArray.length;
};

module.exports.diffCalc = function diffCalc(realPrice, estimatePrice) {
  return Math.round(100 * (estimatePrice - realPrice) / realPrice);
};
