import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

class CreateAccountButton extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Tooltip title="create account">
        <button className="createAccountButton" onClick={() => {alert('create account'); window.location = "http://localhost:3000/homepage"}}>
          Create Account
        </button>
      </Tooltip>
    );
  }

}

export default CreateAccountButton;