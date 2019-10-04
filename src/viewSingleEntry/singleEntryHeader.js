import React from 'react';

import EditButton from './editButton.js';

class SingleEntryHeader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div class="singleEntryHeader">
        <header> {this.props.date} </header>
				<EditButton/>
			</div>
		);
	}
}

export default SingleEntryHeader;
