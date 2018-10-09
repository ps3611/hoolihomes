const Home = require('./homesModel');
const connection = require('./db');

module.exports = async (homesList) => {
  // const dropResponse = await connection.collections.homes.drop();
  // console.log(dropResponse ? 'drop successful!' : 'drop error!');
  const insertManyResponse = await Home.insertMany(homesList);
  console.log(insertManyResponse.length > 0 ? 'insertMany successful!' : 'insertMany error!');
};
