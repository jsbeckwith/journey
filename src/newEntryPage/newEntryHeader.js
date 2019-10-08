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
                <h3>{this.props.date}</h3>
                <SubmitSaveButton txt = {this.props.qText}/>
			</div>
		);
	}
}

export default NewEntryHeader;
