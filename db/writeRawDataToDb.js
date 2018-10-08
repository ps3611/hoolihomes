const RawHome = require('../db/rawHomesModel');

module.exports = (rawHomesList) => {
  rawHomesList.forEach((rawHome) => {
    RawHome.create(rawHome, (err) => {
      if (err) console.log(err);
      else console.log('Raw Home saved to Mongo!');
    });
  });
};
