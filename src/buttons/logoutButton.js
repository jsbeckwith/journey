import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class LogoutButton extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Tooltip title="logout">
        <button className="logoutButton" onClick={() => {alert('logout'); window.location = "http://localhost:3000/"}}>
          Logout
        </button>
      </Tooltip>
    );
  }

}

export default LogoutButton;