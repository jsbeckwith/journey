import React from 'react';
import logo from '../logo.svg';
import TextEditor from './textEditor.js'

class NewEntryPage extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<TextEditor/>
		);
	}
}

export default NewEntryPage;
