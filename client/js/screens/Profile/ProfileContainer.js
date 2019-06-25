import React, { Component } from "react";
import { Text } from "react-native";
import Profile from "./Profile";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";

export default class ProfileContainer extends Component {
  render() {
    return (
      <Query
        query={USER_QUERY}
        variables={{ id: "cjx2bg22z08h90166zqgy3ium" }}
        fetchPolicy="network-only"
      >
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>{`Error! ${error.message}`}</Text>;
          return (
            <Profile user={data.User} navigation={this.props.navigation} />
          );
        }}
      </Query>
    );
  }
}

const USER_QUERY = gql`
  query User($id: ID) {
    User(id: $id) {
      id
      profilePhoto {
        contentType
        id
        name
        secret
        size
        url
      }
      city
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
