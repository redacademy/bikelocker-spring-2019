// export default event => {
//   console.log(event.data);
//   const average =
//     event.data.reviews.reduce((a, b) => a.rating + b.rating, 0) /
//     event.data.reviews.length;

//   event.data.avgRating = average;

//   console.log(event.data);

//   return event;
// };

export default async event => {
  console.log(event);

  try {
    const graphcool = fromEvent(event);
    const api = graphcool.api("simple/v1");
    const lockerId = event.data.id;
    const avgRating = 5;
    //update
    const updateLocker = await updateLockerAvgRating(lockerId, avgRating);

    return event;
  } catch (e) {
    console.log(e);
    return { error: "An unexpected error. " };
  }
};

async function updateLockerAvgRating(id, avgRating) {
  const mutation = `
      mutation updateLocker($id: ID!, $avgRating: Int) {
        updateLocker(
          id: $id
          avgRating: $avgRating,
        ) {
          id
          avgRating
        }
      }
    `;

  const variables = {
    id: id,
    avgRating: avgRating
  };

  return api.request < { updateLocker: Locker } > (mutation, variables);
}
