// libraries
import React from 'react';

// components
import EditButton from '../buttons/editButton.js';
import DeleteButton from '../buttons/deleteButton.js';
import ToggleFriendButton from '../buttons/toggleFriendButton.js';

// utils
import {createDateString, getPostByID, getUserByPostID} from '../utils.js';

class SingleEntryHeader extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			entry: {},
			author: {},
		 	dateString: '',
		}
	}

	async componentDidMount() {
		let entry = await getPostByID(this.props.id);
		console.log("ENTRY", entry);
		let author = await getUserByPostID(this.props.id);
		console.log("AUTHOR", author);

		this.setState({entry: entry});
		this.setState({author: author});
		//this.setState({dateString: createDateString(this.state.entry.date)});
	}

	selfIsAuthor = () => {
		return (this.state.author === this.props.user);
	}

	/* this function determines whether this entry is editable
	* based on current date vs date of entry and if the user is self
	*/
	determineEdit = () => {
		let entryDate = new Date(this.state.entry.date);
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
			? <ToggleFriendButton username={this.state.author.username}/>
			: null;
		
		return (
			<div className="page-header" id="single-entry-header">
				{renderToggleFriendButton}
				<h2 className="header-author">{this.state.author.username}</h2>
				<br/>
				<h3 className="header-date"> {this.state.dateString} </h3>
				<div className="header-button-container">
					{renderEditButton}
					{renderDeleteButton}
				</div>
			</div>
		)
	}
}

export default SingleEntryHeader;