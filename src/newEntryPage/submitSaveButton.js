import React from 'react';
import logo from '../logo.svg';

class SubmitSaveButton extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <button className="submitSaveButton, journey-button" onClick={() => alert(Date())}>
        Submit
      </button>
      </div>
    );
  }

}

export default SubmitSaveButton;
