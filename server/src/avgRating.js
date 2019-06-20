import { fromEvent } from "graphcool-lib";

export default async event => {
  console.log(event);

  try {
    //Create Graphcool API (based on https://github.com/graphcool/graphql-request)
    const graphcool = fromEvent(event);
    const api = graphcool.api("simple/v1");

    const lockerId = event.data.id;
    // const avgRating = await getAvgRating(api, lockerId);

    //dummy avgRating to test mutation
    const avgRating = 5;

    const updatedLocker = await updateLocker(api, lockerId, avgRating);

    return event;
  } catch (e) {
    console.log(e);
    return { error: e };
  }
};

async function getAvgRating(api, id) {
  const queryLockerReviews = `
    query Locker ($id:ID!){
     Locker(id:$id) {
         reviews{
         rating
         }
      }
     }
   `;

  const variables = {
    id
  };

  //will implement only getting 10 later
  return api
    .request(queryLockerReviews, variables)
    .then(
      result => result.reduce((a, b) => a.rating + b.rating, 0) / result.length
    );
}

async function updateLocker(api, id, avgRating) {
  // Create mutation
  const updateLockerMutation = `
  mutation locker($id: ID!, $avgRating: Int) {
    updateLocker(id: $id, avgRating: $avgRating) {
      id
      avgRating
    }
  }
`;

  const variables = { id, avgRating };
  return api.request(updateLockerMutation, variables);
}
