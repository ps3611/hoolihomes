const fetch = require('node-fetch');
const getToken = require('./getToken');

module.exports = async () => {
  const accessToken = await getToken();

  const response = await fetch('https://api.idealista.com/3.5/es/search?operation=sale&propertyType=homes&center=40.123,-3.242&distance=100000', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const responseJson = await response.json();
  console.log(responseJson);
  return 1;
};
