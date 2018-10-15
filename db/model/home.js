const mongoose = require('mongoose');
const connection = require('../db');

const homeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  estimatedPrice: {
    type: Number,
    required: true,
  },
  estimatedPricePercentageDifference: {
    type: Number,
    required: true,
  },
  pricePerSquareMeter: {
    type: Number,
    required: true,
  },
}, {
  versionKey: false,
});

module.exports = connection.model('homes', homeSchema);
