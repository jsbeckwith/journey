import React from 'react';
import logo from '../logo.svg';
import './newEntryPage.scss';
import TextEditor from './textEditor.js'
import SubmitSaveButton from './submitSaveButton.js'
import axios from "axios";

class NewEntryPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			textFromChild: '',
			data: '',
		}
	}

	myCallback = (textFromQuill) => {
		this.setState({textFromChild: textFromQuill});
	}

	putDataToDB = message => {
	  /*let currentIds = this.state.data.map(data => data.id);
		let idToBeAdded = 0;
		while (currentIds.includes(idToBeAdded)) {
		  ++idToBeAdded;
	}*/

		axios.post("http://localhost:3001/api/putData", { 
		  //id: idToBeAdded,
		  message: message
		});
	}

	getDataFromDB = () => {
		fetch("http://localhost:3001/api/getData")
		.then(data => data.json())
		.then(res => this.setState({ data: res.data }));
	};

	render () {
		return (
			<div>
				{/* header component will go here */}
				<TextEditor callbackFromParent = {this.myCallback}/>
				<SubmitSaveButton qText = {this.state.textFromChild} store = {this.putDataToDB} get = {this.getDataFromDB}/>
			</div>
		);
	}
}

export default NewEntryPage;
