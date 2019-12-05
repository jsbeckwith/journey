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
		if (this.props.editMode) {
			return (
				<div className="page-header" id="single-entry-header">
				<h2 className="header-author">
					{this.props.author}
				</h2>
				{/* if author is not self, display <ToggleFriendButton username={this.props.author}/> here */}
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
					<h2 className="header-author">
						{/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.62 24" className="user-pic">
							<path id="user" class="cls-1" d="M1374.83,312c-0.51-4.347-2.32-8-6.83-8s-6.32,3.653-6.83,8h-1.99c0.65-5.425,3.21-10,8.82-10s8.17,4.575,8.82,10h-1.99ZM1368,300a6,6,0,1,1,6-6A6,6,0,0,1,1368,300Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,1368,290Z" transform="translate(-1359.19 -288)"/>
						</svg>*/
							/*add in profile pics later-- probably as separate component*/}
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