import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import '../auth/auth.scss';

class LoginButton extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Tooltip title="login">
          <button className="login-button auth-button journey-button" onClick={() => {alert('login'); window.location = "http://localhost:3000/homepage"}}>
            login
          </button>
        </Tooltip>
    );
  }

}

export default LoginButton;