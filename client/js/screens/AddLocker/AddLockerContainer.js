import React, { Component } from "react";
import AddLocker from "./AddLocker";

export default class AddLockerContainer extends Component {
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
    return (
      <AddLocker
        state={{ ...this.state }}
        updateFilesToUpload={this.updateFilesToUpload}
        toggleModal={this.toggleModal}
        handleReviewRating={this.handleReviewRating}
        navigation={this.props.navigation}
      />
    );
  }
}
