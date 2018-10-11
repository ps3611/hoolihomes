const loadRawDataFromDb = require('../db/loadRawDataFromDb');
const writeFormattedDataToDb = require('../db/writeFormattedDataToDb');
const { avgCalc, diffCalc } = require('./helpers');

module.exports = async () => {
  const rawData = await loadRawDataFromDb();
  const avgM2Price = avgCalc(rawData);
  console.log(rawData[0]);
  const formattedData = rawData.map((obj) => {
    const formattedObj = {};
    formattedObj.thumbnail = obj.thumbnail;
    formattedObj.price = obj.price;
    formattedObj.size = obj.size;
    formattedObj.country = obj.country;
    formattedObj.latitude = obj.latitude;
    formattedObj.longitude = obj.longitude;
    formattedObj.url = obj.url;
    formattedObj.pricePerSquareMeter = obj.priceByArea;
    formattedObj.estimatedPrice = avgM2Price * obj.size;
    formattedObj.estimatedPricePercentageDifference = diffCalc(obj.price, avgM2Price * obj.size);
    return formattedObj;
  });
  console.log(formattedData[0]);
  writeFormattedDataToDb(formattedData);
};
