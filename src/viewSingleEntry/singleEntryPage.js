import React from 'react';

import './singleEntryPage.scss';
import EditButton from './editButton.js';
import EntryDisplay from '../entryDisplay.js';
import SingleEntryHeader from "./singleEntryHeader.js";

class SingleEntryPage extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div>
				<SingleEntryHeader date={this.props.date}/>
        <EntryDisplay/>
			</div>
		);
	}
}

export default SingleEntryPage;
