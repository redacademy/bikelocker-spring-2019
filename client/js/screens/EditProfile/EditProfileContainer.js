import React, { Component } from "react";
import { Text, View } from "react-native";
import EditProfile from "./EditProfile";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";

export default class EditProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchTab: false
    };
  }

  toggleTab = () => {
    this.setState({ switchTab: !this.state.switchTab });
  };

  render() {
    return (
      <Query
        query={USER_QUERY}
        variables={{ id: "cjx2bg22z08h90166zqgy3ium" }}
        fetchPolicy="network-only"
      >
        {({ loading, error, data }) => {
          if (loading) return <Loader />; // replace by Loader component
          if (error) return <Text>{`Error! ${error.message}`}</Text>;
          //   return <View />;
          return <EditProfile user={data.User} toggleTab={this.toggleTab} />;
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
