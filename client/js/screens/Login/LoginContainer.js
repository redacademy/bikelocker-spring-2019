import React, { Component } from "react";
import { Text } from "react-native";
import Login from "./Login";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Loader from "../../components/Loader";

class LoginContainer extends Component {
  render() {
    return (
      <Mutation mutation={AUTHENTICATE_USER}>
        {(signIn, { loading, error }) => {
          if (loading) return <Loader />;
          return (
            <Login navigation={this.props.navigation} authenticate={signIn} />
          );
        }}
      </Mutation>
    );
  }
}

const AUTHENTICATE_USER = gql`
  mutation signIn($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

export default LoginContainer;
