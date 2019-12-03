import React from 'react';
import './newEntryPage.scss';
import TextEditor from '../textEditor.js';
import NewEntryHeader from './newEntryHeader.js';

class NewEntryPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			textFromChild: '',
		}
	}
	
	// callback method; gets content from quill (child component)
	receiveText = (textFromQuill) => {
		this.setState({textFromChild: textFromQuill});
	} 

	render () {
		return (
			<div>
				<NewEntryHeader editText="" todayDate={this.props.todayDate} qText={this.state.textFromChild}/>
				<TextEditor editMode={false} giveText={this.receiveText} textEditorType="new-entry-text-editor"/>
			</div>
		);
	}
}

export default NewEntryPage;
