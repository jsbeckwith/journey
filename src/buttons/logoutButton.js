import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import '../auth/auth.scss';

class LogoutButton extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Tooltip title="logout">
          <button className="logout-button auth-button journey-button" onClick={() => {alert('logout'); window.location = "http://localhost:3000/"}}>
            logout
          </button>
        </Tooltip>
    );
  }

}

export default LogoutButton;