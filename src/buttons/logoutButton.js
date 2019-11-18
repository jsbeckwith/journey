import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class LogoutButton extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Tooltip title="logout">
        <button className="logout-button" onClick={() => {alert('logout'); window.location = "http://localhost:3000/"}}>
          logout
        </button>
      </Tooltip>
    );
  }

}

export default LogoutButton;