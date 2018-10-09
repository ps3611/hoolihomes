const RawHome = require('./rawHomesModel');
const connection = require('./db');

module.exports = async (rawHomesList) => {
  const dropResponse = await connection.collections.rawhomes.drop();
  console.log(dropResponse ? 'drop successful!' : 'drop error!');
  const insertManyResponse = await RawHome.insertMany(rawHomesList);
  console.log(insertManyResponse.length > 0 ? 'insertMany successful!' : 'insertMany error!');
};
