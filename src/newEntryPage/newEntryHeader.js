import React from 'react';
import SubmitSaveButton from '../buttons/submitSaveButton.js';
import DeleteButton from '../buttons/deleteButton.js';
import '../universalStyle.scss';

class NewEntryHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		let h2Text = '';
		let deleteTooltipText = '';
		if (this.props.mode == 'new') {
			h2Text = 'New Entry';
			deleteTooltipText = 'Discard';
		} else { // mode is edit
			h2Text = 'Edit Entry';
			deleteTooltipText = 'Delete';
		}

		return (
			<div className="new-entry-header">
				<h2>{h2Text}</h2>
                <br/>
                <h3>Today is {this.props.todayDate}</h3>
				<div className="header-button-container">
					<SubmitSaveButton/>
					{/* <DeleteButton deleteTooltipText={deleteTooltipText}/> something about having more than one button
					in this div causes a fatal error, so commenting out for now */}
				</div>
			</div>
		);
	}
}

export default NewEntryHeader;
