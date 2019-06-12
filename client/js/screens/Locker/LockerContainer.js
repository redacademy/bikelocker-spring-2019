import React, { Component } from "react";
import Locker from "./Locker";
// import { Query } from "react-apollo";
// import gql from "graphql-tag";

export default class LockerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return;
    //id variable will be passed in as prop later
    <Query
      query={GET_ONE_LOCKER_DATA}
      variables={{ id: "cjwti3c164ynu0112ym882o5l" }}
    >
      {({ loading, data }) => {
        if (loading || !data) return <Loader />;
        return <Locker street={data.address} />;
      }}
    </Query>;
  }
}

// const GET_ONE_LOCKER_DATA = gql`
//   query locker($id: ID!) {
//     locker(id: $id) {
//       id
//       address
//       latitude
//       longitude
//       reviews {
//         id
//         createdAt
//         review
//         rating
//         reviewer {
//           id
//           lastName
//           firstName
//           email
//         }
//         photos {
//           size
//           id
//           url
//         }
//       }
//     }
//   }
// `;
