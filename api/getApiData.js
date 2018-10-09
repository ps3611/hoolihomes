const fetch = require('node-fetch');
const getToken = require('./getToken');

module.exports = async () => {
  console.log('---------getApiData---------');
  const accessToken = await getToken();

  const operation = 'sale';
  const propertyType = 'homes';
  const center = '40.123,-3.242';
  const distance = '100000';
  const apiEndpoint = `https://api.idealista.com/3.5/es/search?operation=${operation}&propertyType=${propertyType}&center=${center}&distance=${distance}`;

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const responseJson = await response.json();
  return responseJson.elementList;
};
