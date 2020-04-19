// libraries
import React from 'react';
import axios from 'axios';

// components
import EditButton from '../buttons/editButton.js';
import DeleteButton from '../buttons/deleteButton.js';
import ToggleFriendButton from '../buttons/toggleFriendButton.js';

// utils
import { getStringID, createDateString } from '../utils.js';

class SingleEntryHeader extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			dateString: '',
		}
	}

	selfIsAuthor = () => {
		return (this.props.author === this.props.user);
	}

	/* this function determines whether this entry is editable (edit button should render)
	* based on current date vs date of entry and if the user is self.
	*/
	determineEdit = () => {
		let entryDate = new Date(this.props.entry.date);
		let nowDate = new Date();
		return (
			(entryDate.getDate() === nowDate.getDate())
			&& (entryDate.getMonth() === nowDate.getMonth())
			&& (entryDate.getFullYear() === nowDate.getFullYear())
			&& this.selfIsAuthor()
		);
	}

	render () {
		let renderEditButton = this.determineEdit()
			? <EditButton id={this.props.id}/>
			: null;
		let renderDeleteButton = this.selfIsAuthor()
			? <DeleteButton id={this.props.id}/>
			: null;
		let renderToggleFriendButton = !this.selfIsAuthor()
			? <ToggleFriendButton username={this.props.author.username}/>
			: null;
		
		return (
			<div className="page-header" id="single-entry-header">
				{renderToggleFriendButton}
				<h2 className="header-author">{this.props.author.username}</h2>
				<br/>
				<h3 className="header-date"> {this.props.dateString} </h3>
				<div className="header-button-container">
					{renderEditButton}
					{renderDeleteButton}
				</div>
			</div>
		)
	}
}

export default SingleEntryHeader;