import React from 'react';
import logo from '../logo.svg';

class EditButton extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button className="editButton" onClick={() => alert('let\'s edit!!')}>
        Edit Entry
      </button>
    );
  }

}

export default EditButton;
