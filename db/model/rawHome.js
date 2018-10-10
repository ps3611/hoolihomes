const mongoose = require('mongoose');
const connection = require('../db');

const rawHomeSchema = new mongoose.Schema({
  propertyCode: {
    type: String,
    required: false,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  externalReference: {
    type: String,
    required: false,
  },
  numPhotos: {
    type: Number,
    required: false,
  },
  floor: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  propertyType: {
    type: String,
    required: false,
  },
  operation: {
    type: String,
    required: false,
  },
  size: {
    type: Number,
    required: true,
  },
  exterior: {
    type: Boolean,
    required: false,
  },
  rooms: {
    type: Number,
    required: false,
  },
  bathrooms: {
    type: Number,
    required: false,
  },
  province: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  municipality: {
    type: String,
    required: false,
  },
  district: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: true,
  },
  neighborhood: {
    type: String,
    required: false,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  showAddress: {
    type: Boolean,
    required: false,
  },
  url: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: false,
  },
  hasVideo: {
    type: Boolean,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  newDevelopment: {
    type: Boolean,
    required: false,
  },
  hasLift: {
    type: Boolean,
    required: false,
  },
  parkingSpace: {
    type: {
      hasParkingSpace: Boolean,
      isParkingSpaceIncludedInPrice: Boolean,
    },
    required: false,
  },
  priceByArea: {
    type: Number,
    required: true,
  },
  detailedType: {
    type: {
      typology: String,
      subTypology: String,
    },
    required: false,
  },
  suggestedTexts: {
    type: {
      subtitle: String,
      title: String,
    },
    required: false,
  },
  hasPlan: {
    type: Boolean,
    required: false,
  },
  has3DTour: {
    type: Boolean,
    required: false,
  },
  has360: {
    type: Boolean,
    required: false,
  },
});

module.exports = connection.model('rawHomes', rawHomeSchema);
