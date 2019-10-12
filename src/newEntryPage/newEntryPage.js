import React from 'react';
import logo from '../logo.svg';
import './newEntryPage.scss';
import TextEditor from './textEditor.js';
import NewEntryHeader from './newEntryHeader.js';

class NewEntryPage extends React.Component {
	constructor (props) {
		super(props);
		// at some point this will have a prop that determines if the page is
		// editing an existing entry or making an entirely new one
		// which changes discard/delete and the title
	}

	render () {
		return (
			<div class="newEntry">
				<NewEntryHeader date={this.props.date}/>
				<TextEditor/>
			</div>
		);
	}
}

export default NewEntryPage;
