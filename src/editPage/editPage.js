import React from 'react';
import axios from 'axios';
import './editPage.scss';
import TextEditor from '../textEditor.js';
import EditHeader from './editHeader.js';

class EditPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
            textFromChild: '',
			id: this.props.match.params,
			textToEdit: ''
		}
	}
	
	// callback method; gets content from quill (child component)
	receiveText = (textFromQuill) => {
		this.setState({textFromChild: textFromQuill});
	}

	render () {
		console.log(this.state.textToEdit);
		return (
			<div>
				<EditHeader todayDate={this.props.todayDate} id={this.state.id} qText={this.state.textFromChild}/>
				<TextEditor editMode={true} editText={this.state.textToEdit} giveText={this.receiveText} textEditorType="new-entry-text-editor"/>
			</div>
		);
	}
}

export default EditPage;
