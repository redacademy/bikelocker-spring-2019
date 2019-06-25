import React, { Component } from "react";
import { Text } from "react-native";
import EditProfile from "./EditProfile";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";

export default class EditProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondTabActive: false
    };
  }

  toggleTab = () => {
    this.setState({ secondTabActive: !this.state.secondTabActive });
  };
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
            <EditProfile
              user={data.User}
              toggleTab={this.toggleTab}
              secondTabActive={this.state.secondTabActive}
              navigation={this.props.navigation}
            />
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
      firstName
      lastName
      age
      bikeType
      bikeBrand
      bikeColor
      addressOne
      addressTwo
      city
      province
      country
      postalCode
      email
      phone
    }
  }
`;
