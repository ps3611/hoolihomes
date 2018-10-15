const fetch = require('node-fetch');
const ApiClient = require('./apiClient');
/* eslint-disable no-await-in-loop */

class NestoriaClient extends ApiClient {
  constructor() {
    super();
    this.name = 'nestoria';
    this.endpoint = 'https://api.nestoria.es/api';
  }

  async fetchData() {
    let fetchedData = [];
    const country = 'es';
    const city = 'barcelona';
    for (let page = 1; page <= 1; page += 1) {
      const url = `${this.endpoint}?encoding=json&action=search_listings&number_of_results=50&listing_type=buy&country=${country}&place_name=${city}&page=${page}`;
      const response = await fetch(url, {
        method: 'GET',
      });
      const responseJson = await response.json();
      fetchedData = fetchedData.concat(responseJson.response.listings);
    }
    return fetchedData;
  }

  processData(rawHomesArray) {
    const processedHomesArray = rawHomesArray.map((obj) => {
      // here we define id to be the nestoria image id.
      // thats the only unique id the API client gives us...
      const id = obj.img_url.substring(
        obj.img_url.lastIndexOf('_') + 1,
        obj.img_url.lastIndexOf('.jpg')
      );
      const processedObj = {};
      processedObj.apiSource = this.name;
      processedObj.id = id;
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
