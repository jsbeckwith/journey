import React from 'react';
import logo from '../logo.svg';
import './newEntryPage.scss';
import TextEditor from './textEditor.js'
import SubmitSaveButton from './submitSaveButton.js'
import NewEntryHeader from './newEntryHeader.js';
import axios from "axios";

class NewEntryPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			textFromChild: ''
		}
	}

	receiveText = (textFromQuill) => {
		this.setState({textFromChild: textFromQuill});
	} 

	render () {
		return (
			<div>
				<NewEntryHeader date={this.props.date} qText = {this.state.textFromChild}/>
				<TextEditor giveText = {this.receiveText}/>
			</div>
		);
	}
}

export default NewEntryPage;
