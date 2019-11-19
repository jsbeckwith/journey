import React from 'react';
import SubmitSaveButton from '../buttons/submitSaveButton.js';
import DeleteButton from '../buttons/deleteButton.js';
import '../universalStyle.scss';

class EditHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {

		return (
			<div className="page-header" id="edit-header">
				<h2>Edit Entry</h2>
                <br/>
				<div className="header-button-container">
					<SubmitSaveButton mode={false} id={this.props.id} qText={this.props.qText}/>
					<DeleteButton qText={this.props.qText}/>
				</div>
			</div>
		);
	}
}

export default EditHeader;
