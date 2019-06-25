export function lockerAvgRating(locker) {
  const reviews = locker.reviews;
  const upToTen = reviews.slice(reviews.length - 10, reviews.length);
  const avgRating = upToTen.reduce((a, b) => a + b.rating, 0) / upToTen.length;
  return avgRating;
}
