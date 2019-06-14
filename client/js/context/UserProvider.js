import { Query } from "react-apollo";
import React from "react";
import PropTypes from "prop-types";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  return (
    <Query query={USER_QUERY}>
      {({ data, error, loading }) => {
        const user = data && data.user ? data.user : null;
        return (
          <UserContext.Provider value={{ user, loading }}>
            {children}
          </UserContext.Provider>
        );
      }}
    </Query>
  );
};

ViewerProvider.propTypes = {
  children: PropTypes.object.isRequired
};

const USER_QUERY = gql`
  query User($id: ID) {
    User(id: "cjwtisae10ech0103e84u962r") {
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
