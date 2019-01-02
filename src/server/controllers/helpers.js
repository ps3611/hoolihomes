module.exports.createFilter = function createFilter(queryObj) {
  const {
    country,
    city,
    price,
    size,
    m2Price,
    centerLongitude,
    centerLatitude,
    radius,
  } = queryObj;
  const filter = {};
  if (city) filter.city = city;
  if (country) filter.country = country;
  if (radius && centerLongitude && centerLatitude) {
    filter.loc = {
      $near: {
        $geometry: { type: 'Point', coordinates: [centerLongitude, centerLatitude] },
        $minDistance: 0,
        $maxDistance: radius,
      },
    };
  }
  if (price) filter.price = { $gte: price[0], $lte: price[1] };
  if (size) filter.size = { $gte: size[0], $lte: size[1] };
  if (m2Price) {
    filter.m2Price = {
      $gte: m2Price[0],
      $lte: m2Price[1],
    };
  }
  return filter;
};

module.exports.formatHomes = function formatHomes(homesArray) {
  return homesArray.map((obj) => {
    const formattedObj = {};
    formattedObj.thumbnail = obj.thumbnail;
    formattedObj.price = obj.price;
    formattedObj.size = obj.size;
    formattedObj.country = obj.country;
    formattedObj.city = obj.city;
    formattedObj.title = obj.title;
    formattedObj.longitude = obj.loc.coordinates[0];
    formattedObj.latitude = obj.loc.coordinates[1];
    formattedObj.url = obj.url;
    formattedObj.m2Price = obj.m2Price;
    formattedObj.estimatedPrice = obj.estimatedPrice;
    formattedObj.estimatedPricePercentageDifference = obj.estimatedPricePercentageDifference;
    return formattedObj;
  });
};

module.exports.processQuery = function processQuery(queryObj) {
  const processedObj = {};
  processedObj.price = queryObj.price.map(string => parseInt(string, 10));
  processedObj.m2Price = queryObj.m2Price.map(string => parseInt(string, 10));
  processedObj.size = queryObj.size.map(string => parseInt(string, 10));
  processedObj.page = parseInt(queryObj.page, 10);
  processedObj.centerLongitude = parseFloat(queryObj.centerLongitude, 10);
  processedObj.centerLatitude = parseFloat(queryObj.centerLatitude, 10);
  processedObj.radius = parseInt(queryObj.radius, 10);
  return processedObj;
};

module.exports.aggregator = function aggregator(homesArray, calcType, field) {
  if (homesArray.length === 0) return 0;
  const newArray = homesArray.map(home => home[field]);
  if (calcType === 'avg') return Math.round(newArray.reduce((a, b) => a + b) / newArray.length);
  else if (calcType === 'min') return Math.min(...newArray);
  else if (calcType === 'max') return Math.max(...newArray);
  return 0;
};
