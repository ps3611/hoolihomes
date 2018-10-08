const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  propertyCode: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  externalReference: {
    type: String,
    required: true,
  },
  numPhotos: {
    type: Number,
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  propertyType: {
    type: String,
    required: true,
  },
  operation: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  exterior: {
    type: Boolean,
    required: true,
  },
  rooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  municipality: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  neighborhood: {
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
  showAddress: {
    type: Boolean,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  hasVideo: {
    type: Boolean,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  newDevelopment: {
    type: Boolean,
    required: true,
  },
  hasLift: {
    type: Boolean,
    required: true,
  },
  xxxx: {
    type: String,
    required: true,
  },
  parkingSpace: {
    type: {
      hasParkingSpace: Boolean,
      isParkingSpaceIncludedInPrice: Boolean,
    },
    required: true,
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
    required: true,
  },
  suggestedTexts: {
    type: {
      subtitle: String,
      title: String,
    },
    required: true,
  },
  hasPlan: {
    type: Boolean,
    required: true,
  },
  has3DTour: {
    type: Boolean,
    required: true,
  },
  has360: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('homes', homeSchema);
