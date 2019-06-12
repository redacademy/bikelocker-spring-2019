const csvFilePath = "./BikeRackData.csv";
const csvToJSON = require("csvtojson");

// have csv json, use new library, get 1 adress from csv,
//use new lib to conver to lat long, once u get, put in object of array, export that new funtion

// const NodeGeocoder = require("node-geocoder");

const csvToJSONObject = async () => {
  try {
    const convertedCsv = await csvToJSON().fromFile(csvFilePath);
    return convertedCsv;
  } catch (error) {
    return error;
  }
};

console.log(csvToJSONObject);



let options = {
  provider: "google",
  httpAdapter: "https",
  apiKey: "AIzaSyAzi7L69BENzi4MiAH4751HBwOPWtAJS0Q",
  formatter: null
};

// let geocoder = NodeGeocoder(options);

// geocoder
//   .geocode(`${streetNumber} ${streetName}`)
//   .then(function(res) {
//     console.log(res);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

module.exports = csvToJSONObject;
