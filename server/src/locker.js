const csvFilePath = "./BikeRackData.csv";
const csvToJSON = require("csvtojson");

const csvToJSONObject = async () => {
  try {
    return await csvToJSON().fromFile(csvFilePath);
  } catch (error) {
    return error;
  }
};

module.exports = csvToJSONObject;
