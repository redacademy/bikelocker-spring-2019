const csvFilePath = "./BikeRackData.csv";
const csvToJSON = require("csvtojson");
const NodeGeocoder = require("node-geocoder");

// have csv json, use new library, get 1 adress from csv,
//use new lib to conver to lat long, once u get, put in array of object, export that new funtion

let options = {
  provider: "google",
  httpAdapter: "https",
  apiKey: "AIzaSyAzi7L69BENzi4MiAH4751HBwOPWtAJS0Q",
  formatter: null
};

let geocoder = NodeGeocoder(options);

const csvToJSONObject = async () => {
  try {
    const convertedCsv = await csvToJSON().fromFile(csvFilePath);

    const randomSpots = [];
    for (let index = 0; index < 50; index++) {
      randomSpots.push(await convertedCsv[Math.floor(Math.random() * 1732)]);
    }

    randomSpots.map(async location => {
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
          console.log("RESPONSE", parkingSpot);
        } catch (e) {
          console.log(e.message);
        }
      }
    });
  } catch (error) {
    return error;
  }
};

module.exports = csvToJSONObject;
