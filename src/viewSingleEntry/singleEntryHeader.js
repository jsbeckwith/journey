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
        <header> {this.props.date} </header>
				<EditButton/>
        <DeleteButton/>
			</div>
		);
	}
}

export default SingleEntryHeader;
