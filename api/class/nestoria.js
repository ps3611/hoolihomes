const fetch = require('node-fetch');
const RawHome = require('../../db/model/rawHome');
const connection = require('../../db/db');

class NestoriaClient {
  constructor() {
    this.name = 'nestoria';
    this.endpoint = 'https://api.nestoria.es/api?encoding=json&pretty=1&action=search_listings&country=es&listing_type=buy&place_name=barcelona';
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
      processedObj.priceByArea = obj.price / obj.price;
      return processedObj;
    });
    return processedHomesArray;
  }

  async saveData(processedHomesArray) {
    const dropResponse = await connection.collections.rawhomes.drop();
    console.log(dropResponse ? 'drop successful!' : 'drop error!');
    const insertManyResponse = await RawHome.insertMany(processedHomesArray);
    console.log(insertManyResponse.length > 0 ? 'insertMany successful!' : 'insertMany error!');
  }
}

module.exports = NestoriaClient;
