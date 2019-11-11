import React from 'react';
import EditButton from '../buttons/editButton.js';
import DeleteButton from '../buttons/deleteButton.js';

class SingleEntryHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	createShortDate(entryDate) {
		let inputDate = new Date(entryDate);
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		let shortDate = months[inputDate.getMonth()] + " " + inputDate.getDate();
		return shortDate;
	}

	render () {
		return (
			<div class="single-entry-header">
				<header class="header-author"><i class="fa fa-user" id="user"></i>
										      {this.props.author} </header>
				<br/>
        		<header class="header-date"> date:  {this.createShortDate(this.props.date)} </header>
        		<div className="header-button-container">
					<EditButton id={this.props.id}/>
					<DeleteButton id={this.props.id} date={this.props.date} author={this.props.author} content={this.props.content}/>
        		<div className="header-button-container">
					<EditButton/>
					<DeleteButton/>
				</div>
			</div>
		);
	}
}

export default SingleEntryHeader;

