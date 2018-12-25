const fetch = require('node-fetch');
const ApiClient = require('./apiClient');
const { nestoriaParams } = require('./params.json');
/* eslint-disable no-await-in-loop */

class NestoriaClient extends ApiClient {
  constructor() {
    super();
    this.name = 'nestoria';
    this.params = nestoriaParams;
  }

  async fetchData(paramObj) {
    let fetchedData = [];
    const { city, country } = paramObj;
    for (let page = 1; page <= 5; page += 1) {
      const url = `https://api.nestoria.${country}/api?encoding=json&action=search_listings&number_of_results=50&listing_type=buy&country=${country}&place_name=${city}&page=${page}`;
      const response = await fetch(url, {
        method: 'GET',
      });
      const responseJson = await response.json();
      fetchedData = fetchedData.concat(responseJson.response.listings);
    }
    return fetchedData;
  }

  processData(rawHomesArray, paramObj) {
    const { country, city } = paramObj;
    const altObj = {
      img_url: 'no img_url',
      title: 'no title',
      price: 0,
      size: 1,
      latitude: 0,
      longitude: 0,
      lister_url: 'no lister_url',
      id: 'no_id',
    };
    const processedHomesArray = rawHomesArray.map((obj) => {
      // here we define id to be the nestoria image id.
      const id = obj.img_url.substring(
        obj.img_url.lastIndexOf('_') + 1,
        obj.img_url.lastIndexOf('.jpg')
      );
      const processedObj = {};
      processedObj.country = country;
      processedObj.city = city;
      processedObj.apiSource = this.name;
      processedObj.id = obj.img_url ? id : altObj.id;
      processedObj.thumbnail = obj.img_url ? obj.img_url : altObj.img_url;
      processedObj.title = obj.title ? obj.title : altObj.title;
      processedObj.price = obj.price ? obj.price : altObj.price;
      processedObj.size = obj.size ? obj.size : altObj.size;
      processedObj.latitude = obj.latitude ? obj.latitude : altObj.latitude;
      processedObj.longitude = obj.longitude ? obj.longitude : altObj.longitude;
      processedObj.url = obj.lister_url ? obj.lister_url : altObj.lister_urlq;
      processedObj.priceByArea = processedObj.price / processedObj.size;
      return processedObj;
    });
    return processedHomesArray;
  }
}

module.exports = NestoriaClient;
