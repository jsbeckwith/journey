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
			<div className="page-header" id="new-entry-header">
				<h2>New Entry</h2>
                <br/>
                <h3>Today is {this.props.todayDate}.</h3>
				<div className="header-button-container">
					<SubmitSaveButton mode={true} id={0} qText={this.props.qText}/>
					<DeleteButton qText={this.props.qText}/>
				</div>
			</div>
		);
	}
}

export default NewEntryHeader;
