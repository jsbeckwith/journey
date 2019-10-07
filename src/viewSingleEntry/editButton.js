import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import logo from '../logo.svg';

class EditButton extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Tooltip title="edit entry">
        <button className="editButton, journey-button" onClick={() => alert('let\'s edit baby!!')}>
          Edit Entry
          </button>
      </Tooltip>
    );
  }

}

export default EditButton;
