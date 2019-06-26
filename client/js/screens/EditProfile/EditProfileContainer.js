import React, { Component } from "react";
import { Text, View } from "react-native";
import EditProfile from "./EditProfile";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";
import { getUserId } from "../../config/models";

export default class EditProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondTabActive: false,
      userId: ""
    };
  }

  componentDidMount = async () => {
    try {
      const userId = await getUserId();
      this.setState({ userId });
    } catch (e) {
      console.log(e);
    }
  };

  toggleTab = () => {
    this.setState({ secondTabActive: !this.state.secondTabActive });
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
    else return <Loader />;
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
