const fetch = require('node-fetch');
const ApiClient = require('./apiClient');

class NestoriaClient extends ApiClient {
  constructor() {
    super();
    this.name = 'nestoria';
    this.endpoint = 'https://api.nestoria.es/api?encoding=json&action=search_listings&country=es&listing_type=buy&place_name=barcelona';
  }

  async fetchData() {
    const response = await fetch(this.endpoint, {
      method: 'GET',
    });
    const responseJson = await response.json();
    return responseJson.response.listings;
  }

  processData(rawHomesArray) {
    const processedHomesArray = rawHomesArray.map((obj) => {
      const processedObj = {};
      processedObj.apiSource = this.name;
      processedObj.id = 1;
      processedObj.thumbnail = obj.img_url;
      processedObj.price = obj.price;
      processedObj.size = obj.size;
      processedObj.country = 'es';
      processedObj.latitude = obj.latitude;
      processedObj.longitude = obj.longitude;
      processedObj.url = obj.lister_url;
      processedObj.priceByArea = obj.price / obj.size;
      return processedObj;
    });
    return processedHomesArray;
  }
}

module.exports = NestoriaClient;
