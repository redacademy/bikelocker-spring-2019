import React, { Component } from "react";
import Register from "./Register";
import Loader from "../../components/Loader";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

class RegisterContainer extends Component {
  render() {
    return (
      <Mutation mutation={REGISTER_USER}>
        {(register, { loading, error }) => {
          if (loading) return <Loader />;
          return (
            <Register
              register={register}
              navigation={this.props.navigation}
              error={error}
            />
          );
        }}
      </Mutation>
    );
  }
}

const REGISTER_USER = gql`
  mutation register($firstName: String!, $email: String!, $password: String!) {
    signupUser(firstName: $firstName, email: $email, password: $password) {
      id
      token
    }
  }
`;
export default RegisterContainer;
