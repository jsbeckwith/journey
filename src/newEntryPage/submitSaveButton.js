import React from 'react';
import logo from '../logo.svg';

class SubmitSaveButton extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button className="submitSaveButton" onClick={() => alert('click')}>
        Submit
      </button>
    );
  }

}

export default SubmitSaveButton;
