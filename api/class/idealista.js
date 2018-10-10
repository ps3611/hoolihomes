const fetch = require('node-fetch');
const RawHome = require('../../db/model/rawHome');
const connection = require('../../db/db');

class IdealistaClient {
  constructor() {
    this.name = 'idealista';
    this.endpoint = 'https://api.idealista.com/3.5/es/search?operation=sale&propertyType=homes&center=40.123,-3.242&distance=100000';
    this.tokenEndpoint = 'https://api.idealista.com/oauth/token?grant_type=client_credentials';
  }

  async fetchData() {
    const accessToken = await this.getToken();
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const responseJson = await response.json();
    return responseJson.elementList;
  }

  processData(rawHomesArray) {
    const processedHomesArray = rawHomesArray.map((obj) => {
      const processedObj = {};
      processedObj.apiSource = this.name;
      processedObj.id = 1;
      processedObj.thumbnail = obj.thumbnail;
      processedObj.price = obj.price;
      processedObj.size = obj.size;
      processedObj.country = 'es';
      processedObj.latitude = obj.latitude;
      processedObj.longitude = obj.longitude;
      processedObj.url = obj.url;
      processedObj.priceByArea = obj.priceByArea;
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

  async fetchToken() {
    const { IDEALISTA_API_KEY, IDEALISTA_API_SECRET } = process.env;
    const endcodedKeySecret = Buffer.from(`${IDEALISTA_API_KEY}:${IDEALISTA_API_SECRET}`).toString('base64');
    const response = await fetch(this.tokenEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${endcodedKeySecret}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const responseJson = await response.json();
    return responseJson.access_token;
  }
}

module.exports = IdealistaClient;
