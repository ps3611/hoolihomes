const loadRawDataFromDb = require('../db/loadRawDataFromDb');

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
    formattedObj.estimatedPricePercentageDifference = Math.round(100 * (avgM2Price * obj.size - obj.price) / obj.price);
    return formattedObj;
  });
  console.log(formattedData);
};
