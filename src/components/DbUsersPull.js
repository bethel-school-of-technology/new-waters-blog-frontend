import React from "react";

import axios from "axios";

class UsersDbPull extends React.Component {
  state = {
    userData: [],
  };

  fetchUserData = () => {
    var encodedURI = window.encodeURI(this.props.uri);
    return axios.get(encodedURI).then((response) => {
      this.setState(() => {
        return {
          userData: response.data,
        };
      });
    });
  };

  componentDidMount() {
    this.fetchUserData();
  }

  render() {
    console.log(this.state.userData);
    if (this.state.userData.length === 0) {
      return <div>Failed to pull users from database</div>;
    }
    const users = this.state.userData.map((user) => (
      <div key={user.username}>
        <em>{user.username}</em>: {user.password}
      </div>
    ));
    return <div>{users}</div>;
  }
}

export default UsersDbPull;
