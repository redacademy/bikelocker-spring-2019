import React, { Component } from "react";
import AddReview from "./AddReview";

export default class AddReviewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filesToUpload: [],
      reviewRating: null,
      isModalVisible: false
    };
  }

  toggleModal = () => {
    if (this.state.isModalVisible === false) {
      this.setState({ isModalVisible: true });
    } else if (this.state.isModalVisible === true) {
      this.setState({ isModalVisible: false });
      this.props.navigation.navigate("FindLocker");
    }
  };

  updateFilesToUpload = file => {
    const filesToUpload = this.state.filesToUpload;
    filesToUpload.push(file);
    this.setState({ filesToUpload });
  };

  handleReviewRating = rating => {
    this.setState({ reviewRating: rating });
  };
  render() {
    const lockerId = this.props.navigation.state.params.lockerId;
    const street = this.props.navigation.state.params.street;
    return (
      <AddReview
        state={{ ...this.state }}
        updateFilesToUpload={this.updateFilesToUpload}
        toggleModal={this.toggleModal}
        handleReviewRating={this.handleReviewRating}
        navigation={this.props.navigation}
        lockerId={lockerId}
        street={street}
      />
    );
  }
}
