import React from 'react';
import './newEntryPage.scss';
import TextEditor from './textEditor.js';
import NewEntryHeader from './newEntryHeader.js';

class NewEntryPage extends React.Component {
	constructor (props) {
		super(props);
	}

	/* this function determines whether the page is a completely new entry
	*  or if it is an edit of an entry made earlier that day
	*  based on if there is already an entry save for the current day.
	*  The page mode is then passed down to child components as a prop
	*/
	determineMode = () => {
		//? return 'edit' : return 'new';
	}

	render () {
		let pageMode = this.determineMode();

		return (
			<div>
				<NewEntryHeader date={this.props.date} mode={pageMode}/>
				<TextEditor mode={pageMode}/>
			</div>
		);
	}
}

export default NewEntryPage;
