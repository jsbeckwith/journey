import React from 'react';

import EditButton from './editButton.js';
import DeleteButton from '../deleteButton.js';

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
				<EditButton />
        		<DeleteButton/>
			</div>
		);
	}
}

export default SingleEntryHeader;
