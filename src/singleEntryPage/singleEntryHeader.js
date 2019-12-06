import React from 'react';
import EditButton from '../buttons/editButton.js';
import DeleteButton from '../buttons/deleteButton.js';
import ToggleFriendButton from '../buttons/toggleFriendButton.js';

class SingleEntryHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	createShortDate(entryDate) {
		let inputDate = new Date(entryDate);
		const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		const months = ["January", "February", "March", "April", "May", "June",
  						"July", "August", "September", "October", "November", "December"];
		let shortDate = days[inputDate.getDay()] + ", " 
						+ months[inputDate.getMonth()] + " " 
						+ inputDate.getDate() + ", " 
						+ inputDate.getFullYear();
		return shortDate;
	}

	render () {
		if (this.props.editMode) {
			return (
				<div className="page-header" id="single-entry-header">
				<h2 className="header-author">
					{this.props.author}
				</h2>
				<br/>
				<h3 className="header-date"> {this.createShortDate(this.props.date)} </h3>
				<div class="header-button-container">
					<EditButton id={this.props.id}/>
					<DeleteButton id={this.props.id}/>
				</div>
			</div>
			)
		} else {
			return (
				<div className="page-header" id="single-entry-header">
					{/* TODO: add logic to only display below button if this.props.author is not self */}
					<ToggleFriendButton username={this.props.author}/>
					<h2 className="header-author">
						{this.props.author}
					</h2>
					<br/>
					<h3 className="header-date"> {this.createShortDate(this.props.date)} </h3>
					<div class="header-button-container">
						<DeleteButton id={this.props.id}/>
					</div>
				</div>
			);
		}
	}
}

export default SingleEntryHeader;