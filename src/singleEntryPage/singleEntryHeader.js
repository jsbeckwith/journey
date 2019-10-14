import React from 'react';
import EditButton from '../buttons/editButton.js';
import DeleteButton from '../buttons/deleteButton.js';

class SingleEntryHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div class="single-entry-header">
				<header class="header-author"> {this.props.author} </header>
				<br/>
        		<header class="header-date"> {this.props.date} </header>
        		<div className="header-button-container">
					<EditButton/>
					{/* <DeleteButton/> something about having more than one button
					in this div causes a fatal error, so commenting out for now */}
				</div>
			</div>
		);
	}
}

export default SingleEntryHeader;

