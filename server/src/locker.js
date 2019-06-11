const csv = require("csvtojson");
const csvFilePath = "./BikeRackData.csv";

csv()
  .fromFile(csvFilePath)
  .then(jsonObj => {
    console.log(jsonObj);
  });

// export default async event => {
//   await new Promise(r => setTimeout(r, 50));

//   return {
//     data: {
//       message: `Hello ${event.data.name || "World"}`
//     }
//   };
// };
