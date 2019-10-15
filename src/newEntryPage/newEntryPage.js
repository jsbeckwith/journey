import React from 'react';
import './newEntryPage.scss';
import TextEditor from './textEditor.js'
import NewEntryHeader from './newEntryHeader.js';

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
				<NewEntryHeader date={this.props.date} qText={this.state.textFromChild}/>
				<TextEditor giveText={this.receiveText}/>
			</div>
		);
	}
}

export default NewEntryPage;
