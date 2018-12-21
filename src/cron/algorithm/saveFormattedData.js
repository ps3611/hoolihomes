const connection = require('../db/db');
const Home = require('../db/model/home');

const saveFormattedData = async (formattedHomesArray) => {
  try {
    const rawhomes = await connection.collections.rawhomes.find({}).toArray();
    const rawhomesId = new Set(rawhomes.map(obj => obj.id));
    await connection.collections.rawhomes.drop();

    const homes = await connection.collections.homes.find({}).toArray();
    const homesId = new Set(homes.map(obj => obj.id));

    // ADD
    const addIds = [...rawhomesId].filter(id => !homesId.has(id));
    const homesToAdd = formattedHomesArray.filter(home => addIds.includes(home.id));
    await Home.insertMany(homesToAdd);
    // UPDATE
    const updateIds = [...homesId].filter(id => rawhomesId.has(id));
    const homesToUpdate = formattedHomesArray.filter(home => updateIds.includes(home.id));
    await Home.updateMany({ id: { $in: updateIds } }, homesToUpdate);
    // DELETE
    const deleteIds = [...homesId].filter(id => !rawhomesId.has(id));
    await Home.deleteMany({ id: { $in: deleteIds } });
  }
  catch (err) {
    console.log('Shutdown ERROR', err);
  }
};

module.exports = saveFormattedData;
