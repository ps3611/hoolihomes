const RawHome = require('./rawHomesModel');

module.exports = async () => {
  const findResponse = await RawHome.find({});
  return findResponse;
};
