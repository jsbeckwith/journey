import axios from 'axios';
import React from 'react';

import './singleEntryPage.scss';
import '../universalStyle.scss';
import EditButton from '../buttons/editButton.js';
import DeleteButton from '../buttons/deleteButton.js'
import SingleEntryHeader from "./singleEntryHeader.js";

class SingleEntryPage extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			id: this.props.match.params, // post id
			entry: [] // initialize to empty list
		};
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
		let idString = this.getStringID();
		axios.get("http://localhost:4000/posts/" + idString)
			.then((response) => {
				// set entry state to data received
				this.setState({entry: response.data});
			})
			.catch( (error) => {
                console.log(error);
            });
	}

	// get post when page loads
	componentDidMount = () => {
	    this.getPostByID();
	}
	/* this function determines whether the page is a completely new entry
	*  or if it is an edit of an entry made earlier that day
	*  based on if there is already an entry save for the current day.
	*  The page mode is then passed down to child components as a prop
	*/
	determineEdit = () => {
		return this.props.entry.date == this.props.todayDate
	}

	render () {
		// variable storing retrieved entry
		var entry = this.state.entry
		return (
			<div>		
			    <SingleEntryHeader id={this.getStringID()} date={entry.date} author={entry.author}/>
				<div class="button-container">
					<EditButton id={this.props.id}/>
					<DeleteButton id={this.props.id}/>
				</div>
				<div class="text-box">
					<p class="text"> {entry.content} </p>
				</div>
			</div>
		);
	}
}

export default SingleEntryPage;

