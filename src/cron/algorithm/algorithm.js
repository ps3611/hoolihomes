const {
  avgCalc,
  diffCalc,
} = require('./helpers');

function algorithm(rawData) {
  const avgM2Price = avgCalc(rawData);
  const formattedData = rawData.map((obj) => {
    const formattedObj = {};
    formattedObj.id = obj.id;
    formattedObj.thumbnail = obj.thumbnail;
    formattedObj.price = obj.price;
    formattedObj.size = obj.size;
    formattedObj.title = obj.title;
    formattedObj.country = obj.country;
    formattedObj.city = obj.city;
    formattedObj.url = obj.url;
    formattedObj.loc = { type: 'Point', coordinates: [obj.longitude, obj.latitude] };
    formattedObj.pricePerSquareMeter = Math.round(obj.priceByArea);
    formattedObj.estimatedPrice = Math.round(avgM2Price * obj.size);
    formattedObj.estimatedPricePercentageDifference = diffCalc(obj.price, avgM2Price * obj.size);
    return formattedObj;
  });
  return formattedData;
}

module.exports = algorithm;
