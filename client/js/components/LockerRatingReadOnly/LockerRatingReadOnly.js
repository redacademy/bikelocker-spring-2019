import React from "react";
import { Rating } from "react-native-ratings";
const LOCK_IMAGE = require("../../assets/images/ratinglockoutlinedtransparent.png");
import PropTypes from "prop-types";

const LockerRating = ({ avgRating }) => {
  return (
    <Rating
      type="custom"
      ratingImage={LOCK_IMAGE}
      ratingColor="#FCAF17"
      ratingBackgroundColor="#DBDBDB"
      ratingCount={5}
      readonly={true}
      imageSize={25}
      startingValue={avgRating}
    />
  );
};

export default LockerRating;

LockerRating.propTypes = {
  avgRating: PropTypes.number
};
