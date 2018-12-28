const shuffleSeed = require('shuffle-seed');
const Home = require('../models/homeModel');
const {
  aggregator,
  createFilter,
  formatHomes,
  processQuery,
} = require('./helpers');

const homesPerPage = 20;

exports.getAllHomes = async (req, res) => {
  const queryObj = processQuery(req.query);
  let allHomes = await Home.find(createFilter(queryObj));
  allHomes = shuffleSeed.shuffle(allHomes, 'random_seed');
  const totalPages = Math.ceil(allHomes.length / homesPerPage);
  const page = (queryObj.page > 0 && queryObj.page <= totalPages) ? queryObj.page : 1;
  const responseHomes = allHomes.slice(homesPerPage * (page - 1), homesPerPage * page);
  const response = {
    centerLatitude: queryObj.centerLatitude,
    centerLongitude: queryObj.centerLongitude,
    radius: queryObj.radius,
    page,
    totalPages,
    totalResults: allHomes.length,
    minPrice: aggregator(allHomes, 'min', 'price'),
    avgPrice: aggregator(allHomes, 'avg', 'price'),
    maxPrice: aggregator(allHomes, 'max', 'price'),
    minSize: aggregator(allHomes, 'min', 'size'),
    avgSize: aggregator(allHomes, 'avg', 'size'),
    maxSize: aggregator(allHomes, 'max', 'size'),
    minM2Price: aggregator(allHomes, 'min', 'm2Price'),
    avgM2Price: aggregator(allHomes, 'avg', 'm2Price'),
    maxM2Price: aggregator(allHomes, 'max', 'm2Price'),
    homesList: formatHomes(responseHomes),
  };
  res.json(response);
};
