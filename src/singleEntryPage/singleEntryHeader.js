import React from 'react';
import EditButton from '../buttons/editButton.js';
import DeleteButton from '../buttons/deleteButton.js';

class SingleEntryHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div class="singleEntryHeader">
				<header class="headerAuthor"> {this.props.author} </header>
				<br/>
        		<header class="headerDate"> {this.props.date} </header>
        		<DeleteButton/>
				<EditButton/>
			</div>
		);
	}
}

export default SingleEntryHeader;

