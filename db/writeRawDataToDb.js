const RawHome = require('../db/rawHomesModel');

module.exports = (rawHomesList) => {
  RawHome.insertMany(rawHomesList, (err) => {
    if (err) console.log(err);
    else console.log(`${rawHomesList.length} RawHomes saved to Mongo!`);
  });
};
