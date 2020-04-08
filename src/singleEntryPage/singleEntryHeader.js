import React from 'react';
import EditButton from '../buttons/editButton.js';
import DeleteButton from '../buttons/deleteButton.js';
import ToggleFriendButton from '../buttons/toggleFriendButton.js';

class SingleEntryHeader extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			entry: {},
			author: {},
		 	dateString: '',
		}
	}

	componentDidMount = () => {
		this.setState({entry: this.props.getPostByID(this.props.id)});
		this.setState({author: this.state.author = this.props.getUserByPostID(this.props.id)});
		this.setState({dateString: this.props.createDateString(this.state.entry.date)});
	}

	selfIsAuthor = () => {
		return (this.state.author == this.props.user);
	}

	/* this function determines whether this entry is editable
	* based on current date vs date of entry and if the user is self
	*/
	determineEdit = () => {
		let entryDate = new Date(this.state.entry.date);
		let nowDate = new Date();
		return (
			(entryDate.getDate() == nowDate.getDate())
			&& (entryDate.getMonth() == nowDate.getMonth())
			&& (entryDate.getFullYear() == nowDate.getFullYear())
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