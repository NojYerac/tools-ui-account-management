import React, {PropTypes, Component} from "react";

export default class UserComponent extends Component {
  render() {
    return (
      <div className="user"/>
    );
  }
}

UserComponent.displayName = "User";

UserComponent.propTypes = {};
