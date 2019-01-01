const mongoose = require('mongoose');

const PASSWORD = 'RreU3bwMHb7tl83Z';
const CONNECTION_STRING = `mongodb://admin:${PASSWORD}@hoolihomes-shard-00-00-8fcwg.mongodb.net:27017,hoolihomes-shard-00-01-8fcwg.mongodb.net:27017,hoolihomes-shard-00-02-8fcwg.mongodb.net:27017/test?ssl=true&replicaSet=HooliHomes-shard-0&authSource=admin&retryWrites=true`;
// const CONNECTION_STRING = 'mongodb://localhost:27017/mth'

module.exports = mongoose.createConnection(
  CONNECTION_STRING,
  { useNewUrlParser: true },
  (err) => {
    if (err) console.log(err);
    else console.log('Connected to mth MongoDB with Mongoose!');
  }
);
