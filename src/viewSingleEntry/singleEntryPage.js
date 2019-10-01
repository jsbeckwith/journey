import React from 'react';

import './singleEntryPage.css';
import EditButton from './editButton.js';
import EntryDisplay from '../entryDisplay.js';

class SingleEntryPage extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div>
        <EntryDisplay/>
				<EditButton/>
			</div>
		);
	}
}

export default SingleEntryPage;
