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
				<header class="header-author"> author:  {this.props.author} </header>
				<br/>
        		<header class="header-date"> date:  {this.props.date} </header>
        		<div className="header-button-container">
					<EditButton/>
					<DeleteButton/>
				</div>
			</div>
		);
	}
}

export default SingleEntryHeader;

