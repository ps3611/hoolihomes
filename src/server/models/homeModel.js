const mongoose = require('mongoose');
const connection = require('./db');

const homeSchema = new mongoose.Schema({
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
  city: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  loc: {
    type: { type: String },
    coordinates: [Number],
  },
  url: {
    type: String,
    required: true,
  },
  m2Price: {
    type: Number,
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
});

module.exports = connection.model('homes', homeSchema);
