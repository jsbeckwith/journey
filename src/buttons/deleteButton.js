import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import axios from 'axios';

class DeleteButton extends React.Component {

  constructor(props) {
    super(props);
  }

  handleDiscard = () => {
    if (this.props.qText !== "") { // if the text editor is nonempty
      if (window.confirm("Are you sure you want to delete this entry? It cannot be recovered.")) {
        let thisPost = {
          "_id": this.props.id,
          "author": this.props.author,
          "date": this.props.date,
          "content": this.props.content,
          "__v": 0
        };
        let id = this.props.id;
        axios.delete("http://localhost:4000/posts/post" + id, thisPost);
        window.location = "/homepage"; // redirect to homepage
      }
    }
  }

  render() {

    return (
      <Tooltip title='delete'>
        <button className="delete-button journey-button header-button" onClick={() => this.handleDiscard()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path id="trash" className="cls-1" d="M1161,294v15a3,3,0,0,1-3,3h-12a3,3,0,0,1-3-3V294h-3a2,2,0,0,1,2-2h5v-2a2,2,0,0,1,2-2h6a2,2,0,0,1,2,2v2h5a2,2,0,0,1,2,2h-3Zm-6-4h-6v2h6v-2Zm-8,4h-2v16h14V294h-12Z" transform="translate(-1140 -288)"/>
          </svg>
        </button>
      </Tooltip>
    );
  }

}

export default DeleteButton;