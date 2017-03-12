"use strict";
import React, {
  Component,
  PropTypes
} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import UsersComponent from "../components/UsersComponent";
import * as accountActions from "../actions/account";
import * as logActions from "actions/log";
import * as loadingActions from "actions/loading";
// import {routerActions} from "react-router-redux";

class Users extends Component {
  render() {
    return <UsersComponent {...this.props}/>;
  }
}

Users.propTypes = {
  actions: PropTypes.shape({
    createAccount: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    editAccount: PropTypes.func.isRequired,
    fetchAccount: PropTypes.func.isRequired,
    log: PropTypes.object.isRequired,
    loading: PropTypes.object.isRequired
  }).isRequired,
  account: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = state;
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign(bindActionCreators(accountActions, dispatch), {
    log: bindActionCreators(logActions, dispatch),
    loading: bindActionCreators(loadingActions, dispatch)
  });
  return {actions};
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
