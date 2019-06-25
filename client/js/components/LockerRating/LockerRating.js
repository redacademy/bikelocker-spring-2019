import React from "react";
import { Rating } from "react-native-ratings";
const LOCK_IMAGE = require("../../assets/images/ratinglockoutlinedtransparent.png");
<<<<<<< HEAD
import PropTypes from "prop-types";

const Loader = ({ handleReviewRating }) => {
=======
const Loader = ({ handleReviewRating, state }) => {
>>>>>>> develop
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

Loader.propTypes = {
  handleReviewRating: PropTypes.func
};
