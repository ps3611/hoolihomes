const fetch = require('node-fetch');

module.exports = async () => {
  const { IDEALISTA_API_KEY, IDEALISTA_API_SECRET } = process.env;
  const endcodedKeySecret = Buffer.from(`${IDEALISTA_API_KEY}:${IDEALISTA_API_SECRET}`).toString('base64');

  const response = await fetch('https://api.idealista.com/oauth/token?grant_type=client_credentials', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${endcodedKeySecret}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  const responseJson = await response.json();
  return responseJson.access_token;
};
