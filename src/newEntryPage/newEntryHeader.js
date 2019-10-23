import React from 'react';
import SubmitSaveButton from '../buttons/submitSaveButton.js';
import DeleteButton from '../buttons/deleteButton.js';
import '../universalStyle.scss';

class NewEntryHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {

		return (
			<div className="new-entry-header">
				<h2>New Entry</h2>
                <br/>
                <h3>Today is {this.props.todayDate}</h3>
				<div className="header-button-container">
					<SubmitSaveButton/>
					<DeleteButton/>
				</div>
			</div>
		);
	}
}

export default NewEntryHeader;
