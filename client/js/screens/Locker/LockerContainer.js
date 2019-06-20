import React, { Component } from "react";
import Locker from "./Locker";
import Loader from "../../components/Loader";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export default class LockerContainer extends Component {
  static navigationOptions = {
    title: "Locker"
  };
  render() {
    return (
      <Query
        query={GET_ONE_LOCKER_DATA}
        variables={{ id: this.props.navigation.getParam("locationID") }}
      >
        {({ loading, data }) => {
          if (loading || !data) return <Loader />;
          return <Locker lockerinfo={data.Locker} />;
        }}
      </Query>
    );
  }
}

const GET_ONE_LOCKER_DATA = gql`
  query Locker($id: ID!) {
    Locker(id: $id) {
      id
      address
      latitude
      longitude
      reviews {
        id
        createdAt
        review
        rating
        reviewer {
          id
          lastName
          firstName
          email
        }
        photos {
          size
          id
          url
        }
      }
    }
  }
`;
