const RawHome = require('../../db/model/rawHome');

class ApiClient {
  fetchData() {}

  processData() {}

  async saveData(processedHomesArray) {
    await RawHome.insertMany(processedHomesArray);
  }
}

module.exports = ApiClient;
