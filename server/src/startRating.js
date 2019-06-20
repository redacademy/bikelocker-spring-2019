// console.log("heyo");
// updateOrCreateReview(update: UpdateReview!, create: CreateReview!): Review
export default event => {
  console.log(event.data);
  event.data.avgRating = 1;

  return event;
};
