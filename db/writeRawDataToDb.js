const RawHome = require('../db/rawHomesModel');
const connection = require('./db');

module.exports = (rawHomesList) => {
  // Clean rawhomes db first
  connection.collections.rawhomes.drop((err) => {
    if (err) console.log(err);
    else console.log('Rawhomes db dropped.');
  });
  // Write data to rawhomes db
  RawHome.insertMany(rawHomesList, (err) => {
    if (err) console.log(err);
    else console.log(`${rawHomesList.length} RawHomes saved to Mongo!`);
  });
};
