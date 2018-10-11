const RawHome = require('./model/rawHome');

module.exports = async () => {
  const findResponse = await RawHome.find({});
  return findResponse;
};
