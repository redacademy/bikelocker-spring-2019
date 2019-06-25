import React, { createContext, Component } from "react";

const GooglePlaceContext = createContext();

class GooglePlaceProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null
    };
  }

  updateLocation = location => {
    this.setState({ location });
  };

  render() {
    return (
      <GooglePlaceContext.Provider
        value={{
          location: this.state.location,
          updateLocation: this.updateLocation
        }}
      >
        {this.props.children}
      </GooglePlaceContext.Provider>
    );
  }
}

export { GooglePlaceProvider };
export default GooglePlaceContext;
