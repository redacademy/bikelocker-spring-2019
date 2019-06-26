import React, { Component } from "react";
import AddLocker from "./AddLocker";
import { API_KEY } from "react-native-dotenv";

export default class AddLockerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filesToUpload: [],
      reviewRating: null,
      isModalVisible: false,
      address: null
    };
  }
  setAddress = newAddress => {
    this.setState({ address: newAddress });
  };

  getAddress = async (latitude, longitude) => {
    await fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        latitude +
        "," +
        longitude +
        "&key=" +
        API_KEY
    )
      .then(response => response.json())
      .then(response => {
        this.setAddress({
          addressNumber: response.results[0].address_components[0].short_name,
          addressName: response.results[0].address_components[1].short_name
        });
      });
  };

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

  componentDidMount() {
    const latitude = this.props.navigation.state.params.coordinates.latitude;
    const longitude = this.props.navigation.state.params.coordinates.longitude;
    this.getAddress(latitude, longitude);
  }

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
