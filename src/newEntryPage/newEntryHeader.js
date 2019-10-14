import React from 'react';
import SubmitSaveButton from './submitSaveButton.js'

class NewEntryHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
    console.log("date:", this.props);

		return (
			<div className="new-entry-header">
				<h2>New Entry</h2>
                <br/>
                <h3>Today is {this.props.todayDate}</h3>
                <SubmitSaveButton/>
			</div>
		);
	}
}

export default NewEntryHeader;
