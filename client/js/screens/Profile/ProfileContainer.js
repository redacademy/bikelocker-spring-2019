import React, { Component } from "react";
import Profile from "./Profile";
import { Query } from "react-apollo";
import gql from "graphql-tag";

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

const USER_QUERY = gql`
  query User($id: ID) {
    User(id: "cjwtisae10ech0103e84u962r") {
      profilePhoto {
        contentType
        id
        name
        secret
        size
        url
      }
      firstName
      lastName
      province
      country
      bikeColor
      bikeBrand
      bikeType
    }
  }
`;
