import axios from 'axios';
import React from 'react';

import './singleEntryPage.scss';
import '../universalStyle.scss';
import EditButton from '../buttons/editButton.js';
import SingleEntryHeader from "./singleEntryHeader.js";

class SingleEntryPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			id: this.props.match.params,
			entry: []
		};
	}
	
	getStringID() {
		let jsonString = JSON.stringify(this.state.id);
		let shortString = jsonString.slice(7, 31);
		return shortString;
	}

	getPostByID = () => {
		let idString = this.getStringID();
		axios.get("http://localhost:4000/posts/" + idString)
			.then((response) => {
				console.log(response.data)
				this.setState({entry: response.data});
			})
			.catch( (error) => {
                console.log(error);
            });
	}

	componentDidMount = () => {
	    this.getPostByID();
	}

	render () {
		var entry = this.state.entry
		console.log(entry)
		return (
			<div>
				<SingleEntryHeader id={entry._id} date={entry.date} author={entry.author}/>
				<p class="text"> {entry.content} </p>
			</div>
		);
	}
}

export default SingleEntryPage;

