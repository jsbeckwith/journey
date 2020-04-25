// libraries
import React from 'react';

// components
import EditButton from '../buttons/editButton.js';
import DeleteButton from '../buttons/deleteButton.js';
import ToggleFriendButton from '../buttons/toggleFriendButton.js';

class SingleEntryHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	selfIsAuthor = () => {
		return (this.props.author._id === this.props.user.id);
	}

	/* this function determines whether this entry is editable (edit button should render)
	* based on current date vs date of entry and if the user is self.
	*/
	determineEdit = () => {
		let entryDate = new Date(this.props.entry.date);
		let nowDate = new Date();
		let isSameDate = ((entryDate.getDate() === nowDate.getDate())
						&& (entryDate.getMonth() === nowDate.getMonth())
						&& (entryDate.getFullYear() === nowDate.getFullYear()));
		return (isSameDate && this.selfIsAuthor());
	}

	render () {
		let renderEditButton = this.determineEdit()
			? <EditButton id={this.props.id}/>
			: null;
		let renderDeleteButton = this.selfIsAuthor()
			? <DeleteButton id={this.props.id}/>
			: null;
		let renderToggleFriendButton = !this.selfIsAuthor()
			? <ToggleFriendButton username={this.props.author.username} tooltipPlacement={'bottom'}/>
			: null;
		
		return (
			<div className="page-header" id="single-entry-header">
				<h2 className="header-author">Entry by {this.props.author.username}</h2>
				<br/>
				<h3 className="header-date"> {this.props.dateString} </h3>
				<div className="header-button-container">
					{renderToggleFriendButton}
					{renderEditButton}
					{renderDeleteButton}
				</div>
			</div>
		)
	}
}

export default SingleEntryHeader;