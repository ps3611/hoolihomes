// API FETCH GOES HERE
const getToken = require('./getToken');

module.exports = async () => {
  const token = await getToken();
  console.log(token);
  return token;
};
