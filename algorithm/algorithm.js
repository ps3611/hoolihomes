const loadRawDataFromDb = require('../db/loadRawDataFromDb');

function diffCalc(realPrice, estimatePrice) {
  return Math.round(100 * (estimatePrice - realPrice) / realPrice);
}

module.exports = async () => {
  const rawData = await loadRawDataFromDb();
  const m2PriceArray = rawData.map(obj => obj.priceByArea);
  const avgM2Price = m2PriceArray.reduce((a, b) => a + b) / m2PriceArray.length;
  const formattedData = rawData.map((obj) => {
    const formattedObj = {};
    formattedObj.thumbnail = obj.thumbnail;
    formattedObj.price = obj.price;
    formattedObj.size = obj.size;
    formattedObj.municipality = obj.municipality;
    formattedObj.country = obj.country;
    formattedObj.latitude = obj.latitude;
    formattedObj.longitude = obj.longitude;
    formattedObj.url = obj.url;
    formattedObj.pricePerSquareMeter = obj.priceByArea;
    formattedObj.estimatedPrice = avgM2Price * obj.size;
    formattedObj.estimatedPricePercentageDifference = diffCalc(obj.price, avgM2Price * obj.size);
    return formattedObj;
  });
  console.log(formattedData);
};
