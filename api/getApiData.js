// API FETCH GOES HERE
const getToken = require('./getToken');

module.exports = () => {
  const token = getToken();
  return token;
};
