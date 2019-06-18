import React, { Component } from "react";
import { Text } from "react-native";
import Profile from "./Profile";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const user = {
    //   firstName: "Andre",
    //   lastName: "Moura",
    //   city: "Vancouver",
    //   province: "BC",
    //   country: "Canada",
    //   bikeColor: "Red",
    //   bikeBrand: "Caloi",
    //   bikeType: "Mountain Bike"
    // };

    return (
      <Query
        query={USER_QUERY}
        variables={{ id: "cjwtisae10ech0103e84u962r" }}
        fetchPolicy="network-only"
      >
        {({ loading, error, data }) => {
          console.log("data", data);
          if (loading) return <Text>Loading...</Text>; // replace by Loader component
          if (error) return <p>{`Error! ${error.message}`}</p>;
          return <Profile user={data.User} />;
        }}
      </Query>
    );
  }
}

const USER_QUERY = gql`
  query User($id: ID) {
    User(id: $id) {
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
