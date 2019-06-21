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
    this.setState({ isModalVisible: !this.state.isModalVisible });
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
      />
    );
  }
}
