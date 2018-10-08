const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/mth',
  { useNewUrlParser: true },
  () => console.log('Connected to mth MongoDB with Mongoose!')
);

const db = mongoose.connection;
db.on('error', err => console.log(err));

module.exports = db;
