import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class LogoutButton extends React.Component {

  constructor(props) {
    super(props)
  }

  onClick = e => {
    //e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <Tooltip title="logout">
        <button className="logout-button" onClick={() => {this.onClick(); alert('You have successfully logged out. Come back soon!'); window.location = "http://localhost:3000/"}}>
          logout
        </button>
      </Tooltip>
    );
  }

}

LogoutButton.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(LogoutButton);