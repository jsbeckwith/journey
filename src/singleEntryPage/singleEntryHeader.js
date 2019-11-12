import React from 'react';
import EditButton from '../buttons/editButton.js';
import DeleteButton from '../buttons/deleteButton.js';

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
		return (
			<div class="single-entry-header">
				<header class="header-author"><i class="fa fa-user" id="user"></i>
										      {this.props.author} </header>
				<br/>
        		<header class="header-date"> {this.createShortDate(this.props.date)} </header>
			</div>
		);
	}
}

export default SingleEntryHeader;

