module.exports = () => {
  const { IDEALISTA_API_KEY, IDEALISTA_API_SECRET } = process.env;
  const endcodedKeySecret = Buffer.from(`${IDEALISTA_API_KEY}:${IDEALISTA_API_SECRET}`).toString('base64');
  console.log(IDEALISTA_API_KEY);
  console.log(IDEALISTA_API_SECRET);
  console.log(endcodedKeySecret);
  const token = 'toooken';
  return token;
};
