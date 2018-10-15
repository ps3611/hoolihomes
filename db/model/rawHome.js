const mongoose = require('mongoose');
const connection = require('../db');

const rawHomeSchema = new mongoose.Schema({
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
  priceByArea: {
    type: Number,
    required: true,
  },
  propertyCode: {
    type: String,
    required: false,
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
  neighborhood: {
    type: String,
    required: false,
  },
  showAddress: {
    type: Boolean,
    required: false,
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
}, {
  versionKey: false,
});

module.exports = connection.model('rawHomes', rawHomeSchema);
