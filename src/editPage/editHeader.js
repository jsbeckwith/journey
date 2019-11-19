import React from 'react';
import SubmitSaveButton from '../buttons/submitSaveButton.js';
import DeleteButton from '../buttons/deleteButton.js';
import '../universalStyle.scss';

class EditHeader extends React.Component {
	constructor (props) {
        super(props);
        this.state = {
			id: this.props.id // post id
		};
	}

    getStringID() {
		let jsonString = JSON.stringify(this.state.id);
		// extract id from JSON string
		let shortString = jsonString.slice(7, 31);
		return shortString;
    }
    
	render () {
        var stringID = this.getStringID();
		return (
			<div className="page-header" id="edit-header">
				<h2>Edit Entry</h2>
                <br/>
				<div className="header-button-container">
					<SubmitSaveButton mode={false} id={stringID} qText={this.props.qText}/>
					<DeleteButton qText={this.props.qText}/>
				</div>
			</div>
		);
	}
}

export default EditHeader;
