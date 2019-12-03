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


	// access id object from state and convert to string
	getStringID() {
		let jsonString = JSON.stringify(this.state.id);
		// extract id from JSON string
		let shortString = jsonString.slice(7, 31);
		return shortString;
	}

	// get specific post using string id
	getPostByID = () => {
		let idString = this.state.id;//this.getStringID();
		axios.get("http://localhost:4000/" + idString)
			.then((response) => {
				// set entry state to data received
				console.log(response.data.content);
				this.setState({textToEdit: response.data.content});
			})
			.catch( (error) => {
                console.log(error);
            });
	}

	// get post when page loads
	componentDidMount = () => {
		this.getPostByID();
		console.log(this.state.textToEdit);
	}
	

	render () {
		return (
			<div>
				<EditHeader todayDate={this.props.todayDate} id={this.state.id} qText={this.state.textFromChild}/>
				<TextEditor editMode={true} editText={this.state.textToEdit} giveText={this.receiveText} textEditorType="new-entry-text-editor"/>
			</div>
		);
	}
}

export default EditPage;
