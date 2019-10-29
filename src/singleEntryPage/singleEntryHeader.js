import React from 'react';
import EditButton from '../buttons/editButton.js';
import DeleteButton from '../buttons/deleteButton.js';

class SingleEntryHeader extends React.Component {
	constructor (props) {
		super(props);
	}
	
	render () {
		if (this.props.pageMode) {
			return (
				<div class="single-entry-header">
					<header class="header-author"> {this.props.author} </header>
					<br/>
					<header class="header-date"> {this.props.date} </header>
					<div className="header-button-container">
						<EditButton/>
						<DeleteButton/>
					</div>
				</div>
			);
		} else {
			return (
				<div class="single-entry-header">
					<header class="header-author"> {this.props.author} </header>
					<br/>
					<header class="header-date"> {this.props.date} </header>
					<div className="header-button-container">
						<DeleteButton/>
					</div>
				</div>
			);
		}
	}
}

export default SingleEntryHeader;