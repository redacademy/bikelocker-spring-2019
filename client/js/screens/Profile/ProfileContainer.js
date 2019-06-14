import React, { Component } from "react";
import Profile from "./Profile";

export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const user = {
      firstName: "Andre",
      lastName: "Moura",
      city: "Vancouver",
      province: "BC",
      country: "Canada",
      bikeColor: "Red",
      bikeBrand: "Caloi",
      bikeType: "Mountain Bike"
    };

    return <Profile user={user} />;
  }
}
