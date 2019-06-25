import React, { Component } from "react";
import { Text } from "react-native";
import Profile from "./Profile";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";
import { getUserId } from "../../config/models";

export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: "" };
  }
  componentDidMount = async () => {
    try {
      const userId = await getUserId();
      this.setState({ userId });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    if (this.state.userId)
      return (
        <Query
          query={USER_QUERY}
          variables={{ id: this.state.userId }}
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
    else return <Loader />;
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
