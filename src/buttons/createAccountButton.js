import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import '../auth/auth.scss';
import '../universalStyle.scss';

class CreateAccountButton extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Tooltip title="create account">
        <button className="create-account-button auth-button journey-button" onClick={() => {alert('create account'); window.location = "http://localhost:3000/homepage"}}>
          create account
        </button>
      </Tooltip>
    );
  }

}

export default CreateAccountButton;