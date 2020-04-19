// libraries
import React from 'react';

// components
import EditButton from '../buttons/editButton.js';
import DeleteButton from '../buttons/deleteButton.js';
import ToggleFriendButton from '../buttons/toggleFriendButton.js';

// utils
import {createDateString, getPostByID, getUserByPostID} from '../utils.js';
import handleError from '../handleError';

class SingleEntryHeader extends React.Component {
	constructor (props) {
		super(props);
	}



	// componentWillMount(){
	// 	getData('positions').then((response) => {
	// 		console.log(response)
	// 	}).catch((error) => {
	// 		console.log(error)
	// 	})     
	//   }

	// componentWillMount() {
	// 	// getPostByID(this.props.id).then((response) => {
	// 	// 	this.setState({entry: response.data});
	// 	// 	}).catch((error) => {
	// 	// 	console.log(error);
	// 	// 	})
	// 	// console.log("ENTRY", this.props.entry);
		// let author = await getUserByPostID(this.props.id);
		// console.log("AUTHOR", author);

		// this.setState({entry: entry});
		// this.setState({author: author});
		//this.setState({dateString: createDateString(this.props.entry.date)});
	//}

	selfIsAuthor = () => {
		return (this.props.author === this.props.user);
	}

	/* this function determines whether this entry is editable
	* based on current date vs date of entry and if the user is self.
	* determines if edit button should render
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