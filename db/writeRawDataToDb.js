const RawHome = require('../db/rawHomesModel');
const connection = require('./db');

module.exports = async (rawHomesList) => {
  console.log('---------writeRawDataToDb---------');
  const dropResponse = await connection.collections.rawhomes.drop();
  console.log(dropResponse ? 'drop successful!' : 'drop error!');
  const insertManyResponse = await RawHome.insertMany(rawHomesList);
  console.log(insertManyResponse.length > 0 ? 'insertMany successful!' : 'insertMany error!');
  // // Clean rawhomes db first
  // connection.collections.rawhomes.drop((err) => {
  //   if (err) console.log(err);
  //   else console.log('Rawhomes db dropped.');
  // });
  // // Write data to rawhomes db
  // RawHome.insertMany(rawHomesList, (err) => {
  //   if (err) console.log(err);
  //   else console.log(`${rawHomesList.length} RawHomes saved to Mongo!`);
  // });
};
