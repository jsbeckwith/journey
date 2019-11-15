import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class LoginButton extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Tooltip title="login">
        <button className="loginButton log-button" onClick={() => {alert('login'); window.location = "http://localhost:3000/homepage"}}>
          Login
        </button>
      </Tooltip>
    );
  }

}

export default LoginButton;