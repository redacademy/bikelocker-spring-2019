const { fromEvent } = require("graphcool-lib");

module.exports = event => {
  //   const average =
  //     event.data.reviews.reduce((a, b) => a.rating + b.rating, 0) /
  //     event.data.reviews.length;
  console.log(event);
  const lockerId = event.data.id;
  const avgRating = 3;

  // Create Graphcool API (based on https://github.com/graphcool/graphql-request)
  const graphcool = fromEvent(event);
  const api = graphcool.api("simple/v1");

  // Create variables for mutation
  const variables = { id: lockerId, avgRating: avgRating };

  // Create mutation
  const updateLockerMutation = `
    mutation locker($id: ID!, $avgRating: Int) {
      updateLocker(id: $id, avgRating: $avgRating) {
        id
        avgRating
      }
    }
  `;

  // Send mutation with variables
  return api.request(updateLockerMutation, variables);
};
