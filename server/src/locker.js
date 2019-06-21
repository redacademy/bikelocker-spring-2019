const csvFilePath = "./BikeRackData.csv";
const csvToJSON = require("csvtojson");
const NodeGeocoder = require("node-geocoder");
require("dotenv").config();

const options = {
  provider: "google",
  httpAdapter: "https",
  apiKey: process.env.API_KEY,
  formatter: null
};

const geocoder = NodeGeocoder(options);

const csvToJSONObject = async () => {
  try {
    const convertedCsv = await csvToJSON().fromFile(csvFilePath);

    const randomSpots = [];
    for (let index = 0; index < 50; index++) {
      randomSpots.push(await convertedCsv[Math.floor(Math.random() * 1732)]);
    }

    const spots = randomSpots.map(async location => {
      let address;
      if (location && location["Street Name"] && location["Street Number"]) {
        address = `${location["Street Name"]} ${location["Street Number"]}`;
        if (address.includes(" St")) {
          address.replace(" St", " Street");
        }
        if (address.includes(" Av")) {
          address.replace(" Av", " Avenue");
        }

        try {
          const parkingSpot = await geocoder.geocode(
            address + ", Vancouver, BC, Canada"
          );
          return parkingSpot[0];
        } catch (error) {
          return error;
        }
      }
    });
    return { data: await Promise.all(spots) };
  } catch (error) {
    return error;
  }
};

// csvToJSONObject();

module.exports = csvToJSONObject;
