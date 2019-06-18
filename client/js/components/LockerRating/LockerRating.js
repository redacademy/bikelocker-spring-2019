import React from "react";
import { Rating, AirbnbRating } from "react-native-ratings";
const LOCK_IMAGE = require("../../assets/images/ratinglockoutlinedtransparent@2x.png");
const Loader = ({ handleReviewRating }) => {
  return (
    <Rating
      type="custom"
      ratingImage={LOCK_IMAGE}
      ratingColor="#FCAF17"
      ratingBackgroundColor="#DBDBDB"
      ratingCount={5}
      imageSize={50}
      startingValue={0}
      onFinishRating={rating => handleReviewRating(rating)}
    />
  );
};

export default Loader;
