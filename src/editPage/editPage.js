import React from 'react';
import './editPage.scss';
import TextEditor from '../textEditor.js';
import EditHeader from './editHeader.js';

class EditPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			textFromChild: ''
		}
	}
	
	// callback method; gets content from quill (child component)
	receiveText = (textFromQuill) => {
		this.setState({textFromChild: textFromQuill});
	} 

	render () {
		return (
			<div>
				<EditHeader todayDate={this.props.todayDate} id={this.props.id} qText={this.state.textFromChild}/>
				<TextEditor giveText={this.receiveText} textEditorType="new-entry-text-editor"/>
			</div>
		);
	}
}

export default EditPage;
