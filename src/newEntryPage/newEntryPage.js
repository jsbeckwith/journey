import React from 'react';
import logo from '../logo.svg';
import './newEntryPage.scss';
import TextEditor from './textEditor.js'
import SubmitSaveButton from './submitSaveButton.js'

class NewEntryPage extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div>
				<TextEditor/>
				<SubmitSaveButton/>
			</div>
		);
	}
}

export default NewEntryPage;
