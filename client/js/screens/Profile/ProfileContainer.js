import React, { Component } from "react";
import Profile from "./Profile";

export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const user = {
      profilePhoto:
        "https://media.licdn.com/dms/image/C4D03AQG0CbPDCBhKnQ/profile-displayphoto-shrink_200_200/0?e=1565827200&v=beta&t=Kt7MkNKHuqW-xyr6LBXxOrYArdO1DkZVtXNRVpwrzWQs",
      firstName: "Andre",
      lastName: "Moura"
    };

    return <Profile user={user} />;
  }
}
